// src/ui/core/NewUIManager.ts
import { Engine } from '../../core/Engine';
import { GameState, GameStateMachine } from '../../core/GameStateMachine';
import { SettingsService } from '../../core/SettingsService';
import { GameOverScreen } from '../screens/GameOverScreen.ts';
import { GameUIScreen } from '../screens/GameUIScreen.ts';
import { MainMenuScreen } from '../screens/MainMenuScreen.ts';
import { PauseScreen } from '../screens/PauseScreen.ts';

import { UIComponent } from './UIComponent';
import { UIScreen } from './UIScreen';

// Import screen implementations

/**
 * Central manager for all UI screens and components.
 * Handles transitions between different UI states based on game state.
 */
export class UIManager {
  private screens: Map<GameState, UIScreen> = new Map();
  private activeScreen: UIScreen | null = null;
  private gameStateMachine: GameStateMachine;
  private engine: Engine;
  private settingsService: SettingsService;
  private container: HTMLElement;

  // Shared UI components that persist across screens
  private overlays: UIComponent[] = [];

  constructor(engine: Engine, settingsService: SettingsService) {
    this.engine = engine;
    this.gameStateMachine = engine.stateMachine;
    this.settingsService = settingsService;

    // Create main UI container
    this.container = document.createElement('div');
    this.container.id = 'ui-manager';
    this.container.className = 'ui-manager';
    document.body.appendChild(this.container);

    this.initializeScreens();
    this.setupEventListeners();
  }

  /**
   * Initialize all UI screens.
   */
  private initializeScreens(): void {
    // Create screens for each game state
    this.screens.set(GameState.MainMenu, new MainMenuScreen(this.engine, this.settingsService));

    this.screens.set(GameState.Playing, new GameUIScreen(this.engine, this.settingsService));

    this.screens.set(GameState.Paused, new PauseScreen(this.engine, this.settingsService));

    this.screens.set(GameState.GameOver, new GameOverScreen(this.engine, this.settingsService));

    // Add all screens to the container
    this.screens.forEach(screen => {
      this.container.appendChild(screen.getElement());
    });

    // Initialize with the current game state
    this.initializeCurrentScreen();
  }

  /**
   * Initialize the screen based on current game state.
   */
  private initializeCurrentScreen(): void {
    const currentState = this.gameStateMachine.getState();
    console.log('Initializing screen for state:', currentState);
    const screen = this.screens.get(currentState);
    if (screen) {
      console.log('Found screen for state:', currentState, screen);
      this.activeScreen = screen;
      this.activeScreen.onEnter();
      this.activeScreen.show();
      console.log('Screen should now be visible');
    } else {
      console.log('No screen found for state:', currentState, '- will wait for state transition');
      // This is fine - some states like Boot don't have screens
      // The screen will be initialized when the state changes
    }
  }

  /**
   * Setup event listeners for game state changes and input.
   */
  private setupEventListeners(): void {
    // Listen for game state changes
    this.gameStateMachine.onStateChange((prev, next) => {
      this.handleStateChange(prev, next);
    });

    // Listen for global key events
    document.addEventListener('keydown', event => {
      this.handleKeyDown(event);
    });

    document.addEventListener('keyup', event => {
      this.handleKeyUp(event);
    });

    // Listen for custom UI events
    document.addEventListener('ui:showMainMenu', () => {
      this.gameStateMachine.transition(GameState.MainMenu);
    });

    document.addEventListener('ui:startGame', () => {
      this.gameStateMachine.transition(GameState.Playing);
    });

    document.addEventListener('ui:pauseGame', () => {
      this.gameStateMachine.transition(GameState.Paused);
    });

    document.addEventListener('ui:resumeGame', () => {
      this.gameStateMachine.transition(GameState.Playing);
    });

    document.addEventListener('ui:gameOver', () => {
      this.gameStateMachine.transition(GameState.GameOver);
    });
  }

  /**
   * Handle game state transitions by showing/hiding appropriate screens.
   */
  private async handleStateChange(prev: GameState, next: GameState): Promise<void> {
    console.log(`UI State Change: ${prev} -> ${next}`);

    // Exit current screen
    if (this.activeScreen) {
      this.activeScreen.onExit();
      await this.activeScreen.hide();
    }

    // Enter new screen
    const nextScreen = this.screens.get(next);
    if (nextScreen) {
      this.activeScreen = nextScreen;
      this.activeScreen.onEnter();
      await this.activeScreen.show();
    } else {
      console.warn(`No screen found for game state: ${next}`);
      this.activeScreen = null;
    }
  }

  /**
   * Handle global keyboard input.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    // Let the active screen handle the input first
    if (this.activeScreen && this.activeScreen.onKeyDown(event)) {
      return; // Event was handled by the screen
    }

    // Handle global shortcuts
    switch (event.code) {
      case 'Escape':
        if (this.gameStateMachine.getState() === GameState.Playing) {
          this.gameStateMachine.transition(GameState.Paused);
        } else if (this.gameStateMachine.getState() === GameState.Paused) {
          this.gameStateMachine.transition(GameState.Playing);
        }
        break;
    }
  }

  /**
   * Handle global keyboard input.
   */
  private handleKeyUp(event: KeyboardEvent): void {
    // Let the active screen handle the input first
    if (this.activeScreen && this.activeScreen.onKeyUp(event)) {
      return; // Event was handled by the screen
    }

    // Handle global shortcuts if needed
  }

  /**
   * Update all UI components.
   */
  public update(deltaTime: number): void {
    // Update active screen
    if (this.activeScreen) {
      this.activeScreen.update(deltaTime);
    }

    // Update persistent overlays
    this.overlays.forEach(overlay => {
      overlay.update(deltaTime);
    });
  }

  /**
   * Get the currently active screen.
   */
  public getActiveScreen(): UIScreen | null {
    return this.activeScreen;
  }

  /**
   * Get a specific screen by game state.
   */
  public getScreen(gameState: GameState): UIScreen | undefined {
    return this.screens.get(gameState);
  }

  /**
   * Add a persistent overlay component.
   */
  public addOverlay(overlay: UIComponent): void {
    this.overlays.push(overlay);
    this.container.appendChild(overlay.getElement());
  }

  /**
   * Remove a persistent overlay component.
   */
  public removeOverlay(overlay: UIComponent): void {
    const index = this.overlays.indexOf(overlay);
    if (index !== -1) {
      this.overlays.splice(index, 1);
      overlay.destroy();
    }
  }

  /**
   * Show a temporary notification or toast.
   */
  public showNotification(message: string, duration: number = 3000): void {
    const notification = document.createElement('div');
    notification.className = 'ui-notification';
    notification.textContent = message;
    this.container.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    // Remove after duration
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, duration);
  }

  /**
   * Clean up all UI resources.
   */
  public destroy(): void {
    this.screens.forEach(screen => screen.destroy());
    this.overlays.forEach(overlay => overlay.destroy());
    this.container.remove();
  }
}
