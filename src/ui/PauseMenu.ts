import { GameState } from '../core/GameStateMachine';
import { SettingsService } from '../core/SettingsService';
import type { IGameEngine } from '../interfaces/IGameEngine';

import { SettingsPanel } from './SettingsPanel';

export class PauseMenu {
  container: HTMLDivElement;
  private engine?: IGameEngine;
  private settingsPanel?: SettingsPanel;

  constructor(
    _settingsService?: SettingsService,
    engine?: IGameEngine,
    settingsPanel?: SettingsPanel,
  ) {
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
        this.engine.transitionToState(GameState.MainMenu);
      }
    };

    // Copy Room ID (multiplayer helper)
    const copyRoomBtn = document.createElement('button');
    copyRoomBtn.innerText = 'Copy Room ID';
    copyRoomBtn.className = 'pause-btn';
    copyRoomBtn.onclick = async () => {
      const id =
        (this.engine as any)?.networkManager?.getSessionId?.() ||
        (window as any).createdRoomId ||
        '';
      if (!id) {
        alert('No Room ID available. Are you connected to multiplayer?');
        return;
      }
      try {
        await navigator.clipboard.writeText(String(id));
        alert('Room ID copied to clipboard');
      } catch {
        const ta = document.createElement('textarea');
        ta.value = String(id);
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        alert('Room ID copied to clipboard');
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

    this.container.append(resumeBtn, settingsBtn, copyRoomBtn, mainMenuBtn, reloadBtn, quitBtn);
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
