import { createServer } from 'http';
import express from 'express';
import { Server } from 'colyseus';
import { monitor } from '@colyseus/monitor';

import { GameRoom } from './services/GameRoom';

// Express + HTTP
const app = express();
const port = Number(process.env.PORT || 3000);

const httpServer = createServer(app);

// Colyseus
const gameServer = new Server({
  server: httpServer,
});

// Register room
gameServer.define('arena', GameRoom);

// Monitoring dashboard (dev only)
app.use('/colyseus', monitor());

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', rooms: gameServer.rooms.length });
});

httpServer.listen(port, () => {
  console.log(`Colyseus server listening on :${port}`);
});

