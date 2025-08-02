// /src/main.ts - Game Engine with Colyseus Support
import './style.css';
import './ui.css';
import { Engine } from './core/Engine';
import { GameState, GameStateMachine } from './core/GameStateMachine';
import { DevLevel } from './levels/DevLevel';

// Initialize game engine
const engine = new Engine(document.body);
const fsm: GameStateMachine = engine.stateMachine;

// Prepare playing scene
const level = new DevLevel(engine);

// When entering Playing state, load the scene
fsm.onStateChange((prev, next) => {
  console.log(`🎮 Game state changed: ${prev} -> ${next}`);

  if (
    next === GameState.Playing &&
    (prev === GameState.Boot || prev === GameState.MainMenu || prev === GameState.Connecting)
  ) {
    console.log('🚀 Loading DevLevel for Colyseus multiplayer...');
    engine.changeScene(level);
    console.log('✅ DevLevel loaded');
  }
});

// Start the engine loop
engine.start();

// Start with menu state
fsm.transition(GameState.MainMenu);

// Global debug interface for runtime testing
declare global {
  interface Window {
    gameDebug: {
      startMultiplayer: (playerName?: string) => Promise<boolean>;
      startSinglePlayer: () => void;
      getGameState: () => object | null;
      showDebug: () => void;
      connectToServer: () => Promise<boolean>;
      disconnect: () => void;
    };
  }
}

window.gameDebug = {
  startMultiplayer: async (playerName?: string) => {
    console.log('🌐 Starting multiplayer...', playerName);
    // Multiplayer now handled via HTML interface and Colyseus
    console.log('Use the HTML interface buttons to connect to multiplayer');
    return false;
  },

  startSinglePlayer: () => {
    console.log('🎮 Starting single-player...');
    fsm.transition(GameState.Playing);
    console.log('✅ Single-player started');
  },

  getGameState: () => {
    return { state: fsm.getState() };
  },

  showDebug: () => {
    const state = fsm.getState();
    console.table({ currentState: state });
    console.log('📊 Current game state:', state);
  },

  connectToServer: async () => {
    console.log('🔌 Connect to server via HTML interface');
    return false;
  },

  disconnect: () => {
    console.log('👋 Disconnect handled via HTML interface');
  },
};

console.log('🎮 Colyseus FPS Game - Architecture Migration Complete!');
console.log('📋 Available Commands:');
console.log('  - window.gameDebug.startMultiplayer("PlayerName") - Start multiplayer');
console.log('  - window.gameDebug.startSinglePlayer() - Start single-player');
console.log('  - window.gameDebug.getGameState() - Get current state');
console.log('  - window.gameDebug.showDebug() - Show debug info');
console.log('  - window.gameDebug.disconnect() - Disconnect from server');
console.log('🌐 Server expected at: ws://localhost:3000');
