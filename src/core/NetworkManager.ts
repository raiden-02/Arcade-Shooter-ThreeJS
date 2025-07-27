import { io, Socket } from 'socket.io-client';

import {
  PlayerState,
  RoomState,
  EnemyState,
  ConnectionState,
  NetworkEvents,
  WeaponFireData,
  CreateRoomData,
  GameResults,
} from './NetworkTypes';

export class NetworkManager {
  private socket: Socket | null = null;
  private connectionState: ConnectionState = ConnectionState.DISCONNECTED;
  private eventListeners: Map<string, Array<(...args: any[]) => void>> = new Map(); // eslint-disable-line @typescript-eslint/no-explicit-any
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;

  // Player data
  private playerId: string | null = null;
  private currentRoom: string | null = null;
  private localPlayer: PlayerState | null = null;
  private remotePlayers: Map<string, PlayerState> = new Map();

  constructor(private serverUrl: string = 'http://localhost:3000') {
    console.log(`NetworkManager initialized with server: ${this.serverUrl}`);
  }

  /**
   * Connect to the server
   */
  public async connect(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.socket?.connected) {
        resolve(true);
        return;
      }

      this.setConnectionState(ConnectionState.CONNECTING);

      try {
        this.socket = io(this.serverUrl, {
          transports: ['websocket', 'polling'],
          timeout: 10000,
          forceNew: true,
        });

        this.setupSocketEvents();

        // Connection success
        this.socket.on('connect', () => {
          console.log('Connected to server:', this.socket?.id);
          this.setConnectionState(ConnectionState.CONNECTED);
          this.reconnectAttempts = 0;
          resolve(true);
        });

        // Connection error
        this.socket.on('connect_error', (error: Error) => {
          console.error('Connection error:', error.message);
          this.setConnectionState(ConnectionState.ERROR);
          reject(new Error(`Failed to connect: ${error.message}`));
        });

        // Disconnect handling
        this.socket.on('disconnect', (reason: string) => {
          console.log('Disconnected from server:', reason);
          this.setConnectionState(ConnectionState.DISCONNECTED);
          this.emit('connection:state', ConnectionState.DISCONNECTED);

          // Attempt reconnection for recoverable disconnects
          if (reason === 'io server disconnect') {
            // Server disconnected us, don't reconnect automatically
            this.emit('error', 'Disconnected by server');
          } else {
            // Network issues, attempt reconnection
            this.attemptReconnection();
          }
        });
      } catch (error) {
        console.error('Failed to create socket:', error);
        this.setConnectionState(ConnectionState.ERROR);
        reject(error);
      }
    });
  }

  /**
   * Disconnect from server
   */
  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    this.setConnectionState(ConnectionState.DISCONNECTED);
    this.playerId = null;
    this.currentRoom = null;
  }

  /**
   * Check if connected
   */
  public isConnected(): boolean {
    return this.socket?.connected === true;
  }

  /**
   * Get current connection state
   */
  public getConnectionState(): ConnectionState {
    return this.connectionState;
  }

  /**
   * Get player ID
   */
  public getPlayerId(): string | null {
    return this.playerId;
  }

  /**
   * Get current room ID
   */
  public getCurrentRoom(): string | null {
    return this.currentRoom;
  }

  /**
   * Join as a player
   */
  public joinAsPlayer(playerData: Partial<PlayerState>): void {
    if (!this.isConnected()) {
      console.warn('Not connected to server');
      return;
    }

    console.log('Joining as player:', playerData);
    this.socket!.emit('player:join', playerData);
  }

  /**
   * Update player state
   */
  public updatePlayerState(playerState: Partial<PlayerState>): void {
    if (!this.isConnected() || !this.playerId) return;

    this.socket!.emit('player:update', playerState);
  }

  /**
   * Create a new room
   */
  public createRoom(roomData: CreateRoomData): void {
    if (!this.isConnected()) {
      console.warn('Not connected to server');
      return;
    }

    console.log('Creating room:', roomData);
    this.socket!.emit('room:create', roomData);
  }

  /**
   * Join an existing room
   */
  public joinRoom(roomId: string): void {
    if (!this.isConnected()) {
      console.warn('Not connected to server');
      return;
    }

    console.log('Joining room:', roomId);
    this.socket!.emit('room:join', roomId);
  }

  /**
   * Leave current room
   */
  public leaveRoom(): void {
    if (!this.isConnected()) return;

    this.socket!.emit('room:leave');
    this.currentRoom = null;
  }

  /**
   * Request room list
   */
  public requestRoomList(): void {
    if (!this.isConnected()) return;

    this.socket!.emit('room:list');
  }

  /**
   * Fire weapon
   */
  public fireWeapon(weaponData: WeaponFireData): void {
    if (!this.isConnected() || !this.currentRoom) return;

    this.socket!.emit('weapon:fire', weaponData);
  }

  /**
   * Damage an enemy
   */
  public damageEnemy(enemyId: string, damage: number): void {
    if (!this.isConnected() || !this.currentRoom) return;

    this.socket!.emit('enemy:damage', { enemyId, damage });
  }

  /**
   * Kill an enemy
   */
  public killEnemy(enemyId: string): void {
    if (!this.isConnected() || !this.currentRoom) return;

    this.socket!.emit('enemy:kill', { enemyId });
  }

  /**
   * Spawn an enemy (host only)
   */
  public spawnEnemy(position?: { x: number; y: number; z: number }): void {
    if (!this.isConnected() || !this.currentRoom) return;

    this.socket!.emit('enemy:spawn', { position });
  }

  /**
   * Clear all enemies (host only)
   */
  public clearEnemies(): void {
    if (!this.isConnected() || !this.currentRoom) return;

    this.socket!.emit('enemies:clear');
  }

  /**
   * Get local player state
   */
  public getLocalPlayer(): PlayerState | null {
    return this.localPlayer;
  }

  /**
   * Set local player state
   */
  public setLocalPlayer(playerState: PlayerState): void {
    this.localPlayer = playerState;
  }

  /**
   * Get all remote players
   */
  public getRemotePlayers(): Map<string, PlayerState> {
    return new Map(this.remotePlayers);
  }

  /**
   * Add or update remote player
   */
  public updateRemotePlayer(playerState: PlayerState): void {
    this.remotePlayers.set(playerState.id, playerState);
    this.emit('player:updated', playerState);
  }

  /**
   * Remove remote player
   */
  public removeRemotePlayer(playerId: string): void {
    this.remotePlayers.delete(playerId);
    this.emit('player:left', playerId);
  }

  /**
   * Add event listener
   */
  public on<K extends keyof NetworkEvents>(event: K, callback: NetworkEvents[K]): void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event)!.push(callback);
  }

  /**
   * Remove event listener
   */
  public off<K extends keyof NetworkEvents>(event: K, callback: NetworkEvents[K]): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  /**
   * Emit event to listeners
   */
  private emit<K extends keyof NetworkEvents>(
    event: K,
    ...args: Parameters<NetworkEvents[K]>
  ): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.forEach(callback => {
        try {
          callback(...args);
        } catch (error) {
          console.error(`Error in network event listener for ${event}:`, error);
        }
      });
    }
  }

  /**
   * Setup socket event handlers
   */
  private setupSocketEvents(): void {
    if (!this.socket) return;

    // Player events
    this.socket.on('player:joined', (player: PlayerState) => {
      console.log('Player joined:', player.name);
      if (!this.playerId) {
        this.playerId = player.id;
        this.localPlayer = player; // Set as local player if it's us
      } else if (player.id !== this.playerId) {
        // It's a remote player
        this.remotePlayers.set(player.id, player);
      }
      this.emit('player:joined', player);
    });

    this.socket.on('player:left', (playerId: string) => {
      console.log('Player left:', playerId);
      this.remotePlayers.delete(playerId);
      this.emit('player:left', playerId);
    });

    this.socket.on('player:updated', (player: PlayerState) => {
      if (player.id === this.playerId) {
        // Update local player state
        this.localPlayer = player;
      } else {
        // Update remote player
        this.remotePlayers.set(player.id, player);
      }
      this.emit('player:updated', player);
    });

    // Room events
    this.socket.on('room:created', (room: RoomState) => {
      console.log('Room created:', room.name);
      this.currentRoom = room.id;
      this.emit('room:created', room);
    });

    this.socket.on('room:joined', (room: RoomState) => {
      console.log('Joined room:', room.name);
      this.currentRoom = room.id;
      this.emit('room:joined', room);
    });

    this.socket.on('room:left', () => {
      console.log('Left room');
      this.currentRoom = null;
      this.emit('room:left');
    });

    this.socket.on('room:updated', (room: RoomState) => {
      this.emit('room:updated', room);
    });

    this.socket.on('room:list', (rooms: RoomState[]) => {
      this.emit('room:list', rooms);
    });

    // Game events
    this.socket.on('game:start', () => {
      console.log('Game started');
      this.emit('game:start');
    });

    this.socket.on('game:end', (results: GameResults) => {
      console.log('Game ended:', results);
      this.emit('game:end', results);
    });

    this.socket.on('weapon:fire', (data: WeaponFireData) => {
      this.emit('weapon:fire', data);
    });

    // Enemy events
    this.socket.on('enemies:spawned', (enemies: EnemyState[]) => {
      this.emit('enemies:spawned', enemies);
    });

    this.socket.on('enemy:updated', (enemy: EnemyState) => {
      this.emit('enemy:updated', enemy);
    });

    this.socket.on('enemy:died', (enemyId: string) => {
      this.emit('enemy:died', enemyId);
    });

    // Error handling
    this.socket.on('error', (message: string) => {
      console.error('Server error:', message);
      this.emit('error', message);
    });
  }

  /**
   * Set connection state and emit event
   */
  private setConnectionState(state: ConnectionState): void {
    if (this.connectionState !== state) {
      console.log(`Connection state changed: ${this.connectionState} -> ${state}`);
      this.connectionState = state;
      this.emit('connection:state', state);
    }
  }

  /**
   * Attempt to reconnect to server
   */
  private attemptReconnection(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      this.emit('error', 'Connection lost - unable to reconnect');
      return;
    }

    this.reconnectAttempts++;
    this.setConnectionState(ConnectionState.RECONNECTING);

    console.log(
      `Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`,
    );

    setTimeout(() => {
      this.connect().catch(error => {
        console.error('Reconnection failed:', error);
        this.attemptReconnection();
      });
    }, this.reconnectDelay * this.reconnectAttempts);
  }
}
