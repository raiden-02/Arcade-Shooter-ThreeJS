import { WeaponOptions } from '../core/Weapon';

import { HUD } from './HUD';
import { PauseMenu } from './PauseMenu';

export class UIManager {
  pauseMenu: PauseMenu;
  hud: HUD;
  weaponInfo: HTMLDivElement;
  // Health info display
  healthInfo: HTMLDivElement;
  /** Ammo info display (current magazine count / reload status) */
  ammoInfo: HTMLDivElement;

  constructor() {
    this.pauseMenu = new PauseMenu();
    this.hud = new HUD();
    // Weapon info display
    this.weaponInfo = document.createElement('div');
    this.weaponInfo.id = 'weapon-info';
    document.body.appendChild(this.weaponInfo);
    // Health info display
    this.healthInfo = document.createElement('div');
    this.healthInfo.id = 'health-info';
    document.body.appendChild(this.healthInfo);
    // Ammo info display
    this.ammoInfo = document.createElement('div');
    this.ammoInfo.id = 'ammo-info';
    document.body.appendChild(this.ammoInfo);
  }

  showPause() {
    this.pauseMenu.show();
    this.hud.hide();
    this.weaponInfo.style.display = 'none';
    this.healthInfo.style.display = 'none';
    this.ammoInfo.style.display = 'none';
  }

  hidePause() {
    this.pauseMenu.hide();
    this.hud.show();
    this.weaponInfo.style.display = 'block';
    this.healthInfo.style.display = 'block';
    this.ammoInfo.style.display = 'block';
  }

  togglePause() {
    if (this.pauseMenu.isVisible()) {
      this.hidePause();
    } else {
      this.showPause();
    }
  }
  /**
   * Update bottom-right weapon info panel.
   */
  public updateWeaponInfo(name: string, options: WeaponOptions) {
    const { damage, fireRate, projectileSpeed, pelletCount, pelletSpreadDeg } = options;
    let html =
      `<strong>${name}</strong><br>` +
      `Damage: ${damage}<br>` +
      `Rate: ${fireRate.toFixed(1)}/s<br>` +
      `Speed: ${projectileSpeed}<br>`;
    if (pelletCount !== undefined) {
      html += `Pellets: ${pelletCount}<br>`;
    }
    if (pelletSpreadDeg !== undefined) {
      html += `Spread: ${pelletSpreadDeg}&deg;`;
    }
    this.weaponInfo.innerHTML = html;

    const sanitized = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const cls = `weapon-${sanitized}`;
    const ch = this.hud.crosshair;
    Array.from(ch.classList)
      .filter(c => c.startsWith('weapon-'))
      .forEach(c => ch.classList.remove(c));
    ch.classList.add(cls);
  }
  /**
   * Update top-left health display as a visual health bar.
   */
  public updateHealth(current: number, max: number): void {
    const pct = Math.max(0, Math.min(100, (current / max) * 100));
    this.healthInfo.innerHTML = `<strong>Health</strong>
<div class="health-bar-container">
  <div class="health-bar" style="width: ${pct}%"></div>
</div>`;
  }

  /**
   * Update bottom-left ammo display.
   */
  public updateAmmo(currentAmmo: number, magazineSize: number, reloading: boolean): void {
    const status = reloading ? 'Reloading...' : `${currentAmmo} / ${magazineSize}`;
    this.ammoInfo.innerHTML = `<strong>Ammo</strong><br>${status}`;
  }
  public showHitMarker(): void {
    this.hud.showHitMarker();
  }
}
