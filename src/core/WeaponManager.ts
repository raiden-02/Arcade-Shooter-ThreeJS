// src/core/WeaponManager.ts
import * as THREE from 'three';

import { ProjectileManager } from './ProjectileManager';
import {
  Weapon,
  AssaultRifle,
  SubMachineGun,
  LightMachineGun,
  Pistol,
  Shotgun,
  SniperRifle,
  MarksmanRifle,
  GrenadeLauncher,
  RocketLauncher,
} from './Weapon';

/**
 * Manages the player's available weapons and current selection.
 */
export class WeaponManager {
  private weapons: Weapon[];
  private currentIndex: number = 0;

  constructor(projectileManager: ProjectileManager) {
    // Instantiate all weapon types
    this.weapons = [
      new Pistol(projectileManager),
      new Shotgun(projectileManager),
      new AssaultRifle(projectileManager),
      new SubMachineGun(projectileManager),
      new LightMachineGun(projectileManager),
      new MarksmanRifle(projectileManager),
      new SniperRifle(projectileManager),
      new GrenadeLauncher(projectileManager),
      new RocketLauncher(projectileManager),
    ];
    this.currentIndex = 0;
    console.log('Weapon selected:', this.getCurrentWeapon().getName());
  }

  /**
   * Attempt to fire the current weapon.
   * @param origin    - spawn position
   * @param direction - shoot direction
   * @param time      - current time in seconds
   */
  /**
   * Attempt to fire the current weapon. Returns true if a shot was fired.
   */
  public tryFire(origin: THREE.Vector3, direction: THREE.Vector3, time: number): boolean {
    return this.getCurrentWeapon().tryFire(origin, direction, time);
  }

  /**
   * Switch to the next weapon in the list.
   */
  nextWeapon() {
    this.currentIndex = (this.currentIndex + 1) % this.weapons.length;
    console.log('Weapon selected:', this.getCurrentWeapon().getName());
  }

  /**
   * Switch to a specific weapon index (0-based).
   */
  selectWeapon(index: number) {
    if (index >= 0 && index < this.weapons.length) {
      this.currentIndex = index;
      console.log('Weapon selected:', this.getCurrentWeapon().getName());
    }
  }

  /**
   * Get the currently selected weapon.
   */
  getCurrentWeapon(): Weapon {
    return this.weapons[this.currentIndex];
  }
}
