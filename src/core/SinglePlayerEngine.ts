// src/core/SinglePlayerEngine.ts
import * as THREE from 'three';

import { IGameEngine } from '../interfaces/IGameEngine';
import { IInputManager } from '../interfaces/IInputManager';
import { IPhysicsWorld } from '../interfaces/IPhysicsWorld';
import { IScene } from '../interfaces/IScene';

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
  private stateMachine: GameStateMachine;

  // Scene management
  private currentScene: IScene | null = null;
  private isRunning: boolean = false;

  constructor(container: HTMLElement) {
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
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();

    // Initialize game systems
    this.settingsService = new SettingsService();
    this.inputManager = new ProductionInputManager();
    this.physicsWorld = new ProductionPhysicsWorld();
    this.stateMachine = new GameStateMachine();

    // Set up camera
    this.camera.position.set(0, 1.7, 5);

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
    return false;
  }

  public getPlayerId(): string | null {
    return 'local-player';
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
}
