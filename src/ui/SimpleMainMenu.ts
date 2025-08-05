import { GameState, GameStateMachine } from '../core/GameStateMachine';

export class SimpleMainMenu {
  private container: HTMLElement;
  private fsm: GameStateMachine;

  constructor(fsm: GameStateMachine) {
    this.fsm = fsm;

    // Create container
    this.container = document.createElement('div');
    this.container.className = 'main-menu';
    this.container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Courier New', monospace;
      color: #00ff88;
      z-index: 1000;
    `;

    this.container.innerHTML = `
      <div class="main-menu-content" style="text-align: center;">
        <h1 style="font-size: 4rem; margin-bottom: 2rem; text-shadow: 0 0 20px #00ff88;">CYBER RUNNER</h1>
        <p style="font-size: 1.2rem; margin-bottom: 3rem; color: #88ff88;">Fast-Paced Cyberpunk FPS</p>
        <div class="menu-buttons">
          <button id="singleplayer-btn" style="
            display: block;
            width: 300px;
            margin: 1rem auto;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            background: rgba(0, 255, 136, 0.1);
            border: 2px solid #00ff88;
            color: #00ff88;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
          ">SINGLEPLAYER</button>
          <button id="multiplayer-btn" style="
            display: block;
            width: 300px;
            margin: 1rem auto;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            background: rgba(0, 255, 136, 0.1);
            border: 2px solid #00ff88;
            color: #00ff88;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
          ">MULTIPLAYER</button>
          <button id="settings-btn" style="
            display: block;
            width: 300px;
            margin: 1rem auto;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            background: rgba(0, 255, 136, 0.1);
            border: 2px solid #00ff88;
            color: #00ff88;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
          ">SETTINGS</button>
        </div>
        <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); font-size: 0.9rem; color: #666;">
          v0.1.0-alpha (Multiplayer Ready)
        </div>
      </div>
    `;

    // Add hover effects
    const style = document.createElement('style');
    style.textContent = `
      .main-menu button:hover {
        background: rgba(0, 255, 136, 0.2) !important;
        box-shadow: 0 0 20px rgba(0, 255, 136, 0.3) !important;
        transform: scale(1.05) !important;
      }
    `;
    document.head.appendChild(style);
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
    this.fsm.transition(GameState.Playing);
  };

  private onMultiplayerClick = (): void => {
    console.log('🌐 Starting multiplayer game...');
    // For now, also transition to playing - multiplayer connection can happen in-game
    this.fsm.transition(GameState.Playing);
  };

  private onSettingsClick = (): void => {
    console.log('⚙️ Opening settings...');
    alert('Settings panel coming soon!');
  };
}
