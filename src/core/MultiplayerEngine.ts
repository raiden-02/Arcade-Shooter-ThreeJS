import { Engine } from './Engine';
import { GameState } from './GameStateMachine';
import { NetworkManager } from './NetworkManager';
import {
  ConnectionState,
  PlayerState,
  RoomState,
  GameResults,
  WeaponFireData,
} from './NetworkTypes';

/**
 * Extended Engine for multiplayer functionality
 */
export class MultiplayerEngine extends Engine {
  private networkManager: NetworkManager;
  private isMultiplayer: boolean = false;
  private localPlayer: PlayerState | null = null;
  private remotePlayers: Map<string, PlayerState> = new Map();
  private currentRoom: RoomState | null = null;

  constructor(container?: HTMLElement, serverUrl?: string) {
    super(container);

    // Initialize network manager
    this.networkManager = new NetworkManager(serverUrl);
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
   * Get current room data
   */
  public getCurrentRoom(): RoomState | null {
    return this.currentRoom;
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
   * Cleanup network connections
   */
  public cleanup(): void {
    this.networkManager.disconnect();
  }
}
