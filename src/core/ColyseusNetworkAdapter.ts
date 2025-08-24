import { INetworkManager, IGameState, INetworkMessage } from '../interfaces/INetworkManager';
import { IPlayerState } from '../interfaces/IPlayer';

import { ColyseusNetworkManager } from './ColyseusNetworkManager';

/**
 * Thin adapter exposing ColyseusNetworkManager through the INetworkManager interface.
 * Implements only the subset of features required by the game application.
 */
export class ColyseusNetworkAdapter implements INetworkManager {
  private manager: ColyseusNetworkManager;
  private sessionId: string | null = null;

  constructor(serverUrl: string) {
    this.manager = new ColyseusNetworkManager(serverUrl);
  }

  async connect(serverUrl: string): Promise<boolean> {
    this.manager = new ColyseusNetworkManager(serverUrl);
    // Only establish client connection; actual room join will be done via create/joinSession
    return true;
  }

  disconnect(): void {
    this.manager.disconnect();
    this.sessionId = null;
  }

  isConnected(): boolean {
    return this.manager.isConnected();
  }

  async createSession(
    sessionName: string,
    maxPlayers: number,
    playerName?: string,
  ): Promise<string> {
    void maxPlayers;
    // Create a dedicated room and return its id; share this id to others to join
    const ok = await this.manager.createRoom(playerName, sessionName || 'arena');
    if (ok) {
      this.sessionId = this.manager.getRoomId();
    }
    return this.sessionId || '';
  }

  async joinSession(sessionId: string, playerName: string): Promise<boolean> {
    const ok = await this.manager.joinById(sessionId, playerName);
    if (ok) {
      this.sessionId = sessionId;
    }
    return ok;
  }

  leaveSession(): void {
    this.disconnect();
  }

  getLocalPlayerId(): string | null {
    return this.manager.getPlayerId();
  }

  getLocalPlayerName(): string {
    return this.manager.getPlayerName();
  }

  // --- Unused/placeholder implementations ---
  sendPlayerState(state: IPlayerState): void {
    void state;
  }
  sendGameAction(action: INetworkMessage): void {
    void action;
  }
  onGameStateUpdate(callback: (state: IGameState) => void): void {
    void callback;
  }
  onPlayerJoined(callback: (playerId: string, playerState: IPlayerState) => void): void {
    void callback;
  }
  onPlayerLeft(callback: (playerId: string) => void): void {
    void callback;
  }
  onGameAction(callback: (message: INetworkMessage) => void): void {
    void callback;
  }
  getCurrentGameState(): IGameState | null {
    return null;
  }
  getSessionId(): string | null {
    return this.sessionId;
  }
  // Expose underlying manager for state subscriptions (internal use)
  public getInternalManager(): ColyseusNetworkManager {
    return this.manager;
  }

  // Realtime input delegation
  sendInput(input: {
    moveX: number;
    moveZ: number;
    lookYaw: number;
    lookPitch: number;
    fire: boolean;
    dt?: number;
  }): void {
    this.manager.sendInput(input);
  }

  requestRespawn(): void {
    this.manager.requestRespawn();
  }
}
