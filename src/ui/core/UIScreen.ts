// src/ui/core/UIScreen.ts
import { GameState } from '../../core/GameStateMachine';

import { UIComponent } from './UIComponent';

/**
 * Base class for full-screen UI states (MainMenu, PauseMenu, etc.)
 * Extends UIComponent with screen-specific functionality.
 */
export abstract class UIScreen extends UIComponent {
  protected gameState: GameState;
  protected screenId: string;

  constructor(screenId: string, gameState: GameState, className?: string) {
    super('div', className || `screen-${screenId}`);
    this.screenId = screenId;
    this.gameState = gameState;
    this.element.id = screenId;
    this.setupScreen();
  }

  /**
   * Setup screen-specific content and layout.
   * Override in subclasses to build the screen.
   */
  protected abstract setupScreen(): void;

  /**
   * Called when this screen becomes active.
   */
  public onEnter(): void {
    // Override in subclasses
  }

  /**
   * Called when this screen becomes inactive.
   */
  public onExit(): void {
    // Override in subclasses
  }

  /**
   * Handle keyboard input for this screen.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onKeyDown(_event: KeyboardEvent): boolean {
    // Override in subclasses
    // Return true if the event was handled, false otherwise
    return false;
  }

  /**
   * Handle keyboard input for this screen.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onKeyUp(_event: KeyboardEvent): boolean {
    // Override in subclasses
    // Return true if the event was handled, false otherwise
    return false;
  }

  /**
   * Get the game state associated with this screen.
   */
  public getGameState(): GameState {
    return this.gameState;
  }

  /**
   * Get the screen identifier.
   */
  public getScreenId(): string {
    return this.screenId;
  }
}
