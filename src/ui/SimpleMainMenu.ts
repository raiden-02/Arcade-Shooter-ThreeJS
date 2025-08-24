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
    console.log('🌐 Multiplayer menu...');
    // Show simple create/join dialog
    const overlay = document.createElement('div');
    overlay.style.cssText = `position:fixed; inset:0; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; z-index:1100;`;
    overlay.innerHTML = `
      <div style="background:#111; border:1px solid #00ff88; padding:24px; width:480px; color:#00ff88; font-family:inherit;">
        <h2 style="margin-top:0;">Multiplayer</h2>
        <div style="margin-bottom:12px;">
          <label>Player Name</label>
          <input id="mp-name" type="text" placeholder="Neo" value="Player_${Date.now().toString().slice(-4)}" style="width:100%; padding:8px; background:#0a0a0a; color:#00ff88; border:1px solid #00ff88;"/>
        </div>
        <div style="display:flex; gap:12px; align-items:flex-start;">
          <div style="flex:1; border:1px solid #00ff88; padding:12px;">
            <h3>Create Session</h3>
            <input id="mp-session-name" type="text" placeholder="my-room" style="width:100%; padding:8px; background:#0a0a0a; color:#00ff88; border:1px solid #00ff88;"/>
            <button id="mp-create" style="margin-top:8px; width:100%; padding:10px; background:rgba(0,255,136,0.1); border:1px solid #00ff88; color:#00ff88; cursor:pointer;">Create</button>
            <div id="mp-created" style="display:none; margin-top:8px; font-size:12px; color:#88ff88;">
              Room ID: <span id="mp-room-id" style="user-select:text;"></span>
              <button id="mp-copy" style="margin-left:8px; padding:4px 8px; border:1px solid #00ff88; background:transparent; color:#00ff88; cursor:pointer;">Copy</button>
            </div>
          </div>
          <div style="flex:1; border:1px solid #00ff88; padding:12px;">
            <h3>Join Session</h3>
            <input id="mp-session-id" type="text" placeholder="session-id" style="width:100%; padding:8px; background:#0a0a0a; color:#00ff88; border:1px solid #00ff88;"/>
            <button id="mp-join" style="margin-top:8px; width:100%; padding:10px; background:rgba(0,255,136,0.1); border:1px solid #00ff88; color:#00ff88; cursor:pointer;">Join</button>
          </div>
        </div>
        <div style="margin-top:12px; text-align:right;"><button id="mp-cancel" style="padding:8px 12px; background:transparent; border:1px solid #00ff88; color:#00ff88;">Cancel</button></div>
      </div>`;
    document.body.appendChild(overlay);

    const cleanup = () => overlay.remove();
    const getName = () => (document.getElementById('mp-name') as HTMLInputElement)?.value?.trim();
    const onCreate = () => {
      const playerName = getName() || `Player_${Date.now().toString().slice(-4)}`;
      const sessionName =
        (document.getElementById('mp-session-name') as HTMLInputElement)?.value?.trim() ||
        `room_${Date.now().toString().slice(-4)}`;
      (window as any).multiplayerOpts = { mode: 'create', playerName, sessionName };
      // Clean up overlay so the game canvas is interactive
      cleanup();
      this.fsm.transition(GameState.Playing);
    };
    const onJoin = () => {
      const playerName = getName() || `Player_${Date.now().toString().slice(-4)}`;
      const sessionId = (
        document.getElementById('mp-session-id') as HTMLInputElement
      )?.value?.trim();
      if (!sessionId) return alert('Enter a session id to join');
      (window as any).multiplayerOpts = { mode: 'join', playerName, sessionId };
      cleanup();
      this.fsm.transition(GameState.Playing);
    };
    overlay.querySelector('#mp-create')?.addEventListener('click', onCreate);
    overlay.querySelector('#mp-join')?.addEventListener('click', onJoin);
    overlay.querySelector('#mp-cancel')?.addEventListener('click', cleanup);
    overlay.querySelector('#mp-copy')?.addEventListener('click', async () => {
      const text =
        (document.getElementById('mp-room-id') as HTMLSpanElement)?.textContent ||
        (window as any).createdRoomId ||
        '';
      if (!text) return alert('Room ID not ready yet.');
      try {
        await navigator.clipboard.writeText(text);
        alert('Copied Room ID to clipboard');
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        alert('Copied Room ID to clipboard');
      }
    });
  };

  private onSettingsClick = (): void => {
    console.log('⚙️ Opening settings...');
    alert('Settings panel coming soon!');
  };
}
