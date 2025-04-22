// src/core/Engine.ts
import * as THREE from 'three';

import { UIManager } from '../ui/UIManager';

import { GameStateMachine, GameState } from './GameStateMachine';
import { InputManager } from './InputManager';
import { PhysicsHelper } from './PhysicsHelper';
import { IScene } from './Scene';
import { SkyBox } from './SkyBox';

/**
 * Core engine that manages the render loop, global systems, and scene transitions.
 */
export class Engine {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  public input: InputManager;
  public physics: PhysicsHelper;
  public ui: UIManager;
  private currentScene: IScene | null = null;
  private clock: THREE.Clock;
  public getTime(): number {
    return this.clock.getElapsedTime();
  }
  // Global state machine for game states (Boot → MainMenu → Playing → Paused → GameOver)
  public stateMachine: GameStateMachine;

  constructor(container?: HTMLElement) {
    // Scene and renderer
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    const mount = container ?? document.body;
    mount.appendChild(this.renderer.domElement);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    // Clock
    this.clock = new THREE.Clock();

    // Input
    this.input = new InputManager();

    // Physics
    this.physics = new PhysicsHelper();

    // UI
    this.ui = new UIManager();

    // State machine
    this.stateMachine = new GameStateMachine();
    // Tie UI and pointer lock behavior to state transitions
    this.stateMachine.onStateChange((_, next) => {
      if (next === GameState.Paused) {
        this.ui.showPause();
      } else if (next === GameState.Playing) {
        this.ui.hidePause();
        this.renderer.domElement.requestPointerLock();
        this.clock.getDelta();
      }
    });

    // Skybox load from public folder
    const basePath = import.meta.env.BASE_URL;
    new SkyBox(this.renderer, this.scene, `${basePath}skybox/`);

    // Handle resize
    window.addEventListener('resize', () => this.onWindowResize());

    // Pause when pointer lock is lost
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== this.renderer.domElement) {
        this.stateMachine.transition(GameState.Paused);
      }
    });
    // Escape toggles between playing and paused
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        if (this.stateMachine.getState() !== GameState.Paused) {
          document.exitPointerLock();
        } else {
          this.stateMachine.transition(GameState.Playing);
        }
      }
    });
    // Resume from pause via PauseMenu "Resume" button
    document.addEventListener('unpause', () => {
      this.stateMachine.transition(GameState.Playing);
    });
  }

  /**
   * Transition to a new scene, disposing the old.
   */
  public changeScene(scene: IScene): void {
    if (this.currentScene) {
      this.currentScene.dispose();
    }
    this.currentScene = scene;
    this.currentScene.init();
  }

  /**
   * Start the engine loop.
   */
  public start(): void {
    this.animate();
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);
    // Skip updates when paused
    if (this.stateMachine.getState() === GameState.Paused) {
      this.clock.getDelta();
      return;
    }
    const delta = this.clock.getDelta();
    this.physics.step(delta);
    if (this.currentScene) {
      this.currentScene.update(delta);
    }
    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
