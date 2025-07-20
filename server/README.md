# CyberRunner

WebSocket server for real-time multiplayer FPS gameplay using Socket.io.

## Setup & Installation

1. **Navigate to server directory:**

   ```bash
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## Server Features

- ✅ WebSocket server with Socket.io
- ✅ Room-based multiplayer (up to 8 players per room)
- ✅ Real-time player synchronization
- ✅ Basic weapon firing events
- ✅ Connection/disconnection handling
- ✅ CORS configured for Vite development

## API Endpoints

- `GET /health` - Server health check

## Socket Events

### Client → Server

- `player:join` - Join as a player
- `player:update` - Update player state
- `room:create` - Create new room
- `room:join` - Join existing room
- `room:leave` - Leave current room
- `room:list` - Get all rooms
- `weapon:fire` - Fire weapon

### Server → Client

- `player:joined` - Player joined confirmation
- `player:left` - Player left notification
- `player:updated` - Player state update
- `room:created` - Room created confirmation
- `room:joined` - Room joined confirmation
- `room:left` - Room left confirmation
- `room:list` - List of available rooms
- `error` - Error messages

## Configuration

- **Port:** 3000 (default) or `process.env.PORT`
- **Max Players per Room:** 8
- **CORS Origins:** localhost:5173, localhost:4173 (Vite dev/preview)

## Development

The server uses TypeScript and `tsx` for development with hot reload.

```bash
npm run dev    # Start with hot reload
npm run build  # Compile TypeScript
npm run start  # Start compiled JavaScript
```
