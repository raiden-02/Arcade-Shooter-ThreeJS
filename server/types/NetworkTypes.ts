// Network message types for client-server communication
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
  enemies?: EnemyState[]; // Add enemies to room state
  maxPlayers: number;
  gameMode: string;
  isActive: boolean;
  createdAt: number;
}

export interface EnemyState {
  id: string;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number; w: number };
  health: number;
  isDead: boolean;
  isAlive: boolean;
}

// Socket event types
export interface ServerToClientEvents {
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

  // Enemy events
  'enemy:spawned': (enemy: EnemyState) => void;
  'enemy:updated': (enemy: EnemyState) => void;
  'enemy:died': (enemyId: string) => void;
  'enemies:spawned': (enemies: EnemyState[]) => void;
  'enemies:sync': (enemies: EnemyState[]) => void;

  // Game events
  'game:start': () => void;
  'game:end': (results: GameResults) => void;
  'weapon:fire': (data: WeaponFireEvent) => void;

  // Error events
  error: (message: string) => void;
}

export interface ClientToServerEvents {
  // Connection events
  'player:join': (playerData: Partial<PlayerState>) => void;
  'player:update': (playerState: Partial<PlayerState>) => void;

  // Room events
  'room:create': (roomData: { name: string; maxPlayers: number; gameMode: string }) => void;
  'room:join': (roomId: string) => void;
  'room:leave': () => void;
  'room:list': () => void;

  // Enemy events (for host/server interaction)
  'enemy:damage': (data: { enemyId: string; damage: number; playerId: string }) => void;
  'enemy:kill': (data: { enemyId: string; playerId: string }) => void;
  'enemy:spawn': (data: { position?: { x: number; y: number; z: number } }) => void;
  'enemies:clear': () => void;

  // Game events
  'weapon:fire': (weaponData: {
    origin: { x: number; y: number; z: number };
    direction: { x: number; y: number; z: number };
    weaponType: string;
  }) => void;
}

export interface GameResults {
  winnerId?: string;
  winnerName?: string;
  scores: Array<{ playerId: string; playerName: string; kills: number; deaths: number }>;
  duration: number;
}

export interface WeaponFireEvent {
  playerId: string;
  origin: { x: number; y: number; z: number };
  direction: { x: number; y: number; z: number };
  weaponType: string;
  timestamp: number;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  playerId: string;
  roomId: string | null;
  playerState: PlayerState;
}
