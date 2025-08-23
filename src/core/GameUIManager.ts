// src/core/GameUIManager.ts
import { IGameEngine } from '../interfaces/IGameEngine';
import { IUIManager } from '../interfaces/IUIManager';
import { MainMenu } from '../ui/MainMenu';

import { GameState } from './GameStateMachine';

/**
 * Combined UI manager that uses the styled MainMenu and handles game states
 */
export class GameUIManager implements IUIManager {
  private mainMenu: MainMenu;
  private gameUIElement: HTMLElement | null = null;
  private engine: IGameEngine;

  constructor(engine: IGameEngine) {
    this.engine = engine;
    // Cast engine to the MainMenu's expected type to satisfy type checks; MainMenu only calls high-level app methods
    this.mainMenu = new MainMenu(this.engine as unknown as any);
    this.createGameUI();
  }

  private createGameUI(): void {
    // Create basic game UI for when playing
    this.gameUIElement = document.createElement('div');
    this.gameUIElement.id = 'game-ui';
    this.gameUIElement.style.position = 'fixed';
    this.gameUIElement.style.top = '0';
    this.gameUIElement.style.left = '0';
    this.gameUIElement.style.width = '100%';
    this.gameUIElement.style.height = '100%';
    this.gameUIElement.style.pointerEvents = 'none';
    this.gameUIElement.style.zIndex = '1000';
    this.gameUIElement.style.display = 'none';

    this.gameUIElement.innerHTML = `
      <div class="game-hud" style="position: absolute; bottom: 20px; left: 20px; color: white; font-family: monospace;">
        <div>Health: <span id="health-display">100</span></div>
        <div>Ammo: <span id="ammo-display">30/120</span></div>
        <div>Weapon: <span id="weapon-display">Assault Rifle</span></div>
      </div>
      <div id="multiplayer-info" style="
        position: absolute; 
        top: 20px; 
        right: 20px; 
        color: #00ff88; 
        font-family: monospace;
        background: rgba(0,0,0,0.7);
        padding: 10px;
        border-radius: 5px;
        display: none;
      ">
        <div>Session ID: <span id="session-id-display" style="color: white;">-</span></div>
        <div>Status: <span id="connection-status-display" style="color: #00ff88;">Connected</span></div>
        <div>Mode: <span id="game-mode-display" style="color: white;">Single Player</span></div>
      </div>
      <div class="crosshair" style="
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);
        width: 20px; 
        height: 20px; 
        border: 2px solid white; 
        border-radius: 50%;
        pointer-events: none;
      "></div>
    `;

    document.body.appendChild(this.gameUIElement);
  }

  // IUIManager implementation
  public showMainMenu(): void {
    this.hideGameUI();
    this.mainMenu.show();
  }

  public hideMainMenu(): void {
    this.mainMenu.hide();
  }

  public showGameUI(): void {
    this.hideMainMenu();
    if (this.gameUIElement) {
      this.gameUIElement.style.display = 'block';

      // Show multiplayer info if in multiplayer mode
      const multiplayerInfo = document.getElementById('multiplayer-info');
      const gameModeDisplay = document.getElementById('game-mode-display');

      if (this.engine.isMultiplayer()) {
        if (multiplayerInfo) multiplayerInfo.style.display = 'block';
        if (gameModeDisplay) gameModeDisplay.textContent = 'Multiplayer';

        // Update session info if network manager is available
        if (this.engine.networkManager) {
          const sessionIdDisplay = document.getElementById('session-id-display');
          if (sessionIdDisplay) {
            sessionIdDisplay.textContent =
              this.engine.networkManager.getSessionId() || 'Creating...';
          }
        }
      } else {
        if (multiplayerInfo) multiplayerInfo.style.display = 'none';
        if (gameModeDisplay) gameModeDisplay.textContent = 'Single Player';
      }
    }
  }

  public hideGameUI(): void {
    if (this.gameUIElement) {
      this.gameUIElement.style.display = 'none';
    }
  }

  public showPauseMenu(): void {
    // For now, just show main menu
    this.showMainMenu();
  }

  public hidePauseMenu(): void {
    this.hideMainMenu();
  }

  public updateHealth(current: number, max: number): void {
    const healthDisplay = document.getElementById('health-display');
    if (healthDisplay) {
      healthDisplay.textContent = `${current}/${max}`;
    }
  }

  public updateAmmo(current: number, max: number, isReloading: boolean): void {
    const ammoDisplay = document.getElementById('ammo-display');
    if (ammoDisplay) {
      ammoDisplay.textContent = isReloading ? 'Reloading...' : `${current}/${max}`;
    }
  }

  public updateWeaponInfo(weaponName: string): void {
    const weaponDisplay = document.getElementById('weapon-display');
    if (weaponDisplay) {
      weaponDisplay.textContent = weaponName;
    }
  }

  public showHitMarker(): void {
    // TODO: Implement hit marker effect
    console.log('Hit marker shown');
  }

  // Multiplayer UI methods (basic implementation)
  public showSessionCreationUI(): void {
    console.log('Session creation UI would be shown');
  }

  public showSessionJoinUI(): void {
    console.log('Session join UI would be shown');
  }

  public displaySessionId(sessionId: string): void {
    console.log(`Session ID: ${sessionId}`);
    const sessionIdDisplay = document.getElementById('session-id-display');
    if (sessionIdDisplay) {
      sessionIdDisplay.textContent = sessionId;
    }
  }

  public updateConnectionStatus(status: string): void {
    console.log(`Connection status: ${status}`);
  }

  public showDeathScreen(respawnTime: number): void {
    console.log(`Death screen shown, respawn in ${respawnTime}s`);
  }

  public hideDeathScreen(): void {
    console.log('Death screen hidden');
  }

  public handleGameStateChange(oldState: GameState, newState: GameState): void {
    console.log(`UI State change: ${oldState} -> ${newState}`);

    switch (newState) {
      case GameState.MainMenu:
        this.showMainMenu();
        break;
      case GameState.Playing:
        this.showGameUI();
        // Don't call engine.transitionToState here - it creates infinite loop!
        break;
      case GameState.Paused:
        this.showPauseMenu();
        break;
      case GameState.GameOver:
        this.showDeathScreen(5);
        break;
    }
  }

  public dispose(): void {
    this.mainMenu.hide();
    if (this.gameUIElement && this.gameUIElement.parentNode) {
      this.gameUIElement.parentNode.removeChild(this.gameUIElement);
    }
    // Engine reference maintained for potential cleanup
  }
}
