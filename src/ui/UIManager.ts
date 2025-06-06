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
    this.weaponInfo.style.cssText = `
      position: fixed;
      bottom: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      padding: 8px 12px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 14px;
      pointer-events: none;
      z-index: 500;
    `;
    document.body.appendChild(this.weaponInfo);
    // Health info display
    this.healthInfo = document.createElement('div');
    this.healthInfo.id = 'health-info';
    this.healthInfo.style.cssText = `
      position: fixed;
      top: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      padding: 8px 12px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 14px;
      pointer-events: none;
      z-index: 500;
    `;
    document.body.appendChild(this.healthInfo);
    // Ammo info display
    this.ammoInfo = document.createElement('div');
    this.ammoInfo.id = 'ammo-info';
    this.ammoInfo.style.cssText = `
      position: fixed;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      padding: 8px 12px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 14px;
      pointer-events: none;
      z-index: 500;
    `;
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
  }
  /**
   * Update top-left health display.
   */
  public updateHealth(current: number, max: number): void {
    this.healthInfo.innerHTML = `<strong>Health</strong><br>${current} / ${max}`;
  }

  /**
   * Update bottom-left ammo display.
   */
  public updateAmmo(currentAmmo: number, magazineSize: number, reloading: boolean): void {
    const status = reloading ? 'Reloading...' : `${currentAmmo} / ${magazineSize}`;
    this.ammoInfo.innerHTML = `<strong>Ammo</strong><br>${status}`;
  }
}
