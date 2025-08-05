import { GameApplication } from '../core/GameApplication';

export class MainMenu {
  private app: GameApplication;
  private container: HTMLElement;

  constructor(app: GameApplication) {
    this.app = app;

    // Create container
    this.container = document.createElement('div');
    this.container.className = 'main-menu';
    this.container.innerHTML = `
      <div class="main-menu-content">
        <h1 class="game-title">FPS Game</h1>
        <div class="menu-buttons">
          <button id="singleplayer-btn" class="menu-button">Singleplayer</button>
          <button id="multiplayer-btn" class="menu-button">Multiplayer</button>
          <button id="settings-btn" class="menu-button">Settings</button>
        </div>
      </div>
    `;
  }

  public show(): void {
    document.body.appendChild(this.container);
    this.bindEvents();
  }

  public hide(): void {
    this.unbindEvents();
    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }

  private bindEvents(): void {
    document
      .getElementById('singleplayer-btn')
      ?.addEventListener('click', this.onSingleplayerClick);
    document.getElementById('multiplayer-btn')?.addEventListener('click', this.onMultiplayerClick);
    document.getElementById('settings-btn')?.addEventListener('click', this.onSettingsClick);
  }

  private unbindEvents(): void {
    document
      .getElementById('singleplayer-btn')
      ?.removeEventListener('click', this.onSingleplayerClick);
    document
      .getElementById('multiplayer-btn')
      ?.removeEventListener('click', this.onMultiplayerClick);
    document.getElementById('settings-btn')?.removeEventListener('click', this.onSettingsClick);
  }

  private onSingleplayerClick = (): void => {
    console.log('🎮 Starting singleplayer game...');
    this.app.startSinglePlayer();
  };

  private onMultiplayerClick = (): void => {
    console.log('🌐 Starting multiplayer game...');
    // For now, create a default multiplayer session
    this.app.createMultiplayerSession('Test Session', 4, 'deathmatch');
  };

  private onSettingsClick = (): void => {
    console.log('⚙️ Opening settings...');
    // TODO: Show settings panel
  };
}
