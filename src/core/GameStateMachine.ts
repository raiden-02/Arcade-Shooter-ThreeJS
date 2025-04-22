// src/core/GameStateMachine.ts
// Simple finite state machine for global game states
export enum GameState {
  Boot = 'Boot',
  MainMenu = 'MainMenu',
  Playing = 'Playing',
  Paused = 'Paused',
  GameOver = 'GameOver',
}

/**
 * Callback invoked when game state changes.
 * @param prev - previous state
 * @param next - new state
 */
type StateChangeCallback = (prev: GameState, next: GameState) => void;

/**
 * Manages transitions between global game states.
 */
export class GameStateMachine {
  private currentState: GameState = GameState.Boot;
  private callbacks: StateChangeCallback[] = [];
  // Define valid transitions for each state
  private transitions: Record<GameState, GameState[]> = {
    // Allow boot to move directly to main menu or skip to playing
    [GameState.Boot]: [GameState.MainMenu, GameState.Playing],
    [GameState.MainMenu]: [GameState.Playing],
    [GameState.Playing]: [GameState.Paused, GameState.GameOver],
    [GameState.Paused]: [GameState.Playing, GameState.MainMenu],
    [GameState.GameOver]: [GameState.MainMenu],
  };

  /**
   * Get current game state.
   */
  public getState(): GameState {
    return this.currentState;
  }

  /**
   * Register a callback for state changes.
   */
  public onStateChange(cb: StateChangeCallback): void {
    this.callbacks.push(cb);
  }

  /**
   * Attempt to transition to a new state.
   */
  public transition(nextState: GameState): void {
    const prev = this.currentState;
    if (nextState === prev) {
      return;
    }
    const allowed = this.transitions[prev] || [];
    if (!allowed.includes(nextState)) {
      console.warn(`GameStateMachine: invalid transition ${prev} → ${nextState}`);
      return;
    }
    this.currentState = nextState;
    for (const cb of this.callbacks) {
      try {
        cb(prev, nextState);
      } catch (e) {
        console.error('GameStateMachine callback error:', e);
      }
    }
  }
}
