// src/core/SimpleNetworkManager.ts
import { INetworkManager, IGameState, INetworkMessage } from '../interfaces/INetworkManager';
import { IPlayerState } from '../interfaces/IPlayer';

/**
 * Simple network manager for multiplayer functionality
 */
export class SimpleNetworkManager implements INetworkManager {
  private currentSessionId: string | null = null;
  private _isConnected: boolean = false;
  private localPlayerId: string | null = null;
  private localPlayerName: string = '';

  // Connection management
  public async connect(serverUrl: string): Promise<boolean> {
    console.log(`Connecting to server: ${serverUrl}`);
    this._isConnected = true;
    return true;
  }

  public disconnect(): void {
    console.log('Disconnecting from server');
    this._isConnected = false;
    this.currentSessionId = null;
  }

  public isConnected(): boolean {
    return this._isConnected;
  }

  // Session management
  public async createSession(sessionName: string, maxPlayers: number): Promise<string> {
    console.log(`Creating session: ${sessionName} (${maxPlayers} players)`);

    // Generate a simple session ID
    this.currentSessionId = `SESSION_${Date.now().toString().slice(-6)}`;
    this._isConnected = true;

    console.log(`✅ Session created: ${this.currentSessionId}`);
    return this.currentSessionId;
  }

  public async joinSession(sessionId: string, playerName: string): Promise<boolean> {
    console.log(`Joining session: ${sessionId} as ${playerName}`);

    this.currentSessionId = sessionId;
    this.localPlayerName = playerName;
    this.localPlayerId = `player_${Date.now()}`;
    this._isConnected = true;

    console.log(`✅ Joined session: ${sessionId}`);
    return true;
  }

  public leaveSession(): void {
    console.log(`Leaving session: ${this.currentSessionId}`);
    this.currentSessionId = null;
    this.localPlayerId = null;
    this.localPlayerName = '';
  }

  // Player management
  public getLocalPlayerId(): string | null {
    return this.localPlayerId;
  }

  public getLocalPlayerName(): string {
    return this.localPlayerName;
  }

  // Game state management
  public getGameState(): IGameState | null {
    return {
      players: new Map(),
      projectiles: [],
      gameTime: Date.now(),
      tick: 0,
    };
  }

  public getCurrentGameState(): IGameState | null {
    return this.getGameState();
  }

  public getSessionId(): string | null {
    return this.currentSessionId;
  }

  // Game state synchronization
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public sendPlayerState(_state: IPlayerState): void {
    console.log('Sending player state');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public sendGameAction(_action: INetworkMessage): void {
    console.log('Sending game action');
  }

  // Event handlers
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onGameStateUpdate(_callback: (state: IGameState) => void): void {
    console.log('Registered game state update handler');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onPlayerJoined(_callback: (playerId: string, playerState: IPlayerState) => void): void {
    console.log('Registered player joined handler');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onPlayerLeft(_callback: (playerId: string) => void): void {
    console.log('Registered player left handler');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onGameAction(_callback: (message: INetworkMessage) => void): void {
    console.log('Registered game action handler');
  }

  // Message handling
  public sendMessage(type: string, data: Record<string, unknown>): void {
    console.log(`Sending message: ${type}`, data);
    // In a real implementation, this would send over WebSocket
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onMessage(type: string, _callback: (data: Record<string, unknown>) => void): void {
    console.log(`Registered message handler for: ${type}`);
    // In a real implementation, this would listen for WebSocket messages
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public offMessage(type: string, _callback: (data: Record<string, unknown>) => void): void {
    console.log(`Removed message handler for: ${type}`);
  }

  // Additional helper methods
  public getCurrentSessionId(): string | null {
    return this.currentSessionId;
  }

  public getConnectionStatus(): string {
    return this._isConnected ? 'Connected' : 'Disconnected';
  }
}
