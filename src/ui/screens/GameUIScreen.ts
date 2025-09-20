// src/ui/screens/GameUIScreen.ts
import { Engine } from '../../core/Engine';
import { GameState } from '../../core/GameStateMachine';
import { SettingsService } from '../../core/SettingsService';
import { WeaponOptions } from '../../core/Weapon';
import { UIScreen } from '../core/UIScreen';

/**
 * In-game UI screen with HUD elements.
 */
export class GameUIScreen extends UIScreen {
  // HUD elements
  private crosshair!: HTMLElement;
  private healthBar!: HTMLElement;
  private ammoDisplay!: HTMLElement;
  private hitMarker!: HTMLElement;

  constructor(engine: Engine, settingsService: SettingsService) {
    super('game-ui', GameState.Playing, 'game-ui-screen');
    // Store references if needed later
    void engine;
    void settingsService;
  }

  protected setupScreen(): void {
    this.element.innerHTML = `
      <div class="game-hud">
        <!-- Crosshair -->
        <div id="crosshair" class="crosshair">
          <div class="crosshair-dot"></div>
          <div class="crosshair-lines">
            <div class="crosshair-line top"></div>
            <div class="crosshair-line right"></div>
            <div class="crosshair-line bottom"></div>
            <div class="crosshair-line left"></div>
          </div>
        </div>
        
        <!-- Health display -->
        <div id="health-display" class="health-display">
          <div class="health-label">HEALTH</div>
          <div class="health-bar-container">
            <div class="health-bar" style="width: 100%"></div>
          </div>
          <div class="health-text">100</div>
        </div>
        
        <!-- Ammo display -->
        <div id="ammo-display" class="ammo-display">
          <div class="ammo-current">30</div>
          <div class="ammo-separator">/</div>
          <div class="ammo-total">120</div>
          <div class="ammo-label">AMMO</div>
        </div>
        
        <!-- Weapon info -->
        <div id="weapon-info" class="weapon-info">
          <div class="weapon-name">Assault Rifle</div>
          <div class="weapon-stats">
            <div class="stat">DMG: 20</div>
            <div class="stat">RPM: 600</div>
          </div>
        </div>
        
        <!-- Hit marker -->
        <div id="hit-marker" class="hit-marker">
          <div class="hit-marker-cross">+</div>
        </div>
        
        <!-- Mini objectives or notifications -->
        <div id="objectives" class="objectives">
          <div class="objective-item">Eliminate all enemies</div>
        </div>
      </div>
    `;

    // Cache element references
    this.crosshair = this.element.querySelector('#crosshair') as HTMLElement;
    this.healthBar = this.element.querySelector('.health-bar') as HTMLElement;
    this.ammoDisplay = this.element.querySelector('#ammo-display') as HTMLElement;
    this.hitMarker = this.element.querySelector('#hit-marker') as HTMLElement;

    this.setupEventListeners();
  }

  protected setupEventListeners(): void {
    super.setupEventListeners();
    // Game UI doesn't need click handlers, mostly data-driven updates
  }

  public onEnter(): void {
    console.log('Entering Game UI');
    // Hide cursor, enable pointer lock, etc.
    document.body.style.cursor = 'none';
  }

  public onExit(): void {
    console.log('Exiting Game UI');
    document.body.style.cursor = 'default';
  }

  public onKeyDown(event: KeyboardEvent): boolean {
    switch (event.code) {
      case 'Escape':
        // Pause game
        document.dispatchEvent(new CustomEvent('ui:pauseGame'));
        return true;
      case 'Tab':
        // Show scoreboard or objectives
        event.preventDefault();
        return true;
    }
    return false;
  }

  /**
   * Update health display.
   */
  public updateHealth(current: number, max: number): void {
    const percentage = Math.max(0, Math.min(100, (current / max) * 100));

    if (this.healthBar) {
      this.healthBar.style.width = `${percentage}%`;

      // Change color based on health level
      if (percentage > 60) {
        this.healthBar.className = 'health-bar health-good';
      } else if (percentage > 30) {
        this.healthBar.className = 'health-bar health-warning';
      } else {
        this.healthBar.className = 'health-bar health-critical';
      }
    }

    const healthText = this.element.querySelector('.health-text');
    if (healthText) {
      healthText.textContent = Math.ceil(current).toString();
    }
  }

  /**
   * Update ammo display.
   */
  public updateAmmo(current: number, total: number, reloading: boolean = false): void {
    const currentAmmo = this.element.querySelector('.ammo-current');
    const totalAmmo = this.element.querySelector('.ammo-total');
    const ammoLabel = this.element.querySelector('.ammo-label');

    if (currentAmmo) {
      currentAmmo.textContent = current.toString();
    }

    if (totalAmmo) {
      totalAmmo.textContent = total.toString();
    }

    if (ammoLabel) {
      ammoLabel.textContent = reloading ? 'RELOADING...' : 'AMMO';
    }

    // Add visual feedback for low ammo
    if (this.ammoDisplay) {
      if (current <= 5 && !reloading) {
        this.ammoDisplay.classList.add('low-ammo');
      } else {
        this.ammoDisplay.classList.remove('low-ammo');
      }
    }
  }

  /**
   * Update weapon information display.
   */
  public updateWeaponInfo(name: string, options: WeaponOptions): void {
    const weaponName = this.element.querySelector('.weapon-name');
    const weaponStats = this.element.querySelector('.weapon-stats');

    if (weaponName) {
      weaponName.textContent = name;
    }

    if (weaponStats) {
      weaponStats.innerHTML = `
        <div class="stat">DMG: ${options.damage}</div>
        <div class="stat">RPM: ${Math.round(options.fireRate * 60)}</div>
      `;
    }

    // Update crosshair style based on weapon
    if (this.crosshair) {
      const sanitizedName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      this.crosshair.className = `crosshair weapon-${sanitizedName}`;
    }
  }

  /**
   * Show hit marker animation.
   */
  public showHitMarker(): void {
    if (this.hitMarker) {
      this.hitMarker.classList.remove('show');
      // Force reflow
      void this.hitMarker.offsetHeight;
      this.hitMarker.classList.add('show');

      // Remove after animation
      setTimeout(() => {
        this.hitMarker.classList.remove('show');
      }, 200);
    }
  }

  /**
   * Update crosshair spread based on weapon bloom.
   */
  public updateCrosshairSpread(spreadDegrees: number): void {
    if (this.crosshair) {
      const spreadPixels = Math.max(2, spreadDegrees * 4); // Convert to pixels
      const lines = this.crosshair.querySelectorAll('.crosshair-line');

      lines.forEach(line => {
        (line as HTMLElement).style.transform = `translate(${spreadPixels}px)`;
      });
    }
  }
}
