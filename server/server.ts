import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

import cors from 'cors';
import express from 'express';
import { Server } from 'socket.io';

import { RoomManager } from './services/RoomManager.js';
import { GamePlayer, GameEnemy, GAME_CONFIG } from './types/GameTypes.js';
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData,
} from './types/NetworkTypes.js';

// ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app and HTTP server
const app = express();
const server = createServer(app);

// Configure Socket.io with CORS
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(
  server,
  {
    cors: {
      origin: ['http://localhost:5173', 'http://localhost:4173'], // Vite dev and preview ports
      methods: ['GET', 'POST'],
      credentials: true,
    },
  },
);

// Initialize room manager
const roomManager = new RoomManager();

// Enemy spawning utility
function spawnEnemiesForRoom(roomId: string, count: number = 3): GameEnemy[] {
  const enemies: GameEnemy[] = [];
  const spawnPositions = [
    { x: 10, y: 0, z: 10 },
    { x: -10, y: 0, z: 10 },
    { x: 0, y: 0, z: -10 },
    { x: 15, y: 0, z: -5 },
    { x: -15, y: 0, z: -5 },
  ];

  for (let i = 0; i < Math.min(count, spawnPositions.length); i++) {
    const enemyId = `enemy_${roomId}_${Date.now()}_${i}`;
    const position = spawnPositions[i];

    const enemy: GameEnemy = {
      id: enemyId,
      position,
      rotation: { x: 0, y: 0, z: 0, w: 1 },
      health: GAME_CONFIG.DEFAULT_ENEMY_HEALTH,
      maxHealth: GAME_CONFIG.DEFAULT_ENEMY_HEALTH,
      isDead: false,
      isAlive: true,
      createdAt: Date.now(),
      lastUpdated: Date.now(),
    };

    // Add enemy to room
    if (roomManager.addEnemyToRoom(roomId, enemy)) {
      enemies.push(enemy);
      console.log(`Spawned enemy ${enemyId} at position`, position);
    }
  }

  return enemies;
}

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (for production)
app.use(express.static(path.join(__dirname, '../dist')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    rooms: roomManager.getAllRooms().length,
  });
});

// Socket.io connection handling
io.on('connection', socket => {
  console.log(`Player connected: ${socket.id}`);

  // Helper function to generate player ID
  const generatePlayerId = () => `player_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Initialize socket data
  socket.data.playerId = generatePlayerId();
  socket.data.roomId = null;

  // Handle player join
  socket.on('player:join', playerData => {
    const player: GamePlayer = {
      id: socket.data.playerId,
      socketId: socket.id,
      name: playerData.name || `Player_${socket.data.playerId.substr(-6)}`,
      position: playerData.position || { x: 0, y: 2, z: 0 },
      rotation: playerData.rotation || { x: 0, y: 0, z: 0 },
      health: GAME_CONFIG.DEFAULT_PLAYER_HEALTH,
      maxHealth: GAME_CONFIG.DEFAULT_PLAYER_HEALTH,
      weapon: playerData.weapon || 'pistol',
      isAlive: true,
      kills: 0,
      deaths: 0,
      joinedAt: Date.now(),
    };

    socket.data.playerState = player;
    console.log(`Player ${player.name} (${player.id}) joined`);

    // Send confirmation to client
    socket.emit('player:joined', {
      id: player.id,
      name: player.name,
      position: player.position,
      rotation: player.rotation,
      health: player.health,
      weapon: player.weapon,
      isAlive: player.isAlive,
    });
  });

  // Handle player state updates
  socket.on('player:update', playerState => {
    if (!socket.data.playerState) return;

    // Update local player state
    if (playerState.position) socket.data.playerState.position = playerState.position;
    if (playerState.rotation) socket.data.playerState.rotation = playerState.rotation;
    if (playerState.weapon) socket.data.playerState.weapon = playerState.weapon;

    // Update in room if player is in one
    if (socket.data.roomId) {
      roomManager.updatePlayerInRoom(socket.data.playerId, playerState);

      // Broadcast update to other players in the room
      socket.to(socket.data.roomId).emit('player:updated', {
        id: socket.data.playerId,
        name: socket.data.playerState.name,
        position: socket.data.playerState.position,
        rotation: socket.data.playerState.rotation,
        health: socket.data.playerState.health,
        weapon: socket.data.playerState.weapon,
        isAlive: socket.data.playerState.isAlive,
      });
    }
  });

  // Handle room creation
  socket.on('room:create', roomData => {
    if (!socket.data.playerState) {
      socket.emit('error', 'Must join as player first');
      return;
    }

    try {
      const room = roomManager.createRoom(socket.data.playerId, roomData);

      // Join the socket to the room
      socket.join(room.id);
      socket.data.roomId = room.id;

      // Add player to room
      const gamePlayer: GamePlayer = {
        ...socket.data.playerState,
        socketId: socket.id,
        maxHealth: 100,
        kills: 0,
        deaths: 0,
        joinedAt: Date.now(),
      };
      const joined = roomManager.joinRoom(room.id, gamePlayer);

      if (joined) {
        // Spawn enemies for the new room
        const spawnedEnemies = spawnEnemiesForRoom(room.id, 3);

        socket.emit('room:created', {
          id: room.id,
          name: room.name,
          players: roomManager.getRoomPlayers(room.id),
          maxPlayers: room.maxPlayers,
          gameMode: room.gameMode,
          isActive: false,
          createdAt: room.createdAt,
        });

        // Broadcast spawned enemies to all players in the room
        if (spawnedEnemies.length > 0) {
          io.to(room.id).emit(
            'enemies:spawned',
            spawnedEnemies.map(enemy => ({
              id: enemy.id,
              position: enemy.position,
              rotation: enemy.rotation,
              health: enemy.health,
              isDead: enemy.isDead,
              isAlive: enemy.isAlive,
            })),
          );
          console.log(`Broadcasted ${spawnedEnemies.length} spawned enemies to room ${room.id}`);
        }

        console.log(`Player ${socket.data.playerId} created and joined room ${room.id}`);
      } else {
        socket.emit('error', 'Failed to join created room');
      }
    } catch (error) {
      console.error('Error creating room:', error);
      socket.emit('error', 'Failed to create room');
    }
  });

  // Handle room joining
  socket.on('room:join', roomId => {
    if (!socket.data.playerState) {
      socket.emit('error', 'Must join as player first');
      return;
    }

    const gamePlayer: GamePlayer = {
      ...socket.data.playerState,
      socketId: socket.id,
      maxHealth: 100,
      kills: 0,
      deaths: 0,
      joinedAt: Date.now(),
    };
    const joined = roomManager.joinRoom(roomId, gamePlayer);

    if (joined) {
      socket.join(roomId);
      socket.data.roomId = roomId;

      const room = roomManager.getRoom(roomId);
      if (room) {
        // Notify player they joined
        socket.emit('room:joined', {
          id: room.id,
          name: room.name,
          players: roomManager.getRoomPlayers(room.id),
          maxPlayers: room.maxPlayers,
          gameMode: room.gameMode,
          isActive: room.gameState === 'active',
          createdAt: room.createdAt,
        });

        // Send existing enemies to the newly joined player
        const existingEnemies = roomManager.getRoomEnemies(roomId);
        if (existingEnemies.length > 0) {
          socket.emit(
            'enemies:spawned',
            existingEnemies.map(enemy => ({
              id: enemy.id,
              position: enemy.position,
              rotation: enemy.rotation,
              health: enemy.health,
              isDead: enemy.isDead,
              isAlive: enemy.isAlive,
            })),
          );
        }

        // Notify other players in room
        socket.to(roomId).emit('player:joined', {
          id: socket.data.playerId,
          name: socket.data.playerState.name,
          position: socket.data.playerState.position,
          rotation: socket.data.playerState.rotation,
          health: socket.data.playerState.health,
          weapon: socket.data.playerState.weapon,
          isAlive: socket.data.playerState.isAlive,
        });
      }
    } else {
      socket.emit('error', 'Failed to join room');
    }
  });

  // Handle room leaving
  socket.on('room:leave', () => {
    if (socket.data.roomId) {
      const roomId = socket.data.roomId;

      // Leave socket room
      socket.leave(roomId);

      // Remove from room manager
      roomManager.leaveRoom(socket.data.playerId);

      // Notify other players
      socket.to(roomId).emit('player:left', socket.data.playerId);

      // Clear room data
      socket.data.roomId = null;

      socket.emit('room:left');
      console.log(`Player ${socket.data.playerId} left room ${roomId}`);
    }
  });

  // Handle room list request
  socket.on('room:list', () => {
    socket.emit('room:list', roomManager.getAllRooms());
  });

  // Handle weapon firing
  socket.on('weapon:fire', weaponData => {
    if (!socket.data.roomId || !socket.data.playerState) return;

    // Broadcast weapon fire to other players in room
    socket.to(socket.data.roomId).emit('weapon:fire', {
      playerId: socket.data.playerId,
      ...weaponData,
      timestamp: Date.now(),
    });

    console.log(`Player ${socket.data.playerId} fired ${weaponData.weaponType}`);
  });

  // Handle enemy damage
  socket.on('enemy:damage', enemyData => {
    if (!socket.data.roomId || !socket.data.playerState) return;

    const { enemyId, damage, playerId } = enemyData;

    // Get the enemy from room
    const enemy = roomManager.getRoomEnemy(socket.data.roomId, enemyId);
    if (!enemy) {
      console.log(`Enemy ${enemyId} not found in room ${socket.data.roomId}`);
      return;
    }

    // Apply damage
    const newHealth = Math.max(0, enemy.health - damage);
    const wasAlive = enemy.isAlive;

    // Update enemy state
    roomManager.updateEnemyInRoom(socket.data.roomId, enemyId, {
      health: newHealth,
      isDead: newHealth <= 0,
      isAlive: newHealth > 0,
    });

    console.log(
      `Player ${playerId} damaged enemy ${enemyId} for ${damage} damage (${enemy.health} -> ${newHealth})`,
    );

    // Broadcast enemy update to all players in room
    const updatedEnemy = roomManager.getRoomEnemy(socket.data.roomId, enemyId);
    if (updatedEnemy) {
      io.to(socket.data.roomId).emit('enemy:updated', {
        id: updatedEnemy.id,
        position: updatedEnemy.position,
        rotation: updatedEnemy.rotation,
        health: updatedEnemy.health,
        isDead: updatedEnemy.isDead,
        isAlive: updatedEnemy.isAlive,
      });

      // If enemy died, broadcast death event
      if (wasAlive && updatedEnemy.isDead) {
        io.to(socket.data.roomId).emit('enemy:died', enemyId);
        console.log(`Enemy ${enemyId} was killed by player ${playerId}`);
      }
    }
  });

  // Handle enemy kill (direct kill without damage calculation)
  socket.on('enemy:kill', enemyData => {
    if (!socket.data.roomId || !socket.data.playerState) return;

    const { enemyId, playerId } = enemyData;

    // Update enemy to dead state
    const updated = roomManager.updateEnemyInRoom(socket.data.roomId, enemyId, {
      health: 0,
      isDead: true,
      isAlive: false,
    });

    if (updated) {
      // Broadcast enemy death to all players in room
      io.to(socket.data.roomId).emit('enemy:died', enemyId);
      console.log(`Enemy ${enemyId} was killed by player ${playerId}`);

      // Also send updated state
      const updatedEnemy = roomManager.getRoomEnemy(socket.data.roomId, enemyId);
      if (updatedEnemy) {
        io.to(socket.data.roomId).emit('enemy:updated', {
          id: updatedEnemy.id,
          position: updatedEnemy.position,
          rotation: updatedEnemy.rotation,
          health: updatedEnemy.health,
          isDead: updatedEnemy.isDead,
          isAlive: updatedEnemy.isAlive,
        });
      }
    }
  });

  // Handle manual enemy spawning (host only)
  socket.on('enemy:spawn', (spawnData: { position?: { x: number; y: number; z: number } }) => {
    if (!socket.data.roomId || !socket.data.playerState) return;

    const room = roomManager.getRoom(socket.data.roomId);
    if (!room || room.hostId !== socket.data.playerId) {
      socket.emit('error', 'Only room host can spawn enemies');
      return;
    }

    const { position } = spawnData;
    const enemyId = `enemy_${socket.data.roomId}_${Date.now()}_manual`;

    const enemy: GameEnemy = {
      id: enemyId,
      position: position || { x: Math.random() * 20 - 10, y: 0, z: Math.random() * 20 - 10 },
      rotation: { x: 0, y: 0, z: 0, w: 1 },
      health: GAME_CONFIG.DEFAULT_ENEMY_HEALTH,
      maxHealth: GAME_CONFIG.DEFAULT_ENEMY_HEALTH,
      isDead: false,
      isAlive: true,
      createdAt: Date.now(),
      lastUpdated: Date.now(),
    };

    // Add enemy to room
    if (roomManager.addEnemyToRoom(socket.data.roomId, enemy)) {
      // Broadcast spawned enemy to all players in the room
      io.to(socket.data.roomId).emit('enemies:spawned', [
        {
          id: enemy.id,
          position: enemy.position,
          rotation: enemy.rotation,
          health: enemy.health,
          isDead: enemy.isDead,
          isAlive: enemy.isAlive,
        },
      ]);

      console.log(`Host ${socket.data.playerId} manually spawned enemy ${enemyId}`);
    }
  });

  // Handle clearing all enemies (host only)
  socket.on('enemies:clear', () => {
    if (!socket.data.roomId || !socket.data.playerState) return;

    const room = roomManager.getRoom(socket.data.roomId);
    if (!room || room.hostId !== socket.data.playerId) {
      socket.emit('error', 'Only room host can clear enemies');
      return;
    }

    // Get all enemy IDs before clearing
    const enemyIds = roomManager.getRoomEnemies(socket.data.roomId).map(enemy => enemy.id);

    // Clear all enemies from room
    enemyIds.forEach(enemyId => {
      roomManager.removeEnemyFromRoom(socket.data.roomId!, enemyId);
    });

    // Broadcast enemy deaths to all players
    enemyIds.forEach(enemyId => {
      io.to(socket.data.roomId!).emit('enemy:died', enemyId);
    });

    console.log(
      `Host ${socket.data.playerId} cleared ${enemyIds.length} enemies from room ${socket.data.roomId}`,
    );
  });

  // Handle disconnection
  socket.on('disconnect', reason => {
    console.log(`Player disconnected: ${socket.id} (${reason})`);

    if (socket.data.roomId) {
      // Notify other players in room
      socket.to(socket.data.roomId).emit('player:left', socket.data.playerId);

      // Remove from room
      roomManager.leaveRoom(socket.data.playerId);
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Multiplayer server running on port ${PORT}`);
  console.log(`📡 WebSocket server ready for connections`);
  console.log(`🎮 Game server initialized with room management`);
  console.log(`⚙️  Max players per room: ${GAME_CONFIG.MAX_PLAYERS_PER_ROOM}`);
});
