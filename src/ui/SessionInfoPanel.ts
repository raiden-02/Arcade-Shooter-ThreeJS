import type { MultiplayerEngine } from '../core/MultiplayerEngine';
import { ConnectionState } from '../core/NetworkTypes';

/**
 * In-game session information panel that displays session ID and connection status
 * during gameplay for easy sharing with other players
 */
export class SessionInfoPanel {
  private container!: HTMLDivElement;
  private engine: MultiplayerEngine;
  private isVisible: boolean = false;
  private updateInterval: NodeJS.Timeout | null = null;

  constructor(engine: MultiplayerEngine) {
    this.engine = engine;
    this.createPanel();
    this.setupKeyboardShortcut();
  }

  private createPanel(): void {
    this.container = document.createElement('div');
    this.container.id = 'session-info-panel';
    this.container.className = 'session-info-panel';
    this.container.style.display = 'none';

    this.container.innerHTML = `
      <div class="session-info-header">
        <h4>Session Information</h4>
        <button id="close-session-info" class="close-btn">×</button>
      </div>
      <div class="session-info-content">
        <div class="info-row">
          <label>Session ID:</label>
          <div class="session-id-display">
            <span id="current-session-id">-</span>
            <button id="copy-session-id-game" class="copy-btn-small">COPY</button>
          </div>
        </div>
        
        <div class="info-row">
          <label>Status:</label>
          <span id="session-status" class="status-indicator">Disconnected</span>
        </div>
        
        <div class="info-row">
          <label>Players:</label>
          <span id="session-player-count">0/0</span>
        </div>
        
        <div class="info-row">
          <label>Room:</label>
          <span id="session-room-name">None</span>
        </div>
        
        <div class="player-list">
          <h5>Connected Players:</h5>
          <div id="session-players-list">
            <p class="no-players">No other players</p>
          </div>
        </div>
        
        <div class="session-actions">
          <button id="refresh-session" class="action-btn">REFRESH</button>
          <button id="leave-session-game" class="action-btn danger">LEAVE SESSION</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.container);
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // Close button
    const closeBtn = this.container.querySelector('#close-session-info') as HTMLButtonElement;
    closeBtn?.addEventListener('click', () => this.hide());

    // Copy Session ID button
    const copyBtn = this.container.querySelector('#copy-session-id-game') as HTMLButtonElement;
    copyBtn?.addEventListener('click', () => {
      const sessionIdElement = this.container.querySelector(
        '#current-session-id',
      ) as HTMLSpanElement;
      const sessionId = sessionIdElement.textContent || '';

      if (sessionId && sessionId !== '-') {
        this.copyToClipboard(sessionId, copyBtn);
      }
    });

    // Refresh button
    const refreshBtn = this.container.querySelector('#refresh-session') as HTMLButtonElement;
    refreshBtn?.addEventListener('click', () => {
      this.updateSessionInfo();
    });

    // Leave session button
    const leaveBtn = this.container.querySelector('#leave-session-game') as HTMLButtonElement;
    leaveBtn?.addEventListener('click', () => {
      if (
        confirm(
          'Are you sure you want to leave the session? This will disconnect you from the game.',
        )
      ) {
        this.engine.leaveRoom();
        this.hide();
      }
    });
  }

  private setupKeyboardShortcut(): void {
    document.addEventListener('keydown', event => {
      // F11 to toggle session info panel during gameplay
      if (event.key === 'F11') {
        event.preventDefault();
        this.toggle();
      }
    });
  }

  private copyToClipboard(text: string, button: HTMLButtonElement): void {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        const originalText = button.textContent;
        button.textContent = 'COPIED!';
        button.style.background = '#4CAF50';
        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = '';
        }, 1500);
      })
      .catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        const originalText = button.textContent;
        button.textContent = 'COPIED!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 1500);
      });
  }

  public show(): void {
    this.isVisible = true;
    this.container.style.display = 'block';
    this.updateSessionInfo();

    // Start periodic updates
    this.updateInterval = setInterval(() => {
      this.updateSessionInfo();
    }, 2000); // Update every 2 seconds
  }

  public hide(): void {
    this.isVisible = false;
    this.container.style.display = 'none';

    // Stop periodic updates
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  public toggle(): void {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  private updateSessionInfo(): void {
    const currentRoom = this.engine.getCurrentRoom();
    const remotePlayers = this.engine.getRemotePlayers();
    const localPlayer = this.engine.getLocalPlayer();
    const networkManager = this.engine.getNetworkManager();

    // Update session ID
    const sessionIdElement = this.container.querySelector('#current-session-id') as HTMLSpanElement;
    sessionIdElement.textContent = currentRoom?.id || '-';

    // Update status
    const statusElement = this.container.querySelector('#session-status') as HTMLSpanElement;
    const connectionState = networkManager.getConnectionState();
    statusElement.textContent = this.getStatusText(connectionState);
    statusElement.className = `status-indicator ${this.getStatusClass(connectionState)}`;

    // Update player count
    const playerCountElement = this.container.querySelector(
      '#session-player-count',
    ) as HTMLSpanElement;
    if (currentRoom) {
      const totalPlayers = remotePlayers.size + (localPlayer ? 1 : 0);
      playerCountElement.textContent = `${totalPlayers}/${currentRoom.maxPlayers}`;
    } else {
      playerCountElement.textContent = '0/0';
    }

    // Update room name
    const roomNameElement = this.container.querySelector('#session-room-name') as HTMLSpanElement;
    roomNameElement.textContent = currentRoom?.name || 'None';

    // Update player list
    const playersListElement = this.container.querySelector(
      '#session-players-list',
    ) as HTMLDivElement;
    if (remotePlayers.size === 0) {
      playersListElement.innerHTML = '<p class="no-players">No other players</p>';
    } else {
      const playerList = Array.from(remotePlayers.values())
        .map(
          player => `
          <div class="player-item">
            <span class="player-name">${player.name}</span>
            <span class="player-health">${player.health} HP</span>
            <span class="player-status ${player.isAlive ? 'alive' : 'dead'}">${player.isAlive ? 'Alive' : 'Dead'}</span>
          </div>
        `,
        )
        .join('');
      playersListElement.innerHTML = playerList;
    }

    // If local player exists, show their info too
    if (localPlayer) {
      const localPlayerInfo = `
        <div class="player-item local-player">
          <span class="player-name">${localPlayer.name} (You)</span>
          <span class="player-health">${localPlayer.health} HP</span>
          <span class="player-status ${localPlayer.isAlive ? 'alive' : 'dead'}">${localPlayer.isAlive ? 'Alive' : 'Dead'}</span>
        </div>
      `;
      playersListElement.innerHTML = localPlayerInfo + playersListElement.innerHTML;
    }
  }

  private getStatusText(state: ConnectionState): string {
    switch (state) {
      case ConnectionState.CONNECTED:
        return 'Connected';
      case ConnectionState.CONNECTING:
        return 'Connecting...';
      case ConnectionState.RECONNECTING:
        return 'Reconnecting...';
      case ConnectionState.ERROR:
        return 'Connection Error';
      case ConnectionState.DISCONNECTED:
      default:
        return 'Disconnected';
    }
  }

  private getStatusClass(state: ConnectionState): string {
    switch (state) {
      case ConnectionState.CONNECTED:
        return 'connected';
      case ConnectionState.CONNECTING:
      case ConnectionState.RECONNECTING:
        return 'connecting';
      case ConnectionState.ERROR:
        return 'error';
      case ConnectionState.DISCONNECTED:
      default:
        return 'disconnected';
    }
  }

  /**
   * Show session info automatically when joining a multiplayer session
   */
  public showSessionJoined(sessionId: string, roomName: string): void {
    console.log(`Joined session: ${sessionId} (${roomName})`);
    this.show();

    // Highlight the session ID briefly
    const sessionIdElement = this.container.querySelector('#current-session-id') as HTMLSpanElement;
    sessionIdElement.style.animation = 'highlight 2s ease-in-out';

    setTimeout(() => {
      sessionIdElement.style.animation = '';
    }, 2000);
  }
}
