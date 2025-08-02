// src/core/NetworkTypes.ts
export interface RoomState {
  id: string;
  name: string;
  maxPlayers: number;
  currentPlayers: number;
  gameMode: string;
}

export interface NetworkMessage {
  type: string;
  data: Record<string, unknown>;
}

export interface PlayerNetworkState {
  id: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
  hp: number;
  alive: boolean;
}
