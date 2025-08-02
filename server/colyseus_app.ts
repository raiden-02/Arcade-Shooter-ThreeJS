import { createServer } from 'http';

import { monitor } from '@colyseus/monitor';
import { Server } from 'colyseus';
import cors from 'cors';
import express from 'express';

import { GameRoom } from './rooms/GameRoom';

// Express + HTTP
const app = express();
const port = Number(process.env.PORT || 3000);

// Enable CORS for client connections
app.use(cors());

const httpServer = createServer(app);

// Colyseus
const gameServer = new Server({
  server: httpServer,
});

// Register room handlers
gameServer.define('arena', GameRoom);

// Monitoring dashboard (dev only)
if (process.env.NODE_ENV !== 'production') {
  app.use('/colyseus', monitor());
}

// Health check
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: Date.now(),
  });
});

// Start server
httpServer.listen(port, () => {
  console.log(`🎮 Multiplayer FPS Game Server listening on :${port}`);
  console.log(`📊 Monitor available at http://localhost:${port}/colyseus`);
});

export default gameServer;
