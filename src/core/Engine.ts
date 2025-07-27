import * as THREE from 'three';
import { EntityManager } from 'yuka';

import { UIManager } from '../ui/UIManager';

import { GameStateMachine, GameState } from './GameStateMachine';
import { InputManager } from './InputManager';
import { NavMeshService } from './NavMeshService';
import { PhysicsHelper } from './PhysicsHelper';
import { IScene } from './Scene';
import { SettingsService } from './SettingsService';
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
  public settingsService!: SettingsService;
  public ui: UIManager;
  public navMesh: NavMeshService;
  // Yuka AI entity manager for steering behaviors and FSMs
  public entityManager: EntityManager;
  private currentScene: IScene | null = null;
  private clock: THREE.Clock;
  public getTime(): number {
    return this.clock.getElapsedTime();
  }
  // Global state machine for game states (Boot → MainMenu → Playing → Paused → GameOver)
  public stateMachine: GameStateMachine;

  // Optional networking update method (implemented by MultiplayerEngine)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public updateNetworking(_delta: number): void {
    // Base implementation does nothing - overridden in MultiplayerEngine
  }

  constructor(container?: HTMLElement) {
    // Settings service (load persisted settings)
    this.settingsService = new SettingsService();
    // Scene and renderer
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // Apply user resolution scale
    const { graphics } = this.settingsService.getSettings();
    this.renderer.setPixelRatio(window.devicePixelRatio * graphics.resolutionScale);
    const mount = container ?? document.body;
    mount.appendChild(this.renderer.domElement);

    // Camera (use user FOV)
    this.camera = new THREE.PerspectiveCamera(
      this.settingsService.getSettings().graphics.fov,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    // Clock
    this.clock = new THREE.Clock();

    // Input
    this.input = new InputManager();
    // Apply input settings
    const { mouseSensitivity, invertY } = this.settingsService.getSettings().input;
    this.input.setSensitivity(mouseSensitivity);
    this.input.setInvertY(invertY);

    // Physics
    this.physics = new PhysicsHelper();

    // UI (includes settings panel)
    this.ui = new UIManager(this.settingsService, this);

    // State machine
    this.stateMachine = new GameStateMachine();
    // Tie UI and pointer lock behavior to state transitions
    this.stateMachine.onStateChange((_, next) => {
      if (next === GameState.MainMenu) {
        this.ui.showMainMenu();
        this.ui.hidePause();
      } else if (next === GameState.Paused) {
        this.ui.showPause();
        this.ui.hideMainMenu();
      } else if (next === GameState.Playing) {
        this.ui.hidePause();
        this.ui.hideMainMenu();
        this.renderer.domElement.requestPointerLock();
        this.clock.getDelta();
      }
    });

    // Skybox load from public folder
    const basePath = import.meta.env.BASE_URL;
    new SkyBox(this.renderer, this.scene, `${basePath}skybox/`);

    // Initialize NavMeshService for pathfinding (temporarily disabled until Phase 4)
    // TODO: Re-enable when we implement AI pathfinding and create the navmesh file
    this.navMesh = new NavMeshService(this.scene);
    // this.navMesh
    //   .load(`${basePath}navmesh/navmesh.glb`)
    //   .then(() => console.log('NavMesh loaded successfully'))
    //   .catch(err => console.error('Failed to load NavMesh:', err));
    console.log('NavMesh loading temporarily disabled - will be enabled in Phase 4');

    // Yuka AI: entity manager for steering behaviors and state machines
    this.entityManager = new EntityManager();

    // Handle resize
    window.addEventListener('resize', () => this.onWindowResize());

    // Pause when pointer lock is lost (disabled in multiplayer)
    document.addEventListener('pointerlockchange', () => {
      // Don't pause in multiplayer mode
      if (this.isInMultiplayerMode && this.isInMultiplayerMode()) {
        return;
      }

      if (document.pointerLockElement !== this.renderer.domElement) {
        this.stateMachine.transition(GameState.Paused);
      }
    });
    // Escape toggles between playing and paused (disabled in multiplayer)
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        // Don't pause in multiplayer mode
        if (this.isInMultiplayerMode && this.isInMultiplayerMode()) {
          return;
        }

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
   * Check if currently in multiplayer mode (overridden in MultiplayerEngine)
   */
  public isInMultiplayerMode(): boolean {
    return false;
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
    // Update Yuka AI entities
    this.entityManager.update(delta);

    // Update networking (overridden in MultiplayerEngine)
    this.updateNetworking(delta);

    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
