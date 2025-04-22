// src/core/Engine.ts
import * as THREE from 'three';

import { UIManager } from '../ui/UIManager';

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
  /**
   * Returns elapsed time since engine start.
   */
  public getTime(): number {
    return this.clock.getElapsedTime();
  }
  private paused: boolean = false;

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

    // Skybox
    new SkyBox(this.renderer, this.scene, '/skybox/');

    // Handle resize
    window.addEventListener('resize', () => this.onWindowResize());

    // Pause via pointer lock change
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== this.renderer.domElement) {
        this.paused = true;
        this.ui.showPause();
      }
    });
    // Escape toggles pause
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        if (!this.paused) {
          document.exitPointerLock();
        } else {
          this.paused = false;
          this.ui.hidePause();
          this.renderer.domElement.requestPointerLock();
          this.clock.getDelta();
        }
      }
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
    if (this.paused) {
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
