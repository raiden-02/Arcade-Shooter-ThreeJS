import * as THREE from 'three';

import { IMultiplayerEngine } from './MultiplayerEngine';
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
 * Networked weapon manager that synchronizes weapon firing across multiplayer
 * - Handles local weapon firing with immediate feedback
 * - Broadcasts weapon fire events to server for validation
 * - Receives remote weapon fire events and creates visual projectiles
 */
export class NetworkedWeaponManager {
  private weapons: Weapon[];
  private currentIndex: number = 0;
  private multiplayerEngine: IMultiplayerEngine | null = null;

  constructor(private projectileManager: ProjectileManager) {
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
    console.log('Networked weapon selected:', this.getCurrentWeapon().getName());
  }

  /**
   * Set multiplayer engine reference for networking
   */
  public setMultiplayerEngine(engine: IMultiplayerEngine): void {
    this.multiplayerEngine = engine;
  }

  /**
   * Attempt to fire the current weapon with multiplayer support
   * - Fires locally for immediate feedback
   * - Broadcasts to server for validation and synchronization
   */
  public tryFire(origin: THREE.Vector3, direction: THREE.Vector3, time: number): boolean {
    const weapon = this.getCurrentWeapon();
    const canFire = weapon.canFire(time);

    if (!canFire) {
      return false;
    }

    // Fire locally for immediate feedback (client-side prediction)
    const shotFired = weapon.tryFire(origin, direction, time);

    if (shotFired && this.multiplayerEngine?.isInMultiplayerMode()) {
      // Broadcast weapon fire to server for validation and synchronization
      this.multiplayerEngine.fireWeapon(
        { x: origin.x, y: origin.y, z: origin.z },
        { x: direction.x, y: direction.y, z: direction.z },
        weapon.getName(),
      );

      console.log(
        `Networked weapon fire: ${weapon.getName()} at ${origin.x.toFixed(2)}, ${origin.y.toFixed(2)}, ${origin.z.toFixed(2)}`,
      );
    }

    return shotFired;
  }

  /**
   * Handle remote weapon fire (from other players)
   * Creates visual projectile without affecting local weapon state
   */
  public handleRemoteWeaponFire(data: {
    playerId: string;
    origin: { x: number; y: number; z: number };
    direction: { x: number; y: number; z: number };
    weaponType: string;
    timestamp: number;
  }): void {
    console.log(`Remote weapon fire from ${data.playerId}: ${data.weaponType}`);

    // Find the weapon type and create a visual projectile
    const weapon = this.weapons.find(
      w => w.getName().toLowerCase() === data.weaponType.toLowerCase(),
    );

    if (weapon) {
      const origin = new THREE.Vector3(data.origin.x, data.origin.y, data.origin.z);
      const direction = new THREE.Vector3(data.direction.x, data.direction.y, data.direction.z);

      // Create visual projectile for remote player's shot
      // Note: This creates a projectile but marks it as "remote" so it doesn't affect local entities
      this.projectileManager.createRemoteProjectile(
        origin,
        direction,
        weapon.getProjectileSpeed(),
        weapon.getDamage(),
        data.playerId,
        weapon.getName(),
      );
    }
  }

  /**
   * Switch to the next weapon in the list.
   */
  nextWeapon() {
    this.currentIndex = (this.currentIndex + 1) % this.weapons.length;
    const weaponName = this.getCurrentWeapon().getName();
    console.log('Networked weapon selected:', weaponName);

    // Update server with new weapon selection
    if (this.multiplayerEngine?.isInMultiplayerMode()) {
      // This will be handled by the engine's player state updates
    }
  }

  /**
   * Switch to a specific weapon index (0-based).
   */
  selectWeapon(index: number) {
    if (index >= 0 && index < this.weapons.length) {
      this.currentIndex = index;
      const weaponName = this.getCurrentWeapon().getName();
      console.log('Networked weapon selected:', weaponName);

      // Update server with new weapon selection
      if (this.multiplayerEngine?.isInMultiplayerMode()) {
        // This will be handled by the engine's player state updates
      }
    }
  }

  /**
   * Get the currently selected weapon.
   */
  getCurrentWeapon(): Weapon {
    return this.weapons[this.currentIndex];
  }

  /**
   * Get weapon name for networking
   */
  getCurrentWeaponName(): string {
    return this.getCurrentWeapon().getName();
  }

  /**
   * Get all available weapons (for UI display)
   */
  getAllWeapons(): Weapon[] {
    return [...this.weapons];
  }

  /**
   * Get current weapon index
   */
  getCurrentWeaponIndex(): number {
    return this.currentIndex;
  }
}
