// Colyseus client integration (section 3.4 of architecture)
import { Client, Room } from 'colyseus.js';

// Client-side state interfaces matching server schema
export interface ColyseusPlayerState {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  hp: number;
  maxHp: number;
  alive: boolean;
  weapon: string;
  kills: number;
  deaths: number;
}

export interface ColyseusProjectileState {
  id: string;
  x: number;
  y: number;
  z: number;
  dirX: number;
  dirY: number;
  dirZ: number;
  ownerId: string;
  weaponType: string;
  damage: number;
  speed: number;
}

export interface ColyseusEnemyState {
  id: string;
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  rotW: number;
  hp: number;
  maxHp: number;
  alive: boolean;
}

export interface ColyseusHitEvent {
  type: string;
  victimId: string;
  attackerId: string;
  damage: number;
  weaponType: string;
  timestamp: number;
}

export interface ColyseusRoomState {
  players: Map<string, ColyseusPlayerState>;
  projectiles: ColyseusProjectileState[];
  enemies: Map<string, ColyseusEnemyState>;
  events: ColyseusHitEvent[];
  tick: number;
  gameMode: string;
  gameActive: boolean;
}

// Schema types matching server-side definitions
interface SchemaPlayerState {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  hp: number;
  maxHp: number;
  alive: boolean;
  weapon: string;
  kills: number;
  deaths: number;
}

interface SchemaProjectileState {
  id: string;
  x: number;
  y: number;
  z: number;
  dirX: number;
  dirY: number;
  dirZ: number;
  speed: number;
  damage: number;
  ownerId: string;
  weaponType: string;
  timestamp: number;
}

interface SchemaEnemyState {
  id: string;
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  rotW: number;
  hp: number;
  maxHp: number;
  alive: boolean;
  enemyType: string;
}

interface SchemaHitEvent {
  type: string;
  victimId: string;
  attackerId: string;
  damage: number;
  weaponType: string;
  timestamp: number;
}

interface SchemaGameState {
  players: Map<string, SchemaPlayerState>;
  projectiles: SchemaProjectileState[];
  enemies: Map<string, SchemaEnemyState>;
  events: SchemaHitEvent[];
  tick: number;
  gameMode: string;
  gameActive: boolean;
}

// Input message structure (matches server)
interface InputMessage {
  seq: number;
  dt: number;
  moveX: number;
  moveZ: number;
  lookYaw: number;
  lookPitch: number;
  buttons: number; // Bitfield: 1 = fire, 2 = reload, etc.
  timestamp: number;
}

export enum ConnectionState {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error',
}

export class ColyseusNetworkManager {
  private client: Client;
  private room: Room | null = null;
  private connectionState: ConnectionState = ConnectionState.DISCONNECTED;

  // Player ID cached after join
  private playerId: string | null = null;
  private playerName: string = '';

  // Input tracking
  private inputSequence: number = 0;
  private lastInputTime: number = 0;

  // State change callbacks
  private onStateChangeCallback: ((state: ColyseusRoomState) => void) | null = null;
  private onPlayerJoinCallback: ((player: ColyseusPlayerState) => void) | null = null;
  private onPlayerLeaveCallback: ((playerId: string) => void) | null = null;

  constructor(private serverUrl: string = 'ws://localhost:3000') {
    this.client = new Client(this.serverUrl);
  }

  public async connectAndJoin(playerName?: string): Promise<boolean> {
    try {
      this.connectionState = ConnectionState.CONNECTING;
      this.playerName = playerName || `Player_${Date.now().toString().slice(-6)}`;

      this.room = await this.client.joinOrCreate('arena', {
        name: this.playerName,
        gameMode: 'deathmatch',
      });

      this.connectionState = ConnectionState.CONNECTED;
      this.playerId = this.room.sessionId;

      console.log(`🎮 Connected to game room: ${this.room.roomId}, sessionId: ${this.playerId}`);

      this.setupRoomEventHandlers();
      return true;
    } catch (err) {
      console.error('❌ Failed to connect to game server:', err);
      this.connectionState = ConnectionState.ERROR;
      return false;
    }
  }

  private setupRoomEventHandlers(): void {
    if (!this.room) return;

    // Handle room state changes (section 3.5 - listen to room.state.onChange)
    this.room.onStateChange((state: SchemaGameState) => {
      if (this.onStateChangeCallback) {
        const roomState: ColyseusRoomState = {
          players: new Map(),
          projectiles: [],
          enemies: new Map(),
          events: [],
          tick: state.tick || 0,
          gameMode: state.gameMode || 'deathmatch',
          gameActive: state.gameActive || true,
        };

        // Convert players
        if (state.players) {
          state.players.forEach((player: SchemaPlayerState, key: string) => {
            roomState.players.set(key, {
              id: player.id || key,
              name: player.name || `Player_${key.slice(-6)}`,
              x: player.x || 0,
              y: player.y || 2,
              z: player.z || 0,
              yaw: player.yaw || 0,
              pitch: player.pitch || 0,
              hp: player.hp || 100,
              maxHp: player.maxHp || 100,
              alive: player.alive !== false,
              weapon: player.weapon || 'pistol',
              kills: player.kills || 0,
              deaths: player.deaths || 0,
            });
          });
        }

        // Convert projectiles (section 2.4.4 - clients render snapshot projectiles)
        if (state.projectiles) {
          state.projectiles.forEach((proj: SchemaProjectileState) => {
            roomState.projectiles.push({
              id: proj.id,
              x: proj.x,
              y: proj.y,
              z: proj.z,
              dirX: proj.dirX,
              dirY: proj.dirY,
              dirZ: proj.dirZ,
              ownerId: proj.ownerId,
              weaponType: proj.weaponType || 'pistol',
              damage: proj.damage || 20,
              speed: proj.speed || 30,
            });
          });
        }

        // Convert enemies
        if (state.enemies) {
          state.enemies.forEach((enemy: SchemaEnemyState, key: string) => {
            roomState.enemies.set(key, {
              id: enemy.id || key,
              x: enemy.x || 0,
              y: enemy.y || 2,
              z: enemy.z || 0,
              rotX: enemy.rotX || 0,
              rotY: enemy.rotY || 0,
              rotZ: enemy.rotZ || 0,
              rotW: enemy.rotW || 1,
              hp: enemy.hp || 100,
              maxHp: enemy.maxHp || 100,
              alive: enemy.alive !== false,
            });
          });
        }

        // Convert events (section 2.4.3 - listen to HitEvent)
        if (state.events) {
          state.events.forEach((event: SchemaHitEvent) => {
            roomState.events.push({
              type: event.type,
              victimId: event.victimId,
              attackerId: event.attackerId,
              damage: event.damage,
              weaponType: event.weaponType,
              timestamp: event.timestamp,
            });
          });
        }

        this.onStateChangeCallback(roomState);
      }
    });

    // Handle player additions
    if (this.room.state.players) {
      this.room.state.players.onAdd = (player: SchemaPlayerState, key: string) => {
        if (this.onPlayerJoinCallback) {
          this.onPlayerJoinCallback({
            id: player.id || key,
            name: player.name || `Player_${key.slice(-6)}`,
            x: player.x || 0,
            y: player.y || 2,
            z: player.z || 0,
            yaw: player.yaw || 0,
            pitch: player.pitch || 0,
            hp: player.hp || 100,
            maxHp: player.maxHp || 100,
            alive: player.alive !== false,
            weapon: player.weapon || 'pistol',
            kills: player.kills || 0,
            deaths: player.deaths || 0,
          });
        }
      };

      // Handle player removals
      this.room.state.players.onRemove = (_: SchemaPlayerState, key: string) => {
        if (this.onPlayerLeaveCallback) {
          this.onPlayerLeaveCallback(key);
        }
      };
    }

    // Handle room errors
    this.room.onError((code: number, message?: string) => {
      console.error(`❌ Room error ${code}: ${message}`);
      this.connectionState = ConnectionState.ERROR;
    });

    // Handle room leave
    this.room.onLeave((code: number) => {
      console.log(`👋 Left room with code: ${code}`);
      this.connectionState = ConnectionState.DISCONNECTED;
    });
  }

  public disconnect(): void {
    if (this.room) {
      this.room.leave();
      this.room = null;
    }
    this.connectionState = ConnectionState.DISCONNECTED;
    this.playerId = null;
  }

  // Send input to server (section 2.3 - input messages)
  public sendInput(input: {
    moveX: number;
    moveZ: number;
    lookYaw: number;
    lookPitch: number;
    fire: boolean;
    dt?: number;
  }): void {
    if (!this.room) return;

    const now = Date.now();
    const dt = input.dt || (now - this.lastInputTime) / 1000;
    this.lastInputTime = now;

    const inputMessage: InputMessage = {
      seq: ++this.inputSequence,
      dt: Math.min(dt, 1 / 20), // Cap dt to prevent cheating
      moveX: Math.max(-1, Math.min(1, input.moveX)),
      moveZ: Math.max(-1, Math.min(1, input.moveZ)),
      lookYaw: input.lookYaw,
      lookPitch: Math.max(-Math.PI / 2, Math.min(Math.PI / 2, input.lookPitch)),
      buttons: input.fire ? 1 : 0,
      timestamp: now,
    };

    this.room.send('input', inputMessage);
  }

  public requestRespawn(): void {
    if (!this.room) return;
    this.room.send('respawn');
  }

  // Event handlers
  public onStateChange(callback: (state: ColyseusRoomState) => void): void {
    this.onStateChangeCallback = callback;
  }

  public onPlayerJoin(callback: (player: ColyseusPlayerState) => void): void {
    this.onPlayerJoinCallback = callback;
  }

  public onPlayerLeave(callback: (playerId: string) => void): void {
    this.onPlayerLeaveCallback = callback;
  }

  // Getters
  public getConnectionState(): ConnectionState {
    return this.connectionState;
  }

  public getPlayerId(): string | null {
    return this.playerId;
  }

  public getPlayerName(): string {
    return this.playerName;
  }

  public isConnected(): boolean {
    return this.connectionState === ConnectionState.CONNECTED && this.room !== null;
  }
}
