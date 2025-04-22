// /src/main.ts
import './style.css';
import { Engine } from './core/Engine';
import { GameState, GameStateMachine } from './core/GameStateMachine';
import { DevLevel } from './levels/DevLevel';

// Initialize engine
const engine = new Engine();
// Create the game state machine
const fsm: GameStateMachine = engine.stateMachine;

// Prepare playing scene
const level = new DevLevel(engine);
// When entering Playing state, load the scene
fsm.onStateChange((_, next) => {
  if (next === GameState.Playing) {
    engine.changeScene(level);
  }
});

// Start the engine loop
engine.start();

// Kick off by transitioning to Playing state
fsm.transition(GameState.Playing);
