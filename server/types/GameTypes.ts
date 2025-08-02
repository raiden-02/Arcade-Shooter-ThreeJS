// Game-related types and enums
export enum GameMode {
  DEATHMATCH = 'deathmatch',
  TEAM_DEATHMATCH = 'team_deathmatch',
  FREE_FOR_ALL = 'free_for_all',
}

export enum GameState {
  WAITING = 'waiting',
  STARTING = 'starting',
  ACTIVE = 'active',
  ENDING = 'ending',
  ENDED = 'ended',
}

export interface GameRoom {
  id: string;
  name: string;
  maxPlayers: number;
  currentPlayers: number;
  gameMode: GameMode;
  gameState: GameState;
  players: Map<string, GamePlayer>;
  enemies: Map<string, GameEnemy>;
  createdAt: number;
  hostId: string;
}

export interface GamePlayer {
  id: string;
  socketId: string;
  name: string;
  position: Vector3;
  rotation: Vector3;
  health: number;
  maxHealth: number;
  weapon: string;
  isAlive: boolean;
  kills: number;
  deaths: number;
  team?: 'red' | 'blue';
  joinedAt: number;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface WeaponFireData {
  playerId: string;
  weaponType: string;
  origin: Vector3;
  direction: Vector3;
  timestamp: number;
}

export interface GameEnemy {
  id: string;
  position: Vector3;
  rotation: { x: number; y: number; z: number; w: number };
  health: number;
  maxHealth: number;
  isDead: boolean;
  isAlive: boolean;
  createdAt: number;
  lastUpdated: number;
}

export interface EnemyState {
  id: string;
  position: Vector3;
  rotation: { x: number; y: number; z: number; w: number };
  health: number;
  isDead: boolean;
  isAlive: boolean;
}

export const GAME_CONFIG = {
  MAX_PLAYERS_PER_ROOM: 8,
  MIN_PLAYERS_TO_START: 2,
  ROOM_CLEANUP_INTERVAL: 60000, // 1 minute
  PLAYER_UPDATE_RATE: 60, // Updates per second
  DEFAULT_PLAYER_HEALTH: 100,
  DEFAULT_ENEMY_HEALTH: 100,
  MAX_ENEMIES_PER_ROOM: 10,
  ENEMY_UPDATE_RATE: 10, // Updates per second (lower than players for performance)
} as const;
