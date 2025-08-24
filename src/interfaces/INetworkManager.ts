// src/interfaces/INetworkManager.ts
import { IPlayerState } from './IPlayer';

export interface INetworkMessage {
  type: string;
  data: Record<string, unknown>;
  timestamp: number;
}

export interface IGameState {
  players: Map<string, IPlayerState>;
  projectiles: Array<Record<string, unknown>>;
  gameTime: number;
  tick: number;
}

export interface INetworkManager {
  // Connection management
  connect(serverUrl: string): Promise<boolean>;
  disconnect(): void;
  isConnected(): boolean;

  // Session management
  createSession(sessionName: string, maxPlayers: number, playerName?: string): Promise<string>;
  joinSession(sessionId: string, playerName: string): Promise<boolean>;
  leaveSession(): void;

  // Player management
  getLocalPlayerId(): string | null;
  getLocalPlayerName(): string;

  // Game state synchronization
  sendPlayerState(state: IPlayerState): void;
  sendGameAction(action: INetworkMessage): void;

  // Event handlers
  onGameStateUpdate(callback: (state: IGameState) => void): void;
  onPlayerJoined(callback: (playerId: string, playerState: IPlayerState) => void): void;
  onPlayerLeft(callback: (playerId: string) => void): void;
  onGameAction(callback: (message: INetworkMessage) => void): void;

  // State queries
  getCurrentGameState(): IGameState | null;
  getSessionId(): string | null;

  // Realtime input (Colyseus)
  sendInput(input: {
    moveX: number;
    moveZ: number;
    lookYaw: number;
    lookPitch: number;
    fire: boolean;
    dt?: number;
  }): void;
  requestRespawn(): void;
}
