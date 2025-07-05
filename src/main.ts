// /src/main.ts
import './style.css';
import './ui.css';
import { Engine } from './core/Engine';
import { GameState, GameStateMachine } from './core/GameStateMachine';
import { DevLevel } from './levels/DevLevel';

// Initialize engine
const engine = new Engine();
// Create the game state machine
const fsm: GameStateMachine = engine.stateMachine;

// Prepare playing scene
const level = new DevLevel(engine);
// When entering Playing state from Boot or MainMenu, load the scene
fsm.onStateChange((prev, next) => {
  if (next === GameState.Playing && (prev === GameState.Boot || prev === GameState.MainMenu)) {
    engine.changeScene(level);
  }
});

// Start the engine loop
engine.start();

// Start with main menu instead of jumping directly to game
fsm.transition(GameState.MainMenu);
