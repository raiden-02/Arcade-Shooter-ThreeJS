import type { Engine } from '../core/Engine';
import { GameState } from '../core/GameStateMachine';

import { SettingsPanel } from './SettingsPanel';

export class MainMenu {
  container: HTMLDivElement;
  private engine: Engine;
  private settingsPanel?: SettingsPanel;

  constructor(engine: Engine, settingsPanel?: SettingsPanel) {
    this.engine = engine;
    this.settingsPanel = settingsPanel;
    this.container = document.createElement('div');
    this.container.id = 'main-menu';
    this.container.className = 'main-menu';

    this.container.innerHTML = `
      <div class="main-menu-background">
        <div class="main-menu-content">
          <h1 class="game-title">CYBER RUNNER</h1>
          <p class="game-subtitle">Fast-Paced Cyberpunk FPS</p>
          
          <div class="main-menu-buttons">
            <button id="play-btn" class="menu-btn primary">PLAY</button>
            <button id="settings-btn" class="menu-btn">SETTINGS</button>
            <button id="quit-btn" class="menu-btn">QUIT</button>
          </div>
          
          <div class="version-info">v0.1.0-alpha</div>
        </div>
      </div>
    `;

    // Set up event listeners
    this.setupEventListeners();

    // Add to DOM but hide initially
    document.body.appendChild(this.container);
    this.hide();
  }

  private setupEventListeners(): void {
    const playBtn = this.container.querySelector('#play-btn') as HTMLButtonElement;
    const settingsBtn = this.container.querySelector('#settings-btn') as HTMLButtonElement;
    const quitBtn = this.container.querySelector('#quit-btn') as HTMLButtonElement;

    playBtn?.addEventListener('click', () => {
      console.log('Play button clicked - transitioning to Playing state');
      this.engine.stateMachine.transition(GameState.Playing);
    });

    settingsBtn?.addEventListener('click', () => {
      console.log('Settings button clicked');
      if (this.settingsPanel) {
        this.settingsPanel.toggle();
      } else {
        alert('Settings panel not available');
      }
    });

    quitBtn?.addEventListener('click', () => {
      console.log('Quit button clicked');
      // For web games, we can't really quit, so maybe go back to a landing page
      if (confirm('Are you sure you want to quit?')) {
        window.close(); // May not work in all browsers
      }
    });
  }

  public show(): void {
    this.container.style.display = 'flex';
    // Release pointer lock when showing main menu
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
  }

  public hide(): void {
    this.container.style.display = 'none';
    // Hide settings panel when hiding main menu
    if (this.settingsPanel) {
      this.settingsPanel.hide();
    }
  }

  public isVisible(): boolean {
    return this.container.style.display !== 'none';
  }
}
