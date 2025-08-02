// /src/main.ts - Game Engine with Colyseus Support
import './style.css';
import './ui.css';
import { Engine } from './core/Engine';
import { GameState, GameStateMachine } from './core/GameStateMachine';
import { MultiplayerEngine } from './core/MultiplayerEngine';
import { DevLevel } from './levels/DevLevel';

// Initialize engines (we'll use one at a time)
let currentEngine: Engine | MultiplayerEngine | null = null;
let currentGameMode: 'single' | 'multiplayer' | null = null;

// Prepare level instance
let level: DevLevel | null = null;

// Helper function to initialize engine and level
function initializeEngine(engine: Engine | MultiplayerEngine): void {
  const fsm: GameStateMachine = engine.stateMachine;
  level = new DevLevel(engine);

  // When entering Playing state, load the scene
  fsm.onStateChange((prev, next) => {
    console.log(`🎮 Game state changed: ${prev} -> ${next}`);

    if (
      next === GameState.Playing &&
      (prev === GameState.Boot || prev === GameState.MainMenu || prev === GameState.Connecting)
    ) {
      console.log('🚀 Loading DevLevel...');
      engine.changeScene(level!);
      console.log('DevLevel loaded');
    }
  });

  // Start the engine loop
  engine.start();

  // Start with menu state
  fsm.transition(GameState.MainMenu);
}

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
    console.log('🌐 Starting multiplayer mode...', playerName);

    try {
      // Clean up existing engine if needed
      if (currentEngine) {
        currentEngine.stateMachine.transition(GameState.MainMenu);
      }

      // Create multiplayer engine
      const multiplayerEngine = new MultiplayerEngine(document.body, 'ws://localhost:3000');
      currentEngine = multiplayerEngine;
      currentGameMode = 'multiplayer';

      // Initialize the engine
      initializeEngine(multiplayerEngine);

      // Connect to Colyseus server
      const success = await multiplayerEngine.startMultiplayer(playerName);

      if (success) {
        console.log('✅ Multiplayer started successfully!');
        return true;
      } else {
        console.error('❌ Failed to start multiplayer');
        return false;
      }
    } catch (error) {
      console.error('❌ Multiplayer startup error:', error);
      return false;
    }
  },

  startSinglePlayer: () => {
    console.log('🎮 Starting single-player mode...');

    try {
      // Clean up existing engine if needed
      if (currentEngine) {
        currentEngine.stateMachine.transition(GameState.MainMenu);
      }

      // Create single-player engine
      const singlePlayerEngine = new Engine(document.body);
      currentEngine = singlePlayerEngine;
      currentGameMode = 'single';

      // Initialize the engine
      initializeEngine(singlePlayerEngine);

      // Start single-player directly
      singlePlayerEngine.stateMachine.transition(GameState.Playing);
      console.log('✅ Single-player started');
    } catch (error) {
      console.error('❌ Single-player startup error:', error);
    }
  },

  getGameState: () => {
    if (!currentEngine) {
      return { error: 'No engine initialized' };
    }

    const baseState = {
      state: currentEngine.stateMachine.getState(),
      mode: currentGameMode,
    };

    // Add multiplayer-specific info if available
    if (currentEngine instanceof MultiplayerEngine) {
      return {
        ...baseState,
        ...currentEngine.getGameState(),
      };
    }

    return baseState;
  },

  showDebug: () => {
    const state = window.gameDebug.getGameState();
    console.table(state);
    console.log('📊 Current game state:', state);
  },

  connectToServer: async () => {
    console.log('🔌 Use startMultiplayer() to connect to server');
    return false;
  },

  disconnect: () => {
    if (currentEngine instanceof MultiplayerEngine) {
      currentEngine.disconnect();
      console.log('� Disconnected from server');
    } else {
      console.log('👋 Not connected to any server');
    }
  },
};

console.log('🎮 Colyseus FPS Game - Ready!');
console.log('📋 Available Commands:');
console.log('  - window.gameDebug.startMultiplayer("PlayerName") - Start multiplayer');
console.log('  - window.gameDebug.startSinglePlayer() - Start single-player');
console.log('  - window.gameDebug.getGameState() - Get current state');
console.log('  - window.gameDebug.showDebug() - Show debug info');
console.log('  - window.gameDebug.disconnect() - Disconnect from server');
console.log('🌐 Server expected at: ws://localhost:3000');
console.log('🔴 Click the buttons in the browser to start playing!');
