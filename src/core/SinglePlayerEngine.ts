// src/core/SinglePlayerEngine.ts
import * as THREE from 'three';

import { IGameEngine } from '../interfaces/IGameEngine';
import { IInputManager } from '../interfaces/IInputManager';
import { INetworkManager } from '../interfaces/INetworkManager';
import { IPhysicsWorld } from '../interfaces/IPhysicsWorld';
import { IScene } from '../interfaces/IScene';
import { UIManager } from '../ui/UIManager';

import { GameState, GameStateMachine } from './GameStateMachine';
import { ProductionInputManager } from './ProductionInputManager';
import { ProductionPhysicsWorld } from './ProductionPhysicsWorld';
import { SettingsService } from './SettingsService';

/**
 * Single-player game engine implementation
 */
export class SinglePlayerEngine implements IGameEngine {
  // Three.js core
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private clock: THREE.Clock;

  // Game systems
  public readonly inputManager: IInputManager;
  public readonly physicsWorld: IPhysicsWorld;
  public readonly settingsService: SettingsService;
  public readonly networkManager?: INetworkManager;
  public readonly ui: UIManager;
  private multiplayer: boolean;
  private stateMachine: GameStateMachine;

  // Scene management
  private currentScene: IScene | null = null;
  private isRunning: boolean = false;

  constructor(
    container: HTMLElement,
    networkManager?: INetworkManager,
    multiplayer: boolean = false,
  ) {
    // Initialize Three.js
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Ensure canvas fills the screen properly
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';

    container.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();

    // Initialize game systems
    this.settingsService = new SettingsService();
    this.inputManager = new ProductionInputManager();
    this.physicsWorld = new ProductionPhysicsWorld();
    this.networkManager = networkManager;
    this.multiplayer = multiplayer;
    this.stateMachine = new GameStateMachine();

    // Initialize UI Manager
    this.ui = new UIManager(this.settingsService, this);

    // Set up camera
    this.camera.position.set(0, 1.7, 5);

    // Setup pointer lock for camera control
    this.setupPointerLock();

    // Handle window resize
    this.setupWindowResize();
  }

  // IGameEngine implementation
  public async loadScene(scene: IScene): Promise<void> {
    console.log(`Loading scene: ${scene.name}`);

    // Deactivate current scene
    if (this.currentScene) {
      this.currentScene.deactivate();
    }

    // Initialize new scene
    await scene.initialize(this);
    this.currentScene = scene;

    // Activate new scene
    scene.activate();

    console.log(`Scene loaded: ${scene.name}`);
  }

  public getCurrentScene(): IScene | null {
    return this.currentScene;
  }

  public getCurrentState(): GameState {
    return this.stateMachine.getState();
  }

  public transitionToState(state: GameState): void {
    this.stateMachine.transition(state);
  }

  public start(): void {
    console.log('Starting SinglePlayerEngine...');
    this.isRunning = true;

    // Start in Playing state to show game UI and enable controls
    this.transitionToState(GameState.Playing);

    // If multiplayer is enabled and a network manager exists, connect to the server
    const nm = this.networkManager as unknown as {
      connect?: (url: string) => Promise<boolean>;
      getSessionId?: () => string | null;
    };
    if (this.multiplayer && nm && typeof nm.connect === 'function') {
      // Use default URL from adapter; connect returns true if ok
      nm.connect('ws://localhost:3000').catch(err =>
        console.warn('Network connect failed (non-fatal for SP):', err),
      );
    }

    this.gameLoop();
  }

  public stop(): void {
    console.log('Stopping SinglePlayerEngine...');
    this.isRunning = false;
  }

  public update(deltaTime: number): void {
    // Update input
    this.inputManager.update();

    // Update physics
    this.physicsWorld.step(deltaTime);

    // Update current scene
    if (this.currentScene) {
      this.currentScene.update(deltaTime);
    }
  }

  public isMultiplayer(): boolean {
    return this.multiplayer;
  }

  public getPlayerId(): string | null {
    return this.networkManager?.getLocalPlayerId() ?? 'local-player';
  }

  // Additional methods for Three.js integration
  public getThreeScene(): THREE.Scene {
    return this.scene;
  }

  public getCamera(): THREE.Camera {
    return this.camera;
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  private gameLoop(): void {
    if (!this.isRunning) return;

    const deltaTime = this.clock.getDelta();

    // Update game systems
    this.update(deltaTime);

    // Render current scene
    if (this.currentScene) {
      this.currentScene.render();
    } else {
      // Default render if no scene
      this.renderer.render(this.scene, this.camera);
    }

    requestAnimationFrame(() => this.gameLoop());
  }

  private setupWindowResize(): void {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  private setupPointerLock(): void {
    // State machine UI handling
    this.stateMachine.onStateChange((_, next) => {
      if (next === GameState.MainMenu) {
        this.ui.hidePause();
        this.ui.showMainMenu();
      } else if (next === GameState.Paused) {
        this.ui.showPause();
        this.ui.hideMainMenu();
      } else if (next === GameState.Playing) {
        this.ui.hidePause();
        this.ui.hideMainMenu();
        // Request pointer lock for FPS controls
        this.renderer.domElement.requestPointerLock();
      }
    });

    // Handle pointer lock changes
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== this.renderer.domElement) {
        if (this.getCurrentState() === GameState.Playing) {
          this.transitionToState(GameState.Paused);
        }
      }
    });

    // Handle escape key
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        if (this.getCurrentState() !== GameState.Paused) {
          document.exitPointerLock();
        } else {
          this.transitionToState(GameState.Playing);
        }
      }
    });
  }
}
