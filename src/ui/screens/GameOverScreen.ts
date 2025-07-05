// src/ui/screens/GameOverScreen.ts
import { Engine } from '../../core/Engine';
import { GameState } from '../../core/GameStateMachine';
import { SettingsService } from '../../core/SettingsService';
import { UIScreen } from '../core/UIScreen';

/**
 * Game over screen.
 */
export class GameOverScreen extends UIScreen {
  constructor(engine: Engine, settingsService: SettingsService) {
    super('game-over', GameState.GameOver, 'game-over-screen');
    // Store references if needed later
    void engine;
    void settingsService;
  }

  protected setupScreen(): void {
    this.element.innerHTML = `
      <div class="game-over-container">
        <div class="game-over-header">
          <h1 class="game-over-title">MISSION FAILED</h1>
          <div class="game-over-subtitle">Better luck next time, runner.</div>
        </div>
        
        <div class="game-over-stats">
          <div class="stat-item">
            <span class="stat-label">Time Survived:</span>
            <span class="stat-value" id="time-survived">00:00</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Enemies Eliminated:</span>
            <span class="stat-value" id="enemies-killed">0</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Accuracy:</span>
            <span class="stat-value" id="accuracy">0%</span>
          </div>
        </div>
        
        <nav class="game-over-nav">
          <button id="retry-btn" class="menu-btn primary">TRY AGAIN</button>
          <button id="main-menu-btn" class="menu-btn">MAIN MENU</button>
        </nav>
        
        <!-- Background effects -->
        <div class="game-over-glitch"></div>
      </div>
    `;

    this.setupEventListeners();
  }

  protected setupEventListeners(): void {
    super.setupEventListeners();

    // Retry button
    const retryBtn = this.element.querySelector('#retry-btn') as HTMLButtonElement;
    retryBtn?.addEventListener('click', () => {
      location.reload(); // Quick restart for now
    });

    // Main menu button
    const mainMenuBtn = this.element.querySelector('#main-menu-btn') as HTMLButtonElement;
    mainMenuBtn?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('ui:showMainMenu'));
    });
  }

  public onEnter(): void {
    console.log('Entering Game Over Screen');
    // Show cursor
    document.body.style.cursor = 'default';

    // TODO: Get actual game stats and display them
    this.updateStats({
      timeSurvived: 0,
      enemiesKilled: 0,
      accuracy: 0,
    });
  }

  public onExit(): void {
    console.log('Exiting Game Over Screen');
  }

  public onKeyDown(event: KeyboardEvent): boolean {
    switch (event.code) {
      case 'Enter':
      case 'Space':
        // Retry on Enter/Space
        location.reload();
        return true;
      case 'Escape':
        // Main menu on Escape
        document.dispatchEvent(new CustomEvent('ui:showMainMenu'));
        return true;
    }
    return false;
  }

  /**
   * Update the game over screen with game statistics.
   */
  public updateStats(stats: {
    timeSurvived: number;
    enemiesKilled: number;
    accuracy: number;
  }): void {
    const timeSurvivedEl = this.element.querySelector('#time-survived');
    const enemiesKilledEl = this.element.querySelector('#enemies-killed');
    const accuracyEl = this.element.querySelector('#accuracy');

    if (timeSurvivedEl) {
      const minutes = Math.floor(stats.timeSurvived / 60);
      const seconds = Math.floor(stats.timeSurvived % 60);
      timeSurvivedEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    if (enemiesKilledEl) {
      enemiesKilledEl.textContent = stats.enemiesKilled.toString();
    }

    if (accuracyEl) {
      accuracyEl.textContent = `${Math.round(stats.accuracy)}%`;
    }
  }
}
