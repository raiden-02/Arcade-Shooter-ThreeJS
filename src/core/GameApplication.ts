// src/core/GameApplication.ts
import { IGameEngine } from '../interfaces/IGameEngine';
import { IScene } from '../interfaces/IScene';
import { IUIManager } from '../interfaces/IUIManager';
// import { DevLevel } from '../levels/DevLevel'; // Temporarily commented out

import { GameState } from './GameStateMachine';
import { MultiplayerEngine } from './MultiplayerEngine';
import { ProductionUIManager } from './ProductionUIManager';
import { SinglePlayerEngine } from './SinglePlayerEngine';

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

      // Create UI manager
      this.uiManager = new ProductionUIManager();

      // Load initial scene (temporarily disabled for testing)
      // this.currentScene = new DevLevel();
      // if (this.currentScene) {
      //   await this.engine.loadScene(this.currentScene);
      // }

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
    switch (config.mode) {
      case GameMode.SinglePlayer:
        return new SinglePlayerEngine(this.container);

      case GameMode.Multiplayer:
        const serverUrl = config.serverUrl || 'ws://localhost:3000';
        const multiplayerEngine = new MultiplayerEngine(this.container, serverUrl);

        // Network manager is now created internally by the engine
        // Additional connection setup can be done here if needed

        return multiplayerEngine;

      default:
        throw new Error(`Unsupported game mode: ${config.mode}`);
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
