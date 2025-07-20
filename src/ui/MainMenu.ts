import type { Engine } from '../core/Engine';
import { GameState } from '../core/GameStateMachine';
import type { MultiplayerEngine } from '../core/MultiplayerEngine';

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
            <button id="singleplayer-btn" class="menu-btn primary">SINGLEPLAYER</button>
            <button id="multiplayer-btn" class="menu-btn">MULTIPLAYER</button>
            <button id="settings-btn" class="menu-btn">SETTINGS</button>
            <button id="quit-btn" class="menu-btn">QUIT</button>
          </div>
          
          <div class="multiplayer-status" id="connection-status" style="display: none;">
            <span id="status-text">Disconnected</span>
          </div>
          
          <div class="version-info">v0.1.0-alpha (Multiplayer)</div>
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
    const singleplayerBtn = this.container.querySelector('#singleplayer-btn') as HTMLButtonElement;
    const multiplayerBtn = this.container.querySelector('#multiplayer-btn') as HTMLButtonElement;
    const settingsBtn = this.container.querySelector('#settings-btn') as HTMLButtonElement;
    const quitBtn = this.container.querySelector('#quit-btn') as HTMLButtonElement;

    singleplayerBtn?.addEventListener('click', () => {
      console.log('Singleplayer button clicked - transitioning to Playing state');
      this.engine.stateMachine.transition(GameState.Playing);
    });

    multiplayerBtn?.addEventListener('click', async () => {
      console.log('Multiplayer button clicked');
      const multiplayerEngine = this.engine as MultiplayerEngine;

      // Check if it's actually a MultiplayerEngine
      if ('connectToServer' in multiplayerEngine) {
        this.updateConnectionStatus('Connecting...');
        const connected = await multiplayerEngine.connectToServer();

        if (connected) {
          this.updateConnectionStatus('Connected');
          // Join as player with default name
          multiplayerEngine.joinAsPlayer('Player_' + Date.now().toString().slice(-4));

          // For testing, automatically create a room
          setTimeout(() => {
            multiplayerEngine.createRoom('Test Room', 4, 'deathmatch');
          }, 1000);
        } else {
          this.updateConnectionStatus('Connection Failed');
        }
      } else {
        alert('Multiplayer not available in this build');
      }
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

  private updateConnectionStatus(status: string): void {
    const statusElement = this.container.querySelector('#connection-status') as HTMLDivElement;
    const statusText = this.container.querySelector('#status-text') as HTMLSpanElement;

    if (statusElement && statusText) {
      statusElement.style.display = 'block';
      statusText.textContent = status;

      // Color coding
      statusElement.className = 'multiplayer-status';
      if (status.includes('Connected')) {
        statusElement.classList.add('connected');
      } else if (status.includes('Failed') || status.includes('Error')) {
        statusElement.classList.add('error');
      } else {
        statusElement.classList.add('connecting');
      }
    }
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
