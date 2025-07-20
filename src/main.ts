// /src/main.ts
import './style.css';
import './ui.css';
import { GameState, GameStateMachine } from './core/GameStateMachine';
import { MultiplayerEngine } from './core/MultiplayerEngine';
import { DevLevel } from './levels/DevLevel';
import { NetworkDebugUI } from './ui/NetworkDebugUI';

// Initialize multiplayer engine
const engine = new MultiplayerEngine();
// Create the game state machine
const fsm: GameStateMachine = engine.stateMachine;

// Initialize debug UI for development
const debugUI = new NetworkDebugUI(engine);
void debugUI; // Suppress unused variable warning - debugUI sets up its own event listeners
console.log('Press F12 to toggle network debug UI');

// Prepare playing scene
const level = new DevLevel(engine);
// When entering Playing state from Boot, MainMenu, or Lobby, load the scene
fsm.onStateChange((prev, next) => {
  if (
    next === GameState.Playing &&
    (prev === GameState.Boot || prev === GameState.MainMenu || prev === GameState.Lobby)
  ) {
    engine.changeScene(level);
  }

  // Log state changes for debugging
  console.log(`Game state changed: ${prev} -> ${next}`);
});

// Start the engine loop
engine.start();

// Start with main menu instead of jumping directly to game
fsm.transition(GameState.MainMenu);
