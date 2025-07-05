import type { Engine } from '../core/Engine';
import { GameState } from '../core/GameStateMachine';
import { SettingsService } from '../core/SettingsService';

import { SettingsPanel } from './SettingsPanel';

export class PauseMenu {
  container: HTMLDivElement;
  private engine?: Engine;
  private settingsPanel?: SettingsPanel;

  constructor(_settingsService?: SettingsService, engine?: Engine, settingsPanel?: SettingsPanel) {
    this.engine = engine;
    this.settingsPanel = settingsPanel;

    this.container = document.createElement('div');
    this.container.id = 'pause-menu';

    this.createPauseMenuButtons();

    document.body.appendChild(this.container);
  }

  private createPauseMenuButtons(): void {
    // Resume button
    const resumeBtn = document.createElement('button');
    resumeBtn.innerText = 'Resume';
    resumeBtn.className = 'pause-btn';
    resumeBtn.onclick = () => document.dispatchEvent(new Event('unpause'));

    // Settings button
    const settingsBtn = document.createElement('button');
    settingsBtn.innerText = 'Settings';
    settingsBtn.className = 'pause-btn';
    settingsBtn.onclick = () => {
      if (this.settingsPanel) {
        this.settingsPanel.toggle();
      }
    };

    // Go to Main Menu button
    const mainMenuBtn = document.createElement('button');
    mainMenuBtn.innerText = 'Go to Main Menu';
    mainMenuBtn.className = 'pause-btn';
    mainMenuBtn.onclick = () => {
      if (this.engine && confirm('Return to main menu? Any unsaved progress will be lost.')) {
        this.engine.stateMachine.transition(GameState.MainMenu);
      }
    };

    // Restart button
    const reloadBtn = document.createElement('button');
    reloadBtn.innerText = 'Restart';
    reloadBtn.className = 'pause-btn';
    reloadBtn.onclick = () => {
      if (confirm('Restart the game? Any unsaved progress will be lost.')) {
        location.reload();
      }
    };

    // Quit button
    const quitBtn = document.createElement('button');
    quitBtn.innerText = 'Quit';
    quitBtn.className = 'pause-btn';
    quitBtn.onclick = () => {
      if (confirm('Are you sure you want to quit?')) {
        // For web games, we can try to close the window or go to a landing page
        window.close();
      }
    };

    this.container.append(resumeBtn, settingsBtn, mainMenuBtn, reloadBtn, quitBtn);
  }
  public show(): void {
    this.container.style.display = 'flex';
  }

  public hide(): void {
    this.container.style.display = 'none';
    // Hide settings panel when hiding pause menu
    if (this.settingsPanel) {
      this.settingsPanel.hide();
    }
  }

  public isVisible(): boolean {
    return this.container.style.display !== 'none';
  }
}
