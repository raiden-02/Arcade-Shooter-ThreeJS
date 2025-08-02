// src/ui/core/NewUIManager.ts
import { GameState } from '../../core/GameStateMachine';
import { SettingsService } from '../../core/SettingsService';
import { IGameEngine } from '../../interfaces/IGameEngine';
import { GameOverScreen } from '../screens/GameOverScreen.ts';
import { GameUIScreen } from '../screens/GameUIScreen.ts';
import { MainMenuScreen } from '../screens/MainMenuScreen.ts';
import { PauseScreen } from '../screens/PauseScreen.ts';

import { UIComponent } from './UIComponent';
import { UIScreen } from './UIScreen';

/**
 * Central manager for all UI screens and components.
 * Handles transitions between different UI states based on game state.
 */
export class NewUIManager {
  private screens: Map<GameState, UIScreen> = new Map();
  private activeScreen: UIScreen | null = null;
  private engine: IGameEngine;
  private settingsService: SettingsService;
  private container: HTMLElement;

  // Shared UI components that persist across screens
  private overlays: UIComponent[] = [];

  constructor(engine: IGameEngine, settingsService: SettingsService) {
    this.engine = engine;
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
    const currentState = this.engine.getCurrentState();
    this.transitionToScreen(currentState);
  }

  /**
   * Set up event listeners for game state changes.
   */
  private setupEventListeners(): void {
    // Note: Game state change events would need to be implemented
    // in the engine interface for this to work properly
    // For now, state transitions are handled manually
  }

  /**
   * Transition to a specific screen based on game state.
   */
  public transitionToScreen(gameState: GameState): void {
    // Hide current screen
    if (this.activeScreen) {
      this.activeScreen.hide();
    }

    // Show new screen
    const newScreen = this.screens.get(gameState);
    if (newScreen) {
      newScreen.show();
      this.activeScreen = newScreen;
    } else {
      console.warn(`No screen registered for game state: ${gameState}`);
    }
  }

  /**
   * Handle game state changes.
   */
  public handleGameStateChange(oldState: GameState, newState: GameState): void {
    console.log(`🎮 UI Manager: Game state transition ${oldState} -> ${newState}`);
    this.transitionToScreen(newState);
  }

  /**
   * Add a persistent overlay component.
   */
  public addOverlay(component: UIComponent): void {
    this.overlays.push(component);
    this.container.appendChild(component.getElement());
  }

  /**
   * Remove a persistent overlay component.
   */
  public removeOverlay(component: UIComponent): void {
    const index = this.overlays.indexOf(component);
    if (index !== -1) {
      this.overlays.splice(index, 1);
      this.container.removeChild(component.getElement());
    }
  }

  /**
   * Get a specific screen by game state.
   */
  public getScreen(gameState: GameState): UIScreen | undefined {
    return this.screens.get(gameState);
  }

  /**
   * Get the currently active screen.
   */
  public getActiveScreen(): UIScreen | null {
    return this.activeScreen;
  }

  /**
   * Show/hide the entire UI manager.
   */
  public setVisible(visible: boolean): void {
    this.container.style.display = visible ? 'block' : 'none';
  }

  /**
   * Clean up resources and event listeners.
   */
  public dispose(): void {
    // Clean up event listeners
    // Clean up screens
    this.screens.forEach(screen => {
      screen.dispose();
    });
    this.screens.clear();

    // Clean up overlays
    this.overlays.forEach(overlay => {
      overlay.dispose();
    });
    this.overlays.length = 0;

    // Remove from DOM
    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}
