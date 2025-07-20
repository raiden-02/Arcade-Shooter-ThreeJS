import { GameRoom, GamePlayer, GameMode, GameState, GAME_CONFIG } from '../types/GameTypes.js';
import { RoomState, PlayerState } from '../types/NetworkTypes.js';

export class RoomManager {
  private rooms = new Map<string, GameRoom>();
  private playerRoomMap = new Map<string, string>(); // playerId -> roomId

  constructor() {
    // Start cleanup interval for empty rooms
    setInterval(() => {
      this.cleanupEmptyRooms();
    }, GAME_CONFIG.ROOM_CLEANUP_INTERVAL);
  }

  /**
   * Create a new game room
   */
  createRoom(
    hostPlayerId: string,
    roomData: { name: string; maxPlayers: number; gameMode: string },
  ): GameRoom {
    const roomId = this.generateRoomId();
    const room: GameRoom = {
      id: roomId,
      name: roomData.name,
      maxPlayers: Math.min(roomData.maxPlayers, GAME_CONFIG.MAX_PLAYERS_PER_ROOM),
      currentPlayers: 0,
      gameMode: roomData.gameMode as GameMode,
      gameState: GameState.WAITING,
      players: new Map(),
      createdAt: Date.now(),
      hostId: hostPlayerId,
    };

    this.rooms.set(roomId, room);
    console.log(`Room created: ${roomId} by player ${hostPlayerId}`);
    return room;
  }

  /**
   * Join a player to a room
   */
  joinRoom(roomId: string, player: GamePlayer): boolean {
    const room = this.rooms.get(roomId);
    if (!room) {
      console.log(`Room not found: ${roomId}`);
      return false;
    }

    if (room.currentPlayers >= room.maxPlayers) {
      console.log(`Room full: ${roomId}`);
      return false;
    }

    if (room.gameState !== GameState.WAITING) {
      console.log(`Cannot join room ${roomId} - game in progress`);
      return false;
    }

    // Remove player from previous room if any
    this.leaveRoom(player.id);

    // Add player to room
    room.players.set(player.id, player);
    room.currentPlayers++;
    this.playerRoomMap.set(player.id, roomId);

    console.log(
      `Player ${player.id} joined room ${roomId} (${room.currentPlayers}/${room.maxPlayers})`,
    );
    return true;
  }

  /**
   * Remove a player from their current room
   */
  leaveRoom(playerId: string): void {
    const roomId = this.playerRoomMap.get(playerId);
    if (!roomId) return;

    const room = this.rooms.get(roomId);
    if (!room) return;

    room.players.delete(playerId);
    room.currentPlayers--;
    this.playerRoomMap.delete(playerId);

    console.log(
      `Player ${playerId} left room ${roomId} (${room.currentPlayers}/${room.maxPlayers})`,
    );

    // If room is empty, mark for cleanup
    if (room.currentPlayers === 0) {
      console.log(`Room ${roomId} is now empty`);
    }
    // If host left, assign new host
    else if (room.hostId === playerId) {
      const newHost = Array.from(room.players.keys())[0];
      room.hostId = newHost;
      console.log(`New host for room ${roomId}: ${newHost}`);
    }
  }

  /**
   * Get a room by ID
   */
  getRoom(roomId: string): GameRoom | undefined {
    return this.rooms.get(roomId);
  }

  /**
   * Get room ID for a player
   */
  getPlayerRoom(playerId: string): string | undefined {
    return this.playerRoomMap.get(playerId);
  }

  /**
   * Update player state in their room
   */
  updatePlayerInRoom(playerId: string, updates: Partial<GamePlayer>): void {
    const roomId = this.playerRoomMap.get(playerId);
    if (!roomId) return;

    const room = this.rooms.get(roomId);
    if (!room) return;

    const player = room.players.get(playerId);
    if (!player) return;

    // Update player data
    Object.assign(player, updates);
  }

  /**
   * Get all rooms for browser
   */
  getAllRooms(): RoomState[] {
    return Array.from(this.rooms.values()).map(room => this.roomToRoomState(room));
  }

  /**
   * Get all players in a room (except the requesting player)
   */
  getRoomPlayers(roomId: string, excludePlayerId?: string): PlayerState[] {
    const room = this.rooms.get(roomId);
    if (!room) return [];

    return Array.from(room.players.values())
      .filter(player => player.id !== excludePlayerId)
      .map(player => this.playerToPlayerState(player));
  }

  /**
   * Clean up empty rooms
   */
  private cleanupEmptyRooms(): void {
    const emptyRooms = Array.from(this.rooms.entries())
      .filter(([, room]) => room.currentPlayers === 0)
      .map(([roomId]) => roomId);

    emptyRooms.forEach(roomId => {
      this.rooms.delete(roomId);
      console.log(`Cleaned up empty room: ${roomId}`);
    });
  }

  /**
   * Generate unique room ID
   */
  private generateRoomId(): string {
    return `room_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Convert GameRoom to RoomState for client
   */
  private roomToRoomState(room: GameRoom): RoomState {
    return {
      id: room.id,
      name: room.name,
      players: Array.from(room.players.values()).map(player => this.playerToPlayerState(player)),
      maxPlayers: room.maxPlayers,
      gameMode: room.gameMode,
      isActive: room.gameState === GameState.ACTIVE,
      createdAt: room.createdAt,
    };
  }

  /**
   * Convert GamePlayer to PlayerState for client
   */
  private playerToPlayerState(player: GamePlayer): PlayerState {
    return {
      id: player.id,
      name: player.name,
      position: player.position,
      rotation: player.rotation,
      health: player.health,
      weapon: player.weapon,
      isAlive: player.isAlive,
    };
  }
}
