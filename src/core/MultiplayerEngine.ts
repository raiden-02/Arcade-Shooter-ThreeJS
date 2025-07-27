import { Player } from '../player/Player';

import { Engine } from './Engine';
import { GameState } from './GameStateMachine';
import { NetworkManager } from './NetworkManager';
import { NetworkPlayer } from './NetworkPlayer';
import {
  ConnectionState,
  PlayerState,
  RoomState,
  EnemyState,
  GameResults,
  WeaponFireData,
} from './NetworkTypes';
import { PlayerSync } from './PlayerSync';

/**
 * Extended Engine for multiplayer functionality
 */
export class MultiplayerEngine extends Engine {
  private networkManager: NetworkManager;
  private playerSync: PlayerSync;
  private isMultiplayer: boolean = false;
  private localPlayer: PlayerState | null = null;
  private remotePlayers: Map<string, PlayerState> = new Map();
  private networkPlayers: Map<string, NetworkPlayer> = new Map(); // Visual representations
  private player: Player | null = null;
  private currentRoom: RoomState | null = null;
  private availableRooms: RoomState[] = []; // List of available rooms
  private updateTimer: number = 0; // For controlling network update frequency

  constructor(container?: HTMLElement, serverUrl?: string) {
    super(container);

    // Initialize networking components
    this.networkManager = new NetworkManager(serverUrl);
    this.playerSync = new PlayerSync(20); // 20Hz update rate
    this.setupNetworkEvents();

    console.log('MultiplayerEngine initialized');
  }

  /**
   * Get the network manager instance
   */
  public getNetworkManager(): NetworkManager {
    return this.networkManager;
  }

  /**
   * Check if currently in multiplayer mode
   */
  public isInMultiplayerMode(): boolean {
    return this.isMultiplayer;
  }

  /**
   * Get local player data
   */
  public getLocalPlayer(): PlayerState | null {
    return this.localPlayer;
  }

  /**
   * Get remote players
   */
  public getRemotePlayers(): Map<string, PlayerState> {
    return this.remotePlayers;
  }

  /**
   * Get network players (for projectile collision detection)
   */
  public getNetworkPlayers(): Map<string, NetworkPlayer> {
    return this.networkPlayers;
  }

  /**
   * Get current room data
   */
  public getCurrentRoom(): RoomState | null {
    return this.currentRoom;
  }

  /**
   * Get available rooms list
   */
  public getAvailableRooms(): RoomState[] {
    return this.availableRooms;
  }

  /**
   * Provide reference to the local Player instance for state sync
   */
  public attachPlayer(player: Player): void {
    this.player = player;
  }

  /**
   * Connect to multiplayer server
   */
  public async connectToServer(): Promise<boolean> {
    try {
      this.stateMachine.transition(GameState.Connecting);
      const connected = await this.networkManager.connect();

      if (connected) {
        this.isMultiplayer = true;
        // Transition back to MainMenu so we can then transition to Playing
        this.stateMachine.transition(GameState.MainMenu);
        console.log('Successfully connected to multiplayer server');
        return true;
      } else {
        this.stateMachine.transition(GameState.MainMenu);
        return false;
      }
    } catch (error) {
      console.error('Failed to connect to server:', error);
      this.stateMachine.transition(GameState.MainMenu);
      // TODO: Show error in UI when error display method is available
      return false;
    }
  }

  /**
   * Disconnect from multiplayer server
   */
  public disconnectFromServer(): void {
    this.networkManager.disconnect();
    this.isMultiplayer = false;
    this.localPlayer = null;
    this.remotePlayers.clear();
    this.currentRoom = null;
    this.player = null;

    // Return to main menu
    this.stateMachine.transition(GameState.MainMenu);
    console.log('Disconnected from multiplayer server');
  }

  /**
   * Join as a player
   */
  public joinAsPlayer(playerName: string = 'Player'): void {
    if (!this.networkManager.isConnected()) {
      console.warn('Not connected to server');
      return;
    }

    const playerData = {
      name: playerName,
      position: { x: 0, y: 2, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      weapon: 'pistol',
    };

    this.networkManager.joinAsPlayer(playerData);
  }

  /**
   * Create a multiplayer room
   */
  public createRoom(
    roomName: string,
    maxPlayers: number = 4,
    gameMode: string = 'deathmatch',
  ): void {
    if (!this.networkManager.isConnected()) {
      console.warn('Not connected to server');
      return;
    }

    this.networkManager.createRoom({
      name: roomName,
      maxPlayers,
      gameMode,
    });
  }

  /**
   * Join an existing room
   */
  public joinRoom(roomId: string): void {
    if (!this.networkManager.isConnected()) {
      console.warn('Not connected to server');
      return;
    }

    this.networkManager.joinRoom(roomId);
  }

  /**
   * Leave current room
   */
  public leaveRoom(): void {
    this.networkManager.leaveRoom();
    this.currentRoom = null;
    this.remotePlayers.clear();
  }

  /**
   * Request list of available rooms
   */
  public requestRoomList(): void {
    this.networkManager.requestRoomList();
  }

  /**
   * Update local player state to server
   */
  public updatePlayerState(
    position: { x: number; y: number; z: number },
    rotation: { x: number; y: number; z: number },
    weapon?: string,
  ): void {
    if (!this.localPlayer || !this.networkManager.isConnected()) return;

    const updateData: Partial<PlayerState> = {
      position,
      rotation,
    };

    if (weapon) {
      updateData.weapon = weapon;
    }

    // Update local copy
    Object.assign(this.localPlayer, updateData);

    // Send to server
    this.networkManager.updatePlayerState(updateData);
  }

  /**
   * Fire weapon (multiplayer)
   */
  public fireWeapon(
    origin: { x: number; y: number; z: number },
    direction: { x: number; y: number; z: number },
    weaponType: string,
  ): void {
    this.networkManager.fireWeapon({
      origin,
      direction,
      weaponType,
    });
  }

  /**
   * Setup network event handlers
   */
  private setupNetworkEvents(): void {
    // Connection state changes
    this.networkManager.on('connection:state', (state: ConnectionState) => {
      console.log('Connection state changed:', state);

      switch (state) {
        case ConnectionState.CONNECTED:
          // Connection successful, wait for further instructions
          break;

        case ConnectionState.DISCONNECTED:
        case ConnectionState.ERROR:
          this.disconnectFromServer();
          break;

        case ConnectionState.RECONNECTING:
          // TODO: Show reconnecting message in UI
          console.log('Reconnecting to server...');
          break;
      }
    });

    // Player events
    this.networkManager.on('player:joined', (player: PlayerState) => {
      if (player.id === this.networkManager.getPlayerId()) {
        // This is our local player
        this.localPlayer = player;
        console.log('Local player joined:', player.name);
      } else {
        // Remote player
        this.remotePlayers.set(player.id, player);
        console.log('Remote player joined:', player.name);
      }
    });

    this.networkManager.on('player:left', (playerId: string) => {
      this.remotePlayers.delete(playerId);
      console.log('Player left:', playerId);
    });

    this.networkManager.on('player:updated', (player: PlayerState) => {
      if (player.id !== this.networkManager.getPlayerId()) {
        this.remotePlayers.set(player.id, player);
      }
    });

    // Room events
    this.networkManager.on('room:created', (room: RoomState) => {
      this.currentRoom = room;
      this.stateMachine.transition(GameState.Lobby);
      console.log('Room created successfully:', room.name);
    });

    this.networkManager.on('room:joined', (room: RoomState) => {
      this.currentRoom = room;

      // Add existing players to remote players list
      room.players.forEach(player => {
        if (player.id !== this.networkManager.getPlayerId()) {
          this.remotePlayers.set(player.id, player);
        }
      });

      this.stateMachine.transition(GameState.Lobby);
      console.log('Joined room successfully:', room.name);
    });

    this.networkManager.on('room:left', () => {
      this.currentRoom = null;
      this.remotePlayers.clear();
      console.log('Left room');
    });

    this.networkManager.on('room:list', (rooms: RoomState[]) => {
      // Update available rooms list
      this.availableRooms = rooms;
      console.log(`Received room list: ${rooms.length} rooms available`);
      // Emit custom event for UI to handle
      this.emitCustomEvent('rooms:updated', rooms);
    });

    // Game events
    this.networkManager.on('game:start', () => {
      this.stateMachine.transition(GameState.Playing);
      console.log('Game started!');
    });

    this.networkManager.on('game:end', (results: GameResults) => {
      this.stateMachine.transition(GameState.GameOver);
      console.log('Game ended:', results);
    });

    this.networkManager.on('weapon:fire', (data: WeaponFireData) => {
      // Handle remote weapon firing
      console.log('Remote weapon fire:', data);
      this.emitCustomEvent('weapon:fire:remote', data);
    });

    // Enemy events
    this.networkManager.on('enemies:spawned', (enemies: EnemyState[]) => {
      console.log('Enemies spawned:', enemies.length);
      this.emitCustomEvent('enemies:spawned', enemies);
    });

    this.networkManager.on('enemy:updated', (enemy: EnemyState) => {
      console.log('Enemy updated:', enemy.id);
      this.emitCustomEvent('enemy:updated', enemy);
    });

    this.networkManager.on('enemy:died', (enemyId: string) => {
      console.log('Enemy died:', enemyId);
      this.emitCustomEvent('enemy:died', enemyId);
    });

    // Error handling
    this.networkManager.on('error', (message: string) => {
      console.error('Network error:', message);
      // TODO: Show error in UI when error display method is available
    });
  }

  /**
   * Emit custom event (for UI and game systems to listen to)
   */
  private emitCustomEvent(eventName: string, data?: unknown): void {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
  }

  /**
   * Update networking functionality (called from main update loop)
   */
  public updateNetworking(deltaTime: number): void {
    // Update network timer
    this.updateTimer += deltaTime;

    // Handle network updates if we're in multiplayer mode
    if (this.isMultiplayer && this.networkManager.isConnected()) {
      this.handleNetworkUpdates();
    }
  }

  /**
   * Handle network updates for player synchronization
   */
  private handleNetworkUpdates(): void {
    // Clean up old snapshots
    this.playerSync.cleanup();

    // Send player updates if needed
    if (this.playerSync.shouldSendUpdate()) {
      this.sendPlayerUpdateIfPossible();
    }

    // Update remote player visualizations
    this.updateRemotePlayerVisuals();
  }

  /**
   * Send local player update to server if possible
   */
  private sendPlayerUpdateIfPossible(): void {
    const playerId = this.networkManager.getPlayerId();
    if (!playerId || !this.player) return;

    const update: Partial<PlayerState> = {
      position: this.player.getPosition(),
      rotation: this.player.getRotation(),
      health: this.player.getHealth(),
      weapon: this.player.getCurrentWeapon(),
      isAlive: !this.player.isPlayerDead(),
    };

    this.networkManager.updatePlayerState(update);
  }

  /**
   * Update visual representations of remote players
   */
  private updateRemotePlayerVisuals(): void {
    const remotePlayers = this.networkManager.getRemotePlayers();

    // Update existing remote players
    for (const [playerId, playerState] of remotePlayers) {
      let networkPlayer = this.networkPlayers.get(playerId);

      if (!networkPlayer) {
        // Create new network player using the public scene and physics world
        networkPlayer = new NetworkPlayer(
          playerId,
          playerState.name,
          this.scene,
          this.physics.world,
        );
        this.networkPlayers.set(playerId, networkPlayer);
        console.log(`Created visual representation for remote player: ${playerState.name}`);
      }

      if (networkPlayer) {
        // Add state to sync for interpolation
        this.playerSync.addRemotePlayerSnapshot(playerId, playerState);

        // Get interpolated state
        const interpolatedState = this.playerSync.getInterpolatedState(playerId);
        if (interpolatedState) {
          networkPlayer.updateState(interpolatedState);
        }

        // Update name tag to face camera
        networkPlayer.updateNameTag(this.camera);
      }
    }

    // Clean up disconnected players
    for (const [playerId, networkPlayer] of this.networkPlayers) {
      if (!remotePlayers.has(playerId)) {
        networkPlayer.dispose();
        this.networkPlayers.delete(playerId);
        this.playerSync.removePlayer(playerId);
        console.log(`Removed visual representation for disconnected player: ${playerId}`);
      }
    }
  }

  /**
   * Cleanup network connections and visual players
   */
  public cleanup(): void {
    // Clean up all network player visuals
    for (const [, networkPlayer] of this.networkPlayers) {
      networkPlayer.dispose();
    }
    this.networkPlayers.clear();
    this.player = null;

    // Disconnect from server
    this.networkManager.disconnect();
  }

  /**
   * Damage an enemy (send to server for processing)
   */
  public damageEnemy(enemyId: string, damage: number): void {
    if (this.isMultiplayer && this.networkManager.isConnected()) {
      this.networkManager.damageEnemy(enemyId, damage);
      console.log(`Sent enemy damage: ${enemyId} -= ${damage}`);
    }
  }

  /**
   * Kill an enemy directly (send to server for processing)
   */
  public killEnemy(enemyId: string): void {
    if (this.isMultiplayer && this.networkManager.isConnected()) {
      this.networkManager.killEnemy(enemyId);
      console.log(`Sent enemy kill: ${enemyId}`);
    }
  }

  /**
   * Spawn an enemy manually (host only)
   */
  public spawnEnemy(position?: { x: number; y: number; z: number }): void {
    if (this.isMultiplayer && this.networkManager.isConnected()) {
      this.networkManager.spawnEnemy(position);
      console.log(`Sent enemy spawn request at position:`, position);
    }
  }

  /**
   * Clear all enemies (host only)
   */
  public clearEnemies(): void {
    if (this.isMultiplayer && this.networkManager.isConnected()) {
      this.networkManager.clearEnemies();
      console.log(`Sent clear enemies request`);
    }
  }
}
