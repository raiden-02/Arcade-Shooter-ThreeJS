import type { Engine } from '../core/Engine';
import { GameState } from '../core/GameStateMachine';
import type { MultiplayerEngine } from '../core/MultiplayerEngine';

import { SettingsPanel } from './SettingsPanel';

export class MainMenu {
  container: HTMLDivElement;
  private engine: Engine;
  private settingsPanel?: SettingsPanel;

  constructor(engine: Engine, settingsPanel?: SettingsPanel) {
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
          
          <div class="multiplayer-status" id="connection-status" style="display: none;">
            <span id="status-text">Disconnected</span>
          </div>
          
          <div class="version-info">v0.1.0-alpha (Multiplayer)</div>
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
    const singleplayerBtn = this.container.querySelector('#singleplayer-btn') as HTMLButtonElement;
    const multiplayerBtn = this.container.querySelector('#multiplayer-btn') as HTMLButtonElement;
    const settingsBtn = this.container.querySelector('#settings-btn') as HTMLButtonElement;
    const quitBtn = this.container.querySelector('#quit-btn') as HTMLButtonElement;

    singleplayerBtn?.addEventListener('click', () => {
      console.log('Singleplayer button clicked - transitioning to Playing state');
      this.engine.stateMachine.transition(GameState.Playing);
    });

    multiplayerBtn?.addEventListener('click', async () => {
      console.log('Multiplayer button clicked');
      const multiplayerEngine = this.engine as MultiplayerEngine;

      // Check if it's actually a MultiplayerEngine
      if ('connectToServer' in multiplayerEngine) {
        this.updateConnectionStatus('Connecting...');
        const connected = await multiplayerEngine.connectToServer();

        if (connected) {
          this.updateConnectionStatus('Connected');
          // Join as player with default name
          multiplayerEngine.joinAsPlayer('Player_' + Date.now().toString().slice(-4));

          // First try to join existing rooms, if none exist, create one
          setTimeout(async () => {
            console.log('Looking for existing rooms...');

            // Set up one-time listener for room list response
            const handleRoomList = () => {
              const availableRooms = multiplayerEngine.getAvailableRooms();
              console.log('Received room list, total rooms:', availableRooms.length);

              // Filter for joinable rooms (not full and not active)
              const joinableRooms = availableRooms.filter(
                room => room.players.length < room.maxPlayers && !room.isActive,
              );
              console.log('Joinable rooms:', joinableRooms.length);

              if (joinableRooms.length > 0) {
                // Join the first available room
                const roomToJoin = joinableRooms[0];
                console.log(
                  'Joining existing room:',
                  roomToJoin.name,
                  `(${roomToJoin.players.length}/${roomToJoin.maxPlayers})`,
                );
                multiplayerEngine.joinRoom(roomToJoin.id);
              } else {
                // No rooms available, create a new one
                console.log('No joinable rooms found, creating new room...');
                multiplayerEngine.createRoom('Test Room', 4, 'deathmatch');
              }

              // Transition to Playing state to load the level
              console.log('Multiplayer setup complete - transitioning to Playing state');
              console.log(
                'Current game state before transition:',
                this.engine.stateMachine.getState(),
              );
              this.engine.stateMachine.transition(GameState.Playing);
              console.log(
                'Current game state after transition:',
                this.engine.stateMachine.getState(),
              );
            };

            // Listen for room list update (this will be triggered by the room list response)
            const networkManager = multiplayerEngine.getNetworkManager();

            const handleRoomListOnce = () => {
              // Remove the listener to make it a "once" behavior
              networkManager.off('room:list', handleRoomListOnce);
              handleRoomList();
            };

            networkManager.on('room:list', handleRoomListOnce);

            // Request room list
            multiplayerEngine.requestRoomList();

            // Backup timeout in case room list response never comes
            setTimeout(() => {
              networkManager.off('room:list', handleRoomListOnce);
              console.log('Room list request timed out, creating new room...');
              multiplayerEngine.createRoom('Test Room', 4, 'deathmatch');

              // Transition to Playing state
              console.log('Multiplayer setup complete (timeout) - transitioning to Playing state');
              this.engine.stateMachine.transition(GameState.Playing);
            }, 2000); // Increased timeout to 2 seconds
          }, 1000);
        } else {
          this.updateConnectionStatus('Connection Failed');
        }
      } else {
        alert('Multiplayer not available in this build');
      }
    });

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
      // For web games, we can't really quit, so maybe go back to a landing page
      if (confirm('Are you sure you want to quit?')) {
        window.close(); // May not work in all browsers
      }
    });
  }

  private updateConnectionStatus(status: string): void {
    const statusElement = this.container.querySelector('#connection-status') as HTMLDivElement;
    const statusText = this.container.querySelector('#status-text') as HTMLSpanElement;

    if (statusElement && statusText) {
      statusElement.style.display = 'block';
      statusText.textContent = status;

      // Color coding
      statusElement.className = 'multiplayer-status';
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
}
