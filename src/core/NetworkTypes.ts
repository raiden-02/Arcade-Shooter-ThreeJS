// Client-side network types (mirrors server types)
export interface PlayerState {
  id: string;
  name: string;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  health: number;
  weapon: string;
  isAlive: boolean;
}

export interface RoomState {
  id: string;
  name: string;
  players: PlayerState[];
  maxPlayers: number;
  gameMode: string;
  isActive: boolean;
  createdAt: number;
}

// Connection states
export enum ConnectionState {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  RECONNECTING = 'reconnecting',
  ERROR = 'error',
}

// Network event types for client
export interface NetworkEvents {
  // Connection events
  'player:joined': (player: PlayerState) => void;
  'player:left': (playerId: string) => void;
  'player:updated': (player: PlayerState) => void;

  // Room events
  'room:created': (room: RoomState) => void;
  'room:joined': (room: RoomState) => void;
  'room:left': () => void;
  'room:updated': (room: RoomState) => void;
  'room:list': (rooms: RoomState[]) => void;

  // Game events
  'game:start': () => void;
  'game:end': (results: GameResults) => void;
  'weapon:fire': (data: WeaponFireData) => void;

  // System events
  'connection:state': (state: ConnectionState) => void;
  error: (message: string) => void;
}

export interface GameResults {
  winnerId?: string;
  winnerName?: string;
  scores: Array<{ playerId: string; playerName: string; kills: number; deaths: number }>;
  duration: number;
}

export interface WeaponFireData {
  origin: { x: number; y: number; z: number };
  direction: { x: number; y: number; z: number };
  weaponType: string;
}

export interface CreateRoomData {
  name: string;
  maxPlayers: number;
  gameMode: string;
}
