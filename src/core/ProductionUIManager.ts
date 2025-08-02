// src/core/ProductionUIManager.ts
import { IUIManager } from '../interfaces/IUIManager';

import { GameState } from './GameStateMachine';

/**
 * Production-quality UI manager for handling game UI states and updates
 */
export class ProductionUIManager implements IUIManager {
  private mainMenuElement: HTMLElement | null = null;
  private gameUIElement: HTMLElement | null = null;
  private pauseMenuElement: HTMLElement | null = null;
  private deathScreenElement: HTMLElement | null = null;
  private sessionUIElement: HTMLElement | null = null;

  private healthBar: HTMLElement | null = null;
  private ammoDisplay: HTMLElement | null = null;
  private weaponDisplay: HTMLElement | null = null;
  private connectionStatus: HTMLElement | null = null;
  private sessionIdDisplay: HTMLElement | null = null;

  private uiRoot: HTMLElement;

  constructor() {
    // Create UI root container
    this.uiRoot = document.createElement('div');
    this.uiRoot.id = 'ui-root';
    this.uiRoot.style.position = 'fixed';
    this.uiRoot.style.top = '0';
    this.uiRoot.style.left = '0';
    this.uiRoot.style.width = '100%';
    this.uiRoot.style.height = '100%';
    this.uiRoot.style.pointerEvents = 'none';
    this.uiRoot.style.zIndex = '1000';

    document.body.appendChild(this.uiRoot);
    this.createUIElements();
  }

  private createUIElements(): void {
    // Main Menu
    this.mainMenuElement = this.createElement(
      'main-menu',
      `
      <div class="main-menu">
        <h1>FPS Game</h1>
        <button id="single-player-btn">Single Player</button>
        <button id="multiplayer-btn">Multiplayer</button>
        <button id="settings-btn">Settings</button>
        <button id="quit-btn">Quit</button>
      </div>
    `,
    );

    // Game UI (HUD)
    this.gameUIElement = this.createElement(
      'game-ui',
      `
      <div class="game-hud">
        <div class="health-container">
          <div class="health-bar" id="health-bar">
            <div class="health-fill"></div>
          </div>
          <span class="health-text">100/100</span>
        </div>
        <div class="ammo-container">
          <span class="ammo-text" id="ammo-text">30/120</span>
          <span class="weapon-name" id="weapon-name">Assault Rifle</span>
        </div>
        <div class="crosshair"></div>
        <div class="hit-marker" id="hit-marker"></div>
      </div>
    `,
    );

    // Pause Menu
    this.pauseMenuElement = this.createElement(
      'pause-menu',
      `
      <div class="pause-menu">
        <h2>Paused</h2>
        <button id="resume-btn">Resume</button>
        <button id="settings-pause-btn">Settings</button>
        <button id="main-menu-btn">Main Menu</button>
      </div>
    `,
    );

    // Death Screen
    this.deathScreenElement = this.createElement(
      'death-screen',
      `
      <div class="death-screen">
        <h2>You Died</h2>
        <p id="respawn-timer">Respawning in 5...</p>
        <button id="respawn-btn">Respawn Now</button>
      </div>
    `,
    );

    // Session UI
    this.sessionUIElement = this.createElement(
      'session-ui',
      `
      <div class="session-ui">
        <div class="session-creation">
          <h3>Create Session</h3>
          <button id="create-session-btn">Create New Session</button>
        </div>
        <div class="session-join">
          <h3>Join Session</h3>
          <input type="text" id="session-id-input" placeholder="Enter Session ID">
          <button id="join-session-btn">Join Session</button>
        </div>
        <div class="session-info">
          <p>Session ID: <span id="current-session-id">-</span></p>
          <p>Status: <span id="connection-status">Disconnected</span></p>
        </div>
      </div>
    `,
    );

    // Cache important elements
    this.healthBar = this.gameUIElement?.querySelector('#health-bar') || null;
    this.ammoDisplay = this.gameUIElement?.querySelector('#ammo-text') || null;
    this.weaponDisplay = this.gameUIElement?.querySelector('#weapon-name') || null;
    this.connectionStatus = this.sessionUIElement?.querySelector('#connection-status') || null;
    this.sessionIdDisplay = this.sessionUIElement?.querySelector('#current-session-id') || null;
  }

  private createElement(id: string, innerHTML: string): HTMLElement {
    const element = document.createElement('div');
    element.id = id;
    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.left = '0';
    element.style.width = '100%';
    element.style.height = '100%';
    element.style.display = 'none';
    element.innerHTML = innerHTML;
    this.uiRoot.appendChild(element);
    return element;
  }

  // State management
  public showMainMenu(): void {
    this.hideAllScreens();
    if (this.mainMenuElement) {
      this.mainMenuElement.style.display = 'flex';
      this.mainMenuElement.style.pointerEvents = 'auto';
    }
  }

  public hideMainMenu(): void {
    if (this.mainMenuElement) {
      this.mainMenuElement.style.display = 'none';
      this.mainMenuElement.style.pointerEvents = 'none';
    }
  }

  public showGameUI(): void {
    this.hideAllScreens();
    if (this.gameUIElement) {
      this.gameUIElement.style.display = 'block';
      this.gameUIElement.style.pointerEvents = 'auto';
    }
  }

  public hideGameUI(): void {
    if (this.gameUIElement) {
      this.gameUIElement.style.display = 'none';
      this.gameUIElement.style.pointerEvents = 'none';
    }
  }

  public showPauseMenu(): void {
    if (this.pauseMenuElement) {
      this.pauseMenuElement.style.display = 'flex';
      this.pauseMenuElement.style.pointerEvents = 'auto';
    }
  }

  public hidePauseMenu(): void {
    if (this.pauseMenuElement) {
      this.pauseMenuElement.style.display = 'none';
      this.pauseMenuElement.style.pointerEvents = 'none';
    }
  }

  // Game state updates
  public updateHealth(current: number, max: number): void {
    if (this.healthBar) {
      const percentage = (current / max) * 100;
      const fillElement = this.healthBar.querySelector('.health-fill') as HTMLElement;
      if (fillElement) {
        fillElement.style.width = `${percentage}%`;
      }

      const textElement = this.healthBar.parentElement?.querySelector(
        '.health-text',
      ) as HTMLElement;
      if (textElement) {
        textElement.textContent = `${current}/${max}`;
      }
    }
  }

  public updateAmmo(current: number, max: number, isReloading: boolean): void {
    if (this.ammoDisplay) {
      this.ammoDisplay.textContent = isReloading ? 'Reloading...' : `${current}/${max}`;
    }
  }

  public updateWeaponInfo(weaponName: string): void {
    if (this.weaponDisplay) {
      this.weaponDisplay.textContent = weaponName;
    }
  }

  public showHitMarker(): void {
    const hitMarker = this.gameUIElement?.querySelector('#hit-marker') as HTMLElement;
    if (hitMarker) {
      hitMarker.style.display = 'block';
      hitMarker.style.opacity = '1';

      // Fade out after 200ms
      setTimeout(() => {
        hitMarker.style.opacity = '0';
        setTimeout(() => {
          hitMarker.style.display = 'none';
        }, 200);
      }, 200);
    }
  }

  // Multiplayer UI
  public showSessionCreationUI(): void {
    this.hideAllScreens();
    if (this.sessionUIElement) {
      this.sessionUIElement.style.display = 'flex';
      this.sessionUIElement.style.pointerEvents = 'auto';
    }
  }

  public showSessionJoinUI(): void {
    this.showSessionCreationUI(); // Same UI for now
  }

  public displaySessionId(sessionId: string): void {
    if (this.sessionIdDisplay) {
      this.sessionIdDisplay.textContent = sessionId;
    }
  }

  public updateConnectionStatus(status: string): void {
    if (this.connectionStatus) {
      this.connectionStatus.textContent = status;

      // Color coding
      if (status.toLowerCase().includes('connected')) {
        this.connectionStatus.style.color = 'green';
      } else if (status.toLowerCase().includes('connecting')) {
        this.connectionStatus.style.color = 'yellow';
      } else {
        this.connectionStatus.style.color = 'red';
      }
    }
  }

  // Death/respawn
  public showDeathScreen(respawnTime: number): void {
    if (this.deathScreenElement) {
      this.deathScreenElement.style.display = 'flex';
      this.deathScreenElement.style.pointerEvents = 'auto';

      const timerElement = this.deathScreenElement.querySelector('#respawn-timer') as HTMLElement;
      if (timerElement) {
        timerElement.textContent = `Respawning in ${respawnTime}...`;
      }
    }
  }

  public hideDeathScreen(): void {
    if (this.deathScreenElement) {
      this.deathScreenElement.style.display = 'none';
      this.deathScreenElement.style.pointerEvents = 'none';
    }
  }

  // Lifecycle
  public handleGameStateChange(oldState: GameState, newState: GameState): void {
    console.log(`UI State change: ${oldState} -> ${newState}`);

    switch (newState) {
      case GameState.MainMenu:
        this.showMainMenu();
        break;
      case GameState.Playing:
        this.showGameUI();
        break;
      case GameState.Paused:
        this.showPauseMenu();
        break;
      case GameState.GameOver:
        this.showDeathScreen(5);
        break;
      case GameState.Lobby:
        this.showSessionCreationUI();
        break;
    }
  }

  private hideAllScreens(): void {
    [
      this.mainMenuElement,
      this.gameUIElement,
      this.pauseMenuElement,
      this.deathScreenElement,
      this.sessionUIElement,
    ].forEach(element => {
      if (element) {
        element.style.display = 'none';
        element.style.pointerEvents = 'none';
      }
    });
  }

  public dispose(): void {
    // Remove UI root from DOM
    if (this.uiRoot.parentNode) {
      this.uiRoot.parentNode.removeChild(this.uiRoot);
    }
  }
}
