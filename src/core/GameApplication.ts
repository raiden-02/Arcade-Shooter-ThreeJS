// src/core/GameApplication.ts
import * as THREE from 'three';

import { IGameEngine } from '../interfaces/IGameEngine';
import { IScene } from '../interfaces/IScene';
import { IUIManager } from '../interfaces/IUIManager';

import { GameState } from './GameStateMachine';
import { GameUIManager } from './GameUIManager';

export enum GameMode {
  SinglePlayer = 'singleplayer',
  Multiplayer = 'multiplayer',
}

export interface GameConfig {
  mode: GameMode;
  serverUrl?: string;
  playerName?: string;
  sessionId?: string;
  sessionName?: string;
  maxPlayers?: number;
}

/**
 * Main game application class - orchestrates all game systems
 * This is the entry point for the entire game
 */
export class GameApplication {
  private engine: IGameEngine | null = null;
  private uiManager: IUIManager | null = null;
  private currentScene: IScene | null = null;
  private isRunning: boolean = false;
  private gameConfig: GameConfig | null = null;

  constructor(private container: HTMLElement) {
    this.setupGlobalErrorHandling();
  }

  /**
   * Initialize the game application with the specified configuration
   */
  public async initialize(config: GameConfig): Promise<void> {
    console.log('🎮 Initializing Game Application...', config);

    try {
      this.gameConfig = config;

      // Create engine based on game mode
      this.engine = await this.createEngine(config);

      // Create UI manager with the engine
      this.uiManager = new GameUIManager(this.engine);

      // Load initial scene
      const { DevLevel } = await import('../levels/DevLevel');
      this.currentScene = new DevLevel();
      if (this.currentScene) {
        await this.engine.loadScene(this.currentScene);
      }

      // Set up game state transitions
      this.setupGameStateHandlers();

      console.log('✅ Game Application initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize game application:', error);
      throw error;
    }
  }

  /**
   * Start the game application
   */
  public start(): void {
    if (!this.engine || !this.uiManager) {
      throw new Error('Game application not initialized');
    }

    console.log('🚀 Starting Game Application...');

    this.isRunning = true;
    this.engine.start();
    this.uiManager.showMainMenu();

    console.log('✅ Game Application started');
  }

  /**
   * Stop the game application
   */
  public stop(): void {
    console.log('🛑 Stopping Game Application...');

    this.isRunning = false;

    if (this.engine) {
      this.engine.stop();
    }

    if (this.uiManager) {
      this.uiManager.dispose();
    }

    if (this.currentScene) {
      this.currentScene.dispose();
    }

    console.log('✅ Game Application stopped');
  }

  /**
   * Start single player mode
   */
  public async startSinglePlayer(): Promise<void> {
    if (!this.engine) {
      const config: GameConfig = { mode: GameMode.SinglePlayer };
      await this.initialize(config);
    }

    this.engine!.transitionToState(GameState.Playing);
  }

  /**
   * Create and join a multiplayer session
   */
  public async createMultiplayerSession(
    sessionName: string,
    maxPlayers: number,
    playerName: string,
  ): Promise<string> {
    if (!this.engine || !this.engine.isMultiplayer()) {
      const config: GameConfig = {
        mode: GameMode.Multiplayer,
        serverUrl: 'ws://localhost:3000',
        playerName,
        sessionName,
        maxPlayers,
      };
      await this.initialize(config);
    }

    const networkManager = this.engine!.networkManager;
    if (!networkManager) {
      throw new Error('Network manager not available');
    }

    const sessionId = await networkManager.createSession(sessionName, maxPlayers);
    await networkManager.joinSession(sessionId, playerName);

    this.engine!.transitionToState(GameState.Playing);
    return sessionId;
  }

  /**
   * Join an existing multiplayer session
   */
  public async joinMultiplayerSession(sessionId: string, playerName: string): Promise<void> {
    if (!this.engine || !this.engine.isMultiplayer()) {
      const config: GameConfig = {
        mode: GameMode.Multiplayer,
        serverUrl: 'ws://localhost:3000',
        playerName,
        sessionId,
      };
      await this.initialize(config);
    }

    const networkManager = this.engine!.networkManager;
    if (!networkManager) {
      throw new Error('Network manager not available');
    }

    const success = await networkManager.joinSession(sessionId, playerName);
    if (!success) {
      throw new Error('Failed to join session');
    }

    this.engine!.transitionToState(GameState.Playing);
  }

  /**
   * Get current game state for debugging
   */
  public getDebugInfo(): Record<string, unknown> {
    if (!this.engine) {
      return { error: 'Engine not initialized' };
    }

    return {
      gameMode: this.gameConfig?.mode,
      currentState: this.engine.getCurrentState(),
      isMultiplayer: this.engine.isMultiplayer(),
      playerId: this.engine.getPlayerId(),
      sceneName: this.currentScene?.name,
      isRunning: this.isRunning,
      playerCount: this.currentScene?.getAllPlayers().length || 0,
    };
  }

  /**
   * Create the appropriate engine based on configuration
   */
  private async createEngine(config: GameConfig): Promise<IGameEngine> {
    console.log('🔧 Creating engine for mode:', config.mode);

    if (config.mode === GameMode.Multiplayer) {
      // Create multiplayer engine with connectToServer method
      const multiplayerEngine: IGameEngine & { connectToServer: () => Promise<void> } = {
        inputManager: {
          setSensitivity: () => {},
          setInvertY: () => {},
          getCurrentInput: () => ({
            moveForward: false,
            moveBackward: false,
            moveLeft: false,
            moveRight: false,
            jump: false,
            fire: false,
            reload: false,
            mouseDeltaX: 0,
            mouseDeltaY: 0,
          }),
          isKeyPressed: () => false,
          getMouseDelta: () => ({ x: 0, y: 0 }),
          onKeyDown: () => {},
          onKeyUp: () => {},
          onMouseMove: () => {},
          enable: () => {},
          disable: () => {},
          update: () => {},
        },
        physicsWorld: {
          setGravity: () => {},
          step: () => {},
          addRigidBody: () => {},
          removeRigidBody: () => {},
          updateRigidBody: () => {},
          raycast: () => ({
            hasCollision: false,
            point: new THREE.Vector3(),
            normal: new THREE.Vector3(),
            distance: 0,
          }),
          sphereCast: () => ({
            hasCollision: false,
            point: new THREE.Vector3(),
            normal: new THREE.Vector3(),
            distance: 0,
          }),
          checkCollision: () => false,
          getOverlappingBodies: () => [],
          dispose: () => {},
        },
        networkManager: {
          connect: async () => true,
          disconnect: () => {},
          isConnected: () => true,
          createSession: async (sessionName: string, maxPlayers: number) => {
            const sessionId = `SESSION_${Date.now().toString().slice(-6)}`;
            console.log(`✅ Created session: ${sessionId} (${sessionName}, ${maxPlayers} players)`);
            setTimeout(() => {
              if (this.uiManager) {
                this.uiManager.displaySessionId(sessionId);
              }
            }, 1000);
            return sessionId;
          },
          joinSession: async (sessionId: string, playerName: string) => {
            console.log(`✅ Joined session: ${sessionId} as ${playerName}`);
            return true;
          },
          leaveSession: () => {},
          getLocalPlayerId: () => 'player-123',
          getLocalPlayerName: () => 'Player',
          sendPlayerState: () => {},
          sendGameAction: () => {},
          onGameStateUpdate: () => {},
          onPlayerJoined: () => {},
          onPlayerLeft: () => {},
          onGameAction: () => {},
          getCurrentGameState: () => null,
          getSessionId: () => `SESSION_${Date.now().toString().slice(-6)}`,
        },

        loadScene: async (scene: IScene) => {
          console.log(`📋 Loading scene: ${scene.name}`);
          this.currentScene = scene;
          await scene.initialize(multiplayerEngine);
        },

        getCurrentScene: () => this.currentScene,
        getCurrentState: () => GameState.MainMenu,

        transitionToState: (state: GameState) => {
          console.log(`🔄 Transitioning to state: ${state}`);
          if (this.uiManager) {
            this.uiManager.handleGameStateChange(GameState.MainMenu, state);
          }
        },

        start: () => {
          console.log(`🚀 Multiplayer engine started`);
        },

        stop: () => {
          console.log('⏸️ Multiplayer engine stopped');
        },

        update: (deltaTime: number) => {
          void deltaTime;
        },

        isMultiplayer: () => true,
        getPlayerId: () => 'player-123',

        // Add the connectToServer method that MainMenu checks for
        connectToServer: async () => {
          console.log('🌐 Connecting to Colyseus server at ws://localhost:3000');
          // TODO: Implement actual Colyseus connection
        },
      };

      console.log('✅ Multiplayer engine created');
      return multiplayerEngine;
    } else {
      // Create single player engine
      const singlePlayerEngine: IGameEngine = {
        inputManager: {
          setSensitivity: () => {},
          setInvertY: () => {},
          getCurrentInput: () => ({
            moveForward: false,
            moveBackward: false,
            moveLeft: false,
            moveRight: false,
            jump: false,
            fire: false,
            reload: false,
            mouseDeltaX: 0,
            mouseDeltaY: 0,
          }),
          isKeyPressed: () => false,
          getMouseDelta: () => ({ x: 0, y: 0 }),
          onKeyDown: () => {},
          onKeyUp: () => {},
          onMouseMove: () => {},
          enable: () => {},
          disable: () => {},
          update: () => {},
        },
        physicsWorld: {
          setGravity: () => {},
          step: () => {},
          addRigidBody: () => {},
          removeRigidBody: () => {},
          updateRigidBody: () => {},
          raycast: () => ({
            hasCollision: false,
            point: new THREE.Vector3(),
            normal: new THREE.Vector3(),
            distance: 0,
          }),
          sphereCast: () => ({
            hasCollision: false,
            point: new THREE.Vector3(),
            normal: new THREE.Vector3(),
            distance: 0,
          }),
          checkCollision: () => false,
          getOverlappingBodies: () => [],
          dispose: () => {},
        },
        networkManager: undefined,

        loadScene: async (scene: IScene) => {
          console.log(`📋 Loading scene: ${scene.name}`);
          this.currentScene = scene;
          await scene.initialize(singlePlayerEngine);
        },

        getCurrentScene: () => this.currentScene,
        getCurrentState: () => GameState.MainMenu,

        transitionToState: (state: GameState) => {
          console.log(`🔄 Transitioning to state: ${state}`);
          if (this.uiManager) {
            this.uiManager.handleGameStateChange(GameState.MainMenu, state);
          }
        },

        start: () => {
          console.log(`🚀 Single player engine started`);
        },

        stop: () => {
          console.log('⏸️ Single player engine stopped');
        },

        update: (deltaTime: number) => {
          void deltaTime;
        },

        isMultiplayer: () => false,
        getPlayerId: () => 'local-player',
      };

      console.log('✅ Single player engine created');
      return singlePlayerEngine;
    }
  }

  /**
   * Set up handlers for game state transitions
   */
  private setupGameStateHandlers(): void {
    if (!this.engine || !this.uiManager) return;

    // Note: State change handling is done through direct UI manager calls
    // when state transitions occur in the engine implementations
  }

  /**
   * Set up global error handling
   */
  private setupGlobalErrorHandling(): void {
    window.addEventListener('error', event => {
      console.error('🚨 Global Error:', event.error);
      // Could show error UI here
    });

    window.addEventListener('unhandledrejection', event => {
      console.error('🚨 Unhandled Promise Rejection:', event.reason);
      // Could show error UI here
    });
  }
}
