// Multiplayer Engine with Colyseus Integration
import { ColyseusNetworkManager } from './ColyseusNetworkManager';
import { Engine } from './Engine';
import { GameState } from './GameStateMachine';

/**
 * Enhanced Engine with Colyseus multiplayer capabilities
 * Extends the base Engine with networking functionality
 */
export class MultiplayerEngine extends Engine {
  private networkManager: ColyseusNetworkManager;
  private isMultiplayerMode: boolean = false;
  private currentPlayerName: string = '';

  constructor(container: HTMLElement, serverUrl: string = 'ws://localhost:3000') {
    super(container);
    this.networkManager = new ColyseusNetworkManager(serverUrl);

    // Set up network event handlers
    this.setupNetworkHandlers();
  }

  private setupNetworkHandlers(): void {
    // Handle room state changes (players, projectiles, enemies)
    this.networkManager.onStateChange(roomState => {
      if (!this.isMultiplayerMode) return;

      // Log state updates for debugging
      console.log(
        `Room state update - Players: ${roomState.players.size}, Projectiles: ${roomState.projectiles.length}`,
      );

      // Here you would update the game world with the server state
      // For now, just log the data
      roomState.players.forEach((player, id) => {
        if (id !== this.networkManager.getPlayerId()) {
          console.log(`Remote player ${player.name} at (${player.x}, ${player.y}, ${player.z})`);
        }
      });
    });

    // Handle player join/leave events
    this.networkManager.onPlayerJoin(player => {
      console.log(`Player joined: ${player.name}`);
    });

    this.networkManager.onPlayerLeave(playerId => {
      console.log(`Player left: ${playerId}`);
    });
  }

  /**
   * Start multiplayer mode by connecting to Colyseus server
   */
  public async startMultiplayer(playerName?: string): Promise<boolean> {
    try {
      console.log('Connecting to Colyseus server...');

      this.currentPlayerName = playerName || `Player_${Date.now().toString().slice(-6)}`;
      this.isMultiplayerMode = true;

      // Connect to the game room using the correct method
      const success = await this.networkManager.connectAndJoin(this.currentPlayerName);

      if (success) {
        console.log(`Successfully joined multiplayer as ${this.currentPlayerName}`);
        // Transition to playing state when connected
        this.stateMachine.transition(GameState.Playing);
        return true;
      } else {
        console.error('Failed to join multiplayer room');
        this.isMultiplayerMode = false;
        return false;
      }
    } catch (error) {
      console.error('Multiplayer connection error:', error);
      this.isMultiplayerMode = false;
      return false;
    }
  }

  /**
   * Start single player mode (local game only)
   */
  public startSinglePlayer(): void {
    console.log('🎮 Starting single-player mode');
    this.isMultiplayerMode = false;
    this.stateMachine.transition(GameState.Playing);
  }

  /**
   * Get current game state for debugging
   */
  public getGameState(): object {
    return {
      state: this.stateMachine.getState(),
      isMultiplayer: this.isMultiplayerMode,
      playerName: this.currentPlayerName,
      connectionState: this.networkManager.getConnectionState(),
      playerId: this.networkManager.getPlayerId(),
    };
  }

  /**
   * Disconnect from multiplayer server
   */
  public disconnect(): void {
    console.log('🔌 Disconnecting from server...');
    this.networkManager.disconnect();
    this.isMultiplayerMode = false;
  }

  /**
   * Check if currently in multiplayer mode
   */
  public isInMultiplayerMode(): boolean {
    return this.isMultiplayerMode;
  }

  /**
   * Get the network manager for advanced usage
   */
  public getNetworkManager(): ColyseusNetworkManager {
    return this.networkManager;
  }

  /**
   * Send input to server (for multiplayer)
   */
  public sendInput(input: {
    moveX: number;
    moveZ: number;
    lookYaw: number;
    lookPitch: number;
    fire: boolean;
    dt?: number;
  }): void {
    if (this.isMultiplayerMode) {
      this.networkManager.sendInput(input);
    }
  }

  /**
   * Clean up network connections
   */
  public dispose(): void {
    this.disconnect();
    // Note: Engine class doesn't have dispose method, so just handle cleanup here
  }
}
