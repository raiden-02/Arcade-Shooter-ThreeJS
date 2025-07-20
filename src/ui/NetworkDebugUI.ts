import type { MultiplayerEngine } from '../core/MultiplayerEngine';
import { ConnectionState } from '../core/NetworkTypes';

/**
 * Debug UI overlay for multiplayer networking information
 */
export class NetworkDebugUI {
  private container!: HTMLDivElement;
  private engine: MultiplayerEngine;
  private isVisible: boolean = false;
  private updateInterval: NodeJS.Timeout | null = null;

  constructor(engine: MultiplayerEngine) {
    this.engine = engine;
    this.createDebugUI();
    this.setupKeyboardShortcut();
  }

  private createDebugUI(): void {
    this.container = document.createElement('div');
    this.container.id = 'network-debug-ui';
    this.container.className = 'network-debug-overlay';
    this.container.style.display = 'none';

    this.container.innerHTML = `
      <div class="debug-header">
        <h3>Network Debug Info</h3>
        <button id="close-debug" class="debug-close">×</button>
      </div>
      <div class="debug-content">
        <div class="debug-section">
          <h4>Connection</h4>
          <div id="connection-info">
            <div>Status: <span id="connection-state">Unknown</span></div>
            <div>Player ID: <span id="player-id">None</span></div>
            <div>Room ID: <span id="room-id">None</span></div>
          </div>
        </div>
        
        <div class="debug-section">
          <h4>Local Player</h4>
          <div id="local-player-info">
            <div>Name: <span id="local-name">None</span></div>
            <div>Position: <span id="local-position">N/A</span></div>
            <div>Health: <span id="local-health">N/A</span></div>
          </div>
        </div>
        
        <div class="debug-section">
          <h4>Remote Players</h4>
          <div id="remote-players-list">
            No remote players
          </div>
        </div>
        
        <div class="debug-section">
          <h4>Room Info</h4>
          <div id="room-info">
            <div>Name: <span id="room-name">None</span></div>
            <div>Players: <span id="room-players">0/0</span></div>
            <div>Mode: <span id="room-mode">None</span></div>
          </div>
        </div>
        
        <div class="debug-actions">
          <button id="test-connection" class="debug-btn">Test Connection</button>
          <button id="create-test-room" class="debug-btn">Create Test Room</button>
          <button id="leave-room" class="debug-btn">Leave Room</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.container);
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // Close button
    const closeBtn = this.container.querySelector('#close-debug') as HTMLButtonElement;
    closeBtn?.addEventListener('click', () => this.hide());

    // Test connection button
    const testConnectionBtn = this.container.querySelector('#test-connection') as HTMLButtonElement;
    testConnectionBtn?.addEventListener('click', async () => {
      console.log('Testing connection...');
      await this.engine.connectToServer();
    });

    // Create test room button
    const createRoomBtn = this.container.querySelector('#create-test-room') as HTMLButtonElement;
    createRoomBtn?.addEventListener('click', () => {
      const roomName = `TestRoom_${Date.now().toString().slice(-6)}`;
      console.log('Creating test room:', roomName);
      this.engine.createRoom(roomName, 4, 'deathmatch');
    });

    // Leave room button
    const leaveRoomBtn = this.container.querySelector('#leave-room') as HTMLButtonElement;
    leaveRoomBtn?.addEventListener('click', () => {
      console.log('Leaving room...');
      this.engine.leaveRoom();
    });
  }

  private setupKeyboardShortcut(): void {
    document.addEventListener('keydown', event => {
      // F12 to toggle debug UI
      if (event.key === 'F12') {
        event.preventDefault();
        this.toggle();
      }
    });
  }

  public show(): void {
    this.isVisible = true;
    this.container.style.display = 'block';

    // Start updating the UI
    this.updateInterval = setInterval(() => {
      this.updateDebugInfo();
    }, 100);
  }

  public hide(): void {
    this.isVisible = false;
    this.container.style.display = 'none';

    // Stop updating the UI
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

  private updateDebugInfo(): void {
    const networkManager = this.engine.getNetworkManager();
    const localPlayer = this.engine.getLocalPlayer();
    const remotePlayers = this.engine.getRemotePlayers();
    const currentRoom = this.engine.getCurrentRoom();

    // Update connection info
    this.updateElement(
      '#connection-state',
      this.getConnectionStateText(networkManager.getConnectionState()),
    );
    this.updateElement('#player-id', networkManager.getPlayerId() || 'None');
    this.updateElement('#room-id', networkManager.getCurrentRoom() || 'None');

    // Update local player info
    if (localPlayer) {
      this.updateElement('#local-name', localPlayer.name);
      this.updateElement(
        '#local-position',
        `${localPlayer.position.x.toFixed(1)}, ${localPlayer.position.y.toFixed(1)}, ${localPlayer.position.z.toFixed(1)}`,
      );
      this.updateElement('#local-health', `${localPlayer.health}`);
    } else {
      this.updateElement('#local-name', 'None');
      this.updateElement('#local-position', 'N/A');
      this.updateElement('#local-health', 'N/A');
    }

    // Update remote players list
    const remotePlayersList = this.container.querySelector(
      '#remote-players-list',
    ) as HTMLDivElement;
    if (remotePlayers.size === 0) {
      remotePlayersList.innerHTML = 'No remote players';
    } else {
      const playerList = Array.from(remotePlayers.values())
        .map(player => `<div class="remote-player">${player.name} (${player.health} HP)</div>`)
        .join('');
      remotePlayersList.innerHTML = playerList;
    }

    // Update room info
    if (currentRoom) {
      this.updateElement('#room-name', currentRoom.name);
      this.updateElement(
        '#room-players',
        `${currentRoom.players.length}/${currentRoom.maxPlayers}`,
      );
      this.updateElement('#room-mode', currentRoom.gameMode);
    } else {
      this.updateElement('#room-name', 'None');
      this.updateElement('#room-players', '0/0');
      this.updateElement('#room-mode', 'None');
    }
  }

  private updateElement(selector: string, content: string): void {
    const element = this.container.querySelector(selector);
    if (element) {
      element.textContent = content;
    }
  }

  private getConnectionStateText(state: ConnectionState): string {
    switch (state) {
      case ConnectionState.CONNECTED:
        return '🟢 Connected';
      case ConnectionState.CONNECTING:
        return '🟡 Connecting...';
      case ConnectionState.RECONNECTING:
        return '🟡 Reconnecting...';
      case ConnectionState.ERROR:
        return '🔴 Error';
      case ConnectionState.DISCONNECTED:
      default:
        return '⚪ Disconnected';
    }
  }
}
