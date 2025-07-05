// src/ui/screens/MainMenuScreen.ts
import { Engine } from '../../core/Engine';
import { GameState } from '../../core/GameStateMachine';
import { SettingsService } from '../../core/SettingsService';
import { UIScreen } from '../core/UIScreen';

/**
 * Main menu screen with cyberpunk aesthetics.
 */
export class MainMenuScreen extends UIScreen {
  constructor(engine: Engine, settingsService: SettingsService) {
    super('main-menu', GameState.MainMenu, 'main-menu-screen');
    // Store references if needed later
    void engine;
    void settingsService;
  }

  protected setupScreen(): void {
    this.element.innerHTML = `
      <div class="main-menu-container">
        <div class="main-menu-header">
          <h1 class="game-title">CYBER RUNNER</h1>
          <div class="game-subtitle">Fast-Paced Cyberpunk FPS</div>
        </div>
        
        <nav class="main-menu-nav">
          <button id="play-btn" class="menu-btn primary">PLAY</button>
          <button id="settings-btn" class="menu-btn">SETTINGS</button>
          <button id="profile-btn" class="menu-btn">PROFILE</button>
          <button id="extras-btn" class="menu-btn">EXTRAS</button>
          <button id="quit-btn" class="menu-btn">QUIT</button>
        </nav>
        
        <div class="main-menu-footer">
          <div class="version-info">v0.1.0-alpha</div>
        </div>
        
        <!-- Background effects -->
        <div class="bg-grid"></div>
        <div class="bg-particles"></div>
      </div>
    `;

    this.setupEventListeners();
  }

  protected setupEventListeners(): void {
    super.setupEventListeners();
    // Don't attach events here - will be done in show() method
  }

  private attachButtonEvents(): void {
    console.log('attachButtonEvents called, element:', this.element);
    console.log('element innerHTML length:', this.element.innerHTML.length);

    // Debug: log all buttons found
    const allButtons = this.element.querySelectorAll('button');
    console.log('All buttons found:', allButtons.length, allButtons);

    // Play button
    const playBtn = this.element.querySelector('#play-btn') as HTMLButtonElement;
    console.log('Play button found:', playBtn);
    console.log('Play button by ID specifically:', document.getElementById('play-btn'));

    if (playBtn) {
      console.log('Adding click listener to play button');
      playBtn.addEventListener('click', event => {
        console.log('Play button clicked! Event:', event);
        console.log('Event target:', event.target);
        console.log('Event currentTarget:', event.currentTarget);
        this.emit('navigateToPlay');
        // For now, go directly to game
        document.dispatchEvent(new CustomEvent('ui:startGame'));
      });

      // Also add a mousedown event to test if ANY events are working
      playBtn.addEventListener('mousedown', () => {
        console.log('Play button mousedown detected!');
      });

      // Test with a simple click trigger
      console.log('Button style:', window.getComputedStyle(playBtn));
      console.log('Button pointer-events:', window.getComputedStyle(playBtn).pointerEvents);
    } else {
      console.error('Play button not found! DOM might not be ready or ID mismatch');
    }

    // Settings button
    const settingsBtn = this.element.querySelector('#settings-btn') as HTMLButtonElement;
    settingsBtn?.addEventListener('click', () => {
      this.showSettings();
    });

    // Profile button
    const profileBtn = this.element.querySelector('#profile-btn') as HTMLButtonElement;
    profileBtn?.addEventListener('click', () => {
      this.showProfile();
    });

    // Extras button
    const extrasBtn = this.element.querySelector('#extras-btn') as HTMLButtonElement;
    extrasBtn?.addEventListener('click', () => {
      this.showExtras();
    });

    // Quit button
    const quitBtn = this.element.querySelector('#quit-btn') as HTMLButtonElement;
    quitBtn?.addEventListener('click', () => {
      this.quitGame();
    });
  }

  public onEnter(): void {
    console.log('Entering Main Menu');
    // Start background animations, music, etc.
  }

  public onExit(): void {
    console.log('Exiting Main Menu');
    // Clean up animations, fade out music, etc.
  }

  public onKeyDown(event: KeyboardEvent): boolean {
    switch (event.code) {
      case 'Enter':
      case 'Space':
        // Start game on Enter/Space
        document.dispatchEvent(new CustomEvent('ui:startGame'));
        return true;
      case 'Escape':
        // Quit on Escape
        this.quitGame();
        return true;
    }
    return false;
  }

  private showSettings(): void {
    // TODO: Show settings overlay or navigate to settings screen
    console.log('Show settings');
  }

  private showProfile(): void {
    // TODO: Show profile screen
    console.log('Show profile');
  }

  private showExtras(): void {
    // TODO: Show extras screen
    console.log('Show extras');
  }

  private quitGame(): void {
    if (confirm('Are you sure you want to quit?')) {
      window.close();
    }
  }

  public async show(animate: boolean = true): Promise<void> {
    await super.show(animate);
    // Re-attach events when screen is actually shown to ensure DOM is ready
    this.attachButtonEvents();
  }
}
