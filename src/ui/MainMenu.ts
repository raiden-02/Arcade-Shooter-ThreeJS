import { GameState } from '../core/GameStateMachine';
import type { MultiplayerEngine } from '../core/MultiplayerEngine';
import type { RoomState } from '../core/NetworkTypes';
import type { IGameEngine } from '../interfaces/IGameEngine';

import { SettingsPanel } from './SettingsPanel';

export class MainMenu {
  container: HTMLDivElement;
  private engine: IGameEngine;
  private settingsPanel?: SettingsPanel;

  constructor(engine: IGameEngine, settingsPanel?: SettingsPanel) {
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
          
          <!-- Multiplayer Session Panel (hidden by default) -->
          <div class="multiplayer-panel" id="multiplayer-panel" style="display: none;">
            <h3>Multiplayer Sessions</h3>
            <div class="session-options">
              <div class="session-section">
                <h4>Create Session</h4>
                <input type="text" id="session-name" placeholder="Session Name" value="My Game Session">
                <select id="max-players">
                  <option value="2">2 Players</option>
                  <option value="4" selected>4 Players</option>
                  <option value="6">6 Players</option>
                  <option value="8">8 Players</option>
                </select>
                <button id="create-session-btn" class="menu-btn">CREATE SESSION</button>
              </div>
              
              <div class="session-section">
                <h4>Join Session</h4>
                <input type="text" id="session-id" placeholder="Session ID">
                <button id="join-session-btn" class="menu-btn">JOIN SESSION</button>
              </div>
              
              <div class="session-section">
                <h4>Browse Sessions</h4>
                <div id="session-list">
                  <p>Loading sessions...</p>
                </div>
                <button id="refresh-sessions-btn" class="menu-btn secondary">REFRESH</button>
              </div>
            </div>
            
            <button id="back-to-menu-btn" class="menu-btn secondary">BACK TO MENU</button>
          </div>
          
          <!-- Connection Status -->
          <div class="connection-status" id="connection-status" style="display: none;">
            <span id="status-text">Disconnected</span>
          </div>
          
          <!-- Session ID Display -->
          <div class="session-id-display" id="session-id-display" style="display: none;">
            <div class="session-id-content">
              <label>Session ID:</label>
              <div class="session-id-value" id="session-id-value">-</div>
              <button id="copy-session-id" class="copy-btn">COPY</button>
            </div>
          </div>
          
          <div class="version-info">v0.1.0-alpha (Multiplayer Native)</div>
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
    // Get UI elements
    const singleplayerBtn = this.container.querySelector('#singleplayer-btn') as HTMLButtonElement;
    const multiplayerBtn = this.container.querySelector('#multiplayer-btn') as HTMLButtonElement;
    const settingsBtn = this.container.querySelector('#settings-btn') as HTMLButtonElement;
    const quitBtn = this.container.querySelector('#quit-btn') as HTMLButtonElement;

    // Multiplayer panel elements
    const backToMenuBtn = this.container.querySelector('#back-to-menu-btn') as HTMLButtonElement;
    const createSessionBtn = this.container.querySelector(
      '#create-session-btn',
    ) as HTMLButtonElement;
    const joinSessionBtn = this.container.querySelector('#join-session-btn') as HTMLButtonElement;
    const refreshSessionsBtn = this.container.querySelector(
      '#refresh-sessions-btn',
    ) as HTMLButtonElement;
    const copySessionIdBtn = this.container.querySelector('#copy-session-id') as HTMLButtonElement;

    // === SINGLEPLAYER: Local game instance ===
    singleplayerBtn?.addEventListener('click', () => {
      console.log('Starting singleplayer game...');
      this.engine.transitionToState(GameState.Playing);
    });

    // === MULTIPLAYER: Show session panel ===
    multiplayerBtn?.addEventListener('click', () => {
      console.log('Opening multiplayer panel...');
      this.showMultiplayerPanel();
    });

    // === MULTIPLAYER PANEL ACTIONS ===

    // Back to main menu
    backToMenuBtn?.addEventListener('click', () => {
      this.hideMultiplayerPanel();
    });

    // Create session
    createSessionBtn?.addEventListener('click', async () => {
      const sessionName = (this.container.querySelector('#session-name') as HTMLInputElement).value;
      const maxPlayers = parseInt(
        (this.container.querySelector('#max-players') as HTMLSelectElement).value,
      );

      console.log(`Creating session: ${sessionName} (${maxPlayers} players)`);
      await this.createMultiplayerSession(sessionName, maxPlayers);
    });

    // Join session by ID
    joinSessionBtn?.addEventListener('click', async () => {
      const sessionId = (
        this.container.querySelector('#session-id') as HTMLInputElement
      ).value.trim();

      if (!sessionId) {
        alert('Please enter a Session ID');
        return;
      }

      console.log(`Joining session: ${sessionId}`);
      await this.joinMultiplayerSession(sessionId);
    });

    // Refresh session list
    refreshSessionsBtn?.addEventListener('click', () => {
      console.log('Refreshing session list...');
      this.refreshSessionList();
    });

    // Copy Session ID
    copySessionIdBtn?.addEventListener('click', () => {
      const sessionIdValue = this.container.querySelector('#session-id-value') as HTMLDivElement;
      const sessionId = sessionIdValue.textContent || '';

      if (sessionId && sessionId !== '-') {
        navigator.clipboard
          .writeText(sessionId)
          .then(() => {
            // Temporary feedback
            const originalText = copySessionIdBtn.textContent;
            copySessionIdBtn.textContent = 'COPIED!';
            setTimeout(() => {
              copySessionIdBtn.textContent = originalText;
            }, 1000);
          })
          .catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = sessionId;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            const originalText = copySessionIdBtn.textContent;
            copySessionIdBtn.textContent = 'COPIED!';
            setTimeout(() => {
              copySessionIdBtn.textContent = originalText;
            }, 1000);
          });
      }
    });

    // === OTHER BUTTONS ===

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
      if (confirm('Are you sure you want to quit?')) {
        window.close();
      }
    });
  }

  // === MULTIPLAYER PANEL METHODS ===

  private showMultiplayerPanel(): void {
    const buttons = this.container.querySelector('.main-menu-buttons') as HTMLDivElement;
    const panel = this.container.querySelector('#multiplayer-panel') as HTMLDivElement;

    buttons.style.display = 'none';
    panel.style.display = 'block';

    // Auto-refresh session list when panel opens
    this.refreshSessionList();
  }

  private hideMultiplayerPanel(): void {
    const buttons = this.container.querySelector('.main-menu-buttons') as HTMLDivElement;
    const panel = this.container.querySelector('#multiplayer-panel') as HTMLDivElement;

    buttons.style.display = 'block';
    panel.style.display = 'none';

    // Hide session ID when going back to main menu
    this.hideSessionId();
  }

  private async createMultiplayerSession(sessionName: string, maxPlayers: number): Promise<void> {
    const multiplayerEngine = this.engine as MultiplayerEngine;

    if (!('connectToServer' in multiplayerEngine)) {
      alert('Multiplayer not available in this build');
      return;
    }

    try {
      this.updateConnectionStatus('Connecting...');

      // Connect to server
      const connected = await multiplayerEngine.connectToServer();
      if (!connected) {
        this.updateConnectionStatus('Connection Failed');
        alert('Could not connect to server. Make sure the server is running.');
        return;
      }

      this.updateConnectionStatus('Connected');

      // Join as player
      const playerName = `Player_${Date.now().toString().slice(-6)}`;
      multiplayerEngine.joinAsPlayer(playerName);

      // Set up one-time listener for room creation
      const networkManager = multiplayerEngine.getNetworkManager();

      const onRoomCreated = (room: RoomState) => {
        console.log('Room created event received:', room);
        this.displaySessionId(room.id);
        this.updateConnectionStatus(`Session Created: ${sessionName}`);

        // Remove the listener after use
        networkManager.off('room:created', onRoomCreated); // Start game after short delay
        setTimeout(() => {
          console.log('Starting multiplayer game...');
          this.engine.transitionToState(GameState.Playing);
        }, 1000);
      };

      // Add the listener before creating the room
      networkManager.on('room:created', onRoomCreated);

      // Create session
      multiplayerEngine.createRoom(sessionName, maxPlayers, 'deathmatch');

      console.log(`Creating session: ${sessionName} with ${maxPlayers} players`);
    } catch (error) {
      console.error('Failed to create session:', error);
      this.updateConnectionStatus('Failed to create session');
      alert('Failed to create session. Please try again.');
    }
  }

  private async joinMultiplayerSession(sessionId: string): Promise<void> {
    const multiplayerEngine = this.engine as MultiplayerEngine;

    if (!('connectToServer' in multiplayerEngine)) {
      alert('Multiplayer not available in this build');
      return;
    }

    try {
      this.updateConnectionStatus('Connecting...');

      // Connect to server
      const connected = await multiplayerEngine.connectToServer();
      if (!connected) {
        this.updateConnectionStatus('Connection Failed');
        alert('Could not connect to server. Make sure the server is running.');
        return;
      }

      this.updateConnectionStatus('Connected');

      // Join as player
      const playerName = `Player_${Date.now().toString().slice(-6)}`;
      multiplayerEngine.joinAsPlayer(playerName);

      // Join session
      multiplayerEngine.joinRoom(sessionId);

      console.log(`Joining session: ${sessionId}`);
      this.updateConnectionStatus(`Joining Session: ${sessionId}`);

      // Start game
      setTimeout(() => {
        console.log('Starting multiplayer game...');
        this.engine.transitionToState(GameState.Playing);
      }, 1000);
    } catch (error) {
      console.error('Failed to join session:', error);
      this.updateConnectionStatus('Failed to join session');
      alert('Failed to join session. Please check the Session ID.');
    }
  }

  private refreshSessionList(): void {
    const multiplayerEngine = this.engine as MultiplayerEngine;
    const sessionList = this.container.querySelector('#session-list') as HTMLDivElement;

    if (!('connectToServer' in multiplayerEngine)) {
      sessionList.innerHTML = '<p>Multiplayer not available</p>';
      return;
    }

    sessionList.innerHTML = '<p>Loading sessions...</p>';

    // This would request session list from server
    // For now, show placeholder
    setTimeout(() => {
      sessionList.innerHTML = `
        <div class="session-item">
          <div class="session-info">
            <strong>Example Session</strong><br>
            <small>2/4 players • deathmatch</small>
          </div>
          <button class="join-btn" onclick="alert('Feature coming soon!')">JOIN</button>
        </div>
        <p><small>Connect to server to see live sessions</small></p>
      `;
    }, 500);
  }

  private updateConnectionStatus(status: string): void {
    const statusElement = this.container.querySelector('#connection-status') as HTMLDivElement;
    const statusText = this.container.querySelector('#status-text') as HTMLSpanElement;

    if (statusElement && statusText) {
      statusElement.style.display = 'block';
      statusText.textContent = status;

      // Color coding
      statusElement.className = 'connection-status';
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

  private displaySessionId(sessionId: string): void {
    const sessionIdDisplay = this.container.querySelector('#session-id-display') as HTMLDivElement;
    const sessionIdValue = this.container.querySelector('#session-id-value') as HTMLDivElement;

    if (sessionIdDisplay && sessionIdValue) {
      sessionIdValue.textContent = sessionId;
      sessionIdDisplay.style.display = 'block';
      console.log(`Session ID displayed: ${sessionId}`);
    }
  }

  private hideSessionId(): void {
    const sessionIdDisplay = this.container.querySelector('#session-id-display') as HTMLDivElement;
    const sessionIdValue = this.container.querySelector('#session-id-value') as HTMLDivElement;

    if (sessionIdDisplay && sessionIdValue) {
      sessionIdValue.textContent = '-';
      sessionIdDisplay.style.display = 'none';
    }
  }
}
