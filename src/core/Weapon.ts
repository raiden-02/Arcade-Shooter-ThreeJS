import * as THREE from 'three';

// Weapon models are placed in public/weapons; paths below reference that folder.

import { ProjectileManager } from './ProjectileManager';

/**
 * Weapon parameter definitions
 */
export interface WeaponOptions {
  /** Display name */
  name: string;
  /** Path to the 3D model for first-person view */
  modelPath?: string;
  /** Optional position offset for first-person model (relative to camera) */
  viewOffset?: THREE.Vector3;
  /** Optional rotation offset for first-person model (relative to camera) */
  viewRotationOffset?: THREE.Euler;
  /** Optional scale for first-person model */
  viewScale?: THREE.Vector3;
  /** ADS (aim-down-sights) position offset relative to camera */
  adsOffset?: THREE.Vector3;
  /** ADS (aim-down-sights) rotation offset relative to camera */
  adsRotationOffset?: THREE.Euler;
  /** Time in seconds to transition between hip-fire and ADS */
  adsTransitionTime?: number;
  /** Field of view (degrees) to use when aiming down sights */
  adsFov?: number;
  // shots per second (fire rate)
  fireRate: number;
  // projectile speed
  projectileSpeed: number;
  // projectile geometry
  projectileRadius?: number;
  projectileLength?: number;
  // damage per projectile
  damage: number;
  // optional multi-pellet (e.g., shotgun)
  pelletCount?: number;
  // spread angle in degrees
  pelletSpreadDeg?: number;
  /** Hip-fire base spread cone angle in degrees */
  spreadDeg?: number;
  /** Degrees added to the spread cone per shot (dynamic bloom) */
  bloomPerShot?: number;
  /** Degrees per second that bloom decays */
  bloomDecayRate?: number;
  /** Maximum dynamic bloom degrees */
  maxBloom?: number;
  /** Pixels of crosshair expansion per bloom degree */
  pixelsPerDeg?: number;
  // vertical recoil angle per shot (radians)
  recoil?: number;
  // whether the weapon can fire continuously when holding the trigger
  automatic?: boolean;
  // radius for area-of-effect damage (e.g., grenades, rockets)
  explosionRadius?: number;
  /** Magazine capacity (# bullets per reload) */
  magazineSize: number;
  /** Reload duration in seconds */
  reloadTime: number;
  /** Optional animation clip name for firing */
  fireAnimClip?: string;
  /** Optional animation clip name for reloading */
  reloadAnimClip?: string;
}
/**
 * Base Weapon class. Handles rate-limiting and delegates firing logic.
 */
export abstract class Weapon {
  protected lastShotTime: number = 0;
  /** Dynamic bloom state (degrees) */
  private currentBloom: number;
  private bloomPerShot: number;
  private bloomDecayRate: number;
  private maxBloom: number;
  private pixelsPerDeg: number;
  /** Current ammo in magazine */
  protected currentAmmo: number;
  /** Reload state flag */
  protected reloading: boolean = false;
  constructor(
    protected projectileManager: ProjectileManager,
    protected options: WeaponOptions,
  ) {
    this.currentAmmo = options.magazineSize;
    this.reloading = false;
    // dynamic hip-fire bloom parameters
    this.currentBloom = 0;
    this.bloomPerShot = options.bloomPerShot ?? 0.5;
    this.bloomDecayRate = options.bloomDecayRate ?? 2.0;
    this.maxBloom = options.maxBloom ?? 4.0;
    this.pixelsPerDeg = options.pixelsPerDeg ?? 2.0;
  }

  /**
   * Attempt to fire the weapon. Must be called with current time in seconds.
   */
  /**
   * Get the weapon's display name.
   */
  public getName(): string {
    return this.options.name;
  }
  /**
   * Get the weapon's option set (fireRate, damage, etc.).
   */
  public getOptions(): WeaponOptions {
    return this.options;
  }
  /**
   * Attempt to fire the weapon at given time. Returns true if a shot was fired.
   */
  public tryFire(origin: THREE.Vector3, direction: THREE.Vector3, time: number): boolean {
    if (this.reloading) return false;
    if (this.currentAmmo <= 0) return false;
    const interval = 1 / this.options.fireRate;
    if (time - this.lastShotTime < interval) return false;
    this.lastShotTime = time;
    this.fire(origin, direction);
    this.currentAmmo--;
    this.onShotFired();
    return true;
  }

  /**
   * Actual firing logic, implemented by subclasses.
   */
  protected abstract fire(origin: THREE.Vector3, direction: THREE.Vector3): void;

  /**
   * Begin reloading the weapon. Returns a promise that resolves when reload completes.
   */
  public async reload(): Promise<void> {
    if (this.reloading) return;
    if (this.currentAmmo >= this.options.magazineSize) return;
    this.reloading = true;
    await new Promise<void>(resolve => setTimeout(resolve, this.options.reloadTime * 1000));
    this.currentAmmo = this.options.magazineSize;
    this.reloading = false;
  }

  /** Current ammo count in magazine */
  public getCurrentAmmo(): number {
    return this.currentAmmo;
  }

  /** Maximum ammo capacity per magazine */
  public getMagazineSize(): number {
    return this.options.magazineSize;
  }

  /** Whether a reload is in progress */
  public isReloading(): boolean {
    return this.reloading;
  }

  /** Decay dynamic bloom over time; call each frame. */
  public updateBloom(delta: number): void {
    this.currentBloom = Math.max(0, this.currentBloom - this.bloomDecayRate * delta);
  }

  /** Total spread cone angle (degrees): base + dynamic bloom; zero if ADS. */
  public getTotalSpreadDeg(isADS: boolean): number {
    if (isADS) return 0;
    return (this.options.spreadDeg ?? 0) + this.currentBloom;
  }

  /** Internal hook: increase bloom when a shot is fired. */
  protected onShotFired(): void {
    this.currentBloom = Math.min(this.maxBloom, this.currentBloom + this.bloomPerShot);
  }

  /** Pixels of crosshair expansion per bloom degree */
  public getPixelsPerDeg(): number {
    return this.pixelsPerDeg;
  }
}

/** Assault Rifle: medium fire rate, moderate damage */
export class AssaultRifle extends Weapon {
  constructor(pm: ProjectileManager) {
    super(pm, {
      name: 'Assault Rifle',
      modelPath: 'weapons/glTF/AR_2.gltf',
      viewScale: new THREE.Vector3(1.1, 1.1, 1.1),
      viewOffset: new THREE.Vector3(0.7, -0.7, -1.7),
      adsOffset: new THREE.Vector3(0.0, -0.5, -1.2),
      fireRate: 10, // 600 RPM
      projectileSpeed: 60,
      projectileRadius: 0.02,
      projectileLength: 0.1,
      damage: 20,
      recoil: 0.01,
      automatic: true,
      adsTransitionTime: 0.15,
      magazineSize: 30,
      reloadTime: 2.5,
      spreadDeg: 0.8,
      bloomPerShot: 0.4,
      bloomDecayRate: 4.0,
      maxBloom: 4.0,
    });
  }
  protected fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    this.projectileManager.fire(origin, direction, {
      speed: this.options.projectileSpeed,
      radius: this.options.projectileRadius,
      length: this.options.projectileLength,
      damage: this.options.damage,
    });
  }
}
/** Sub Machine Gun: high fire rate, low damage */
export class SubMachineGun extends Weapon {
  constructor(pm: ProjectileManager) {
    super(pm, {
      name: 'SMG',
      modelPath: 'weapons/glTF/AR_1.gltf',
      viewScale: new THREE.Vector3(1.1, 1.1, 1.1),
      viewOffset: new THREE.Vector3(0.7, -0.7, -1.65),
      adsOffset: new THREE.Vector3(0.0, -0.5, -1.15),
      fireRate: 12, // 720 RPM
      projectileSpeed: 50,
      projectileRadius: 0.02,
      projectileLength: 0.1,
      damage: 12,
      recoil: 0.008,
      automatic: true,
      adsTransitionTime: 0.1,
      magazineSize: 25,
      reloadTime: 2,
      spreadDeg: 1.2,
      bloomPerShot: 0.6,
      bloomDecayRate: 5.0,
      maxBloom: 5.0,
    });
  }
  protected fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    this.projectileManager.fire(origin, direction, {
      speed: this.options.projectileSpeed,
      radius: this.options.projectileRadius,
      length: this.options.projectileLength,
      damage: this.options.damage,
    });
  }
}
/** Light Machine Gun: low fire rate, larger magazine, more damage */
export class LightMachineGun extends Weapon {
  constructor(pm: ProjectileManager) {
    super(pm, {
      name: 'LMG',
      modelPath: 'weapons/glTF/AR_5.gltf',
      viewScale: new THREE.Vector3(1.2, 1.2, 1.2),
      viewOffset: new THREE.Vector3(0.7, -0.7, -1.95),
      adsOffset: new THREE.Vector3(0.0, -0.6, -1.45),
      fireRate: 8, // 480 RPM
      projectileSpeed: 65,
      projectileRadius: 0.025,
      projectileLength: 0.15,
      damage: 25,
      recoil: 0.012,
      automatic: true,
      adsTransitionTime: 0.2,
      magazineSize: 100,
      reloadTime: 5,
      spreadDeg: 2.5,
      bloomPerShot: 0.7,
      bloomDecayRate: 3.0,
      maxBloom: 6.0,
    });
  }
  protected fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    this.projectileManager.fire(origin, direction, {
      speed: this.options.projectileSpeed,
      radius: this.options.projectileRadius,
      length: this.options.projectileLength,
      damage: this.options.damage,
    });
  }
}
/** Pistol: semi-auto, moderate damage */
export class Pistol extends Weapon {
  constructor(pm: ProjectileManager) {
    super(pm, {
      name: 'Pistol',
      modelPath: 'weapons/glTF/Pistol_1.gltf',
      viewScale: new THREE.Vector3(1.1, 1.1, 1.1),
      viewOffset: new THREE.Vector3(0.7, -0.7, -1.4),
      adsOffset: new THREE.Vector3(0.0, -0.5, -0.9),
      fireRate: 5, // 300 RPM
      projectileSpeed: 70,
      projectileRadius: 0.015,
      projectileLength: 0.08,
      damage: 15,
      recoil: 0.005,
      adsTransitionTime: 0.1,
      magazineSize: 12,
      reloadTime: 1.5,
      spreadDeg: 1.5,
      bloomPerShot: 0.8,
      bloomDecayRate: 6.0,
      maxBloom: 5.0,
      pixelsPerDeg: 4.0,
    });
  }
  protected fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    this.projectileManager.fire(origin, direction, {
      speed: this.options.projectileSpeed,
      radius: this.options.projectileRadius,
      length: this.options.projectileLength,
      damage: this.options.damage,
    });
  }
}
/** Shotgun: slow fire rate, multiple pellets with spread */
export class Shotgun extends Weapon {
  constructor(pm: ProjectileManager) {
    super(pm, {
      name: 'Shotgun',
      modelPath: 'weapons/glTF/AR_4.gltf',
      viewScale: new THREE.Vector3(1.1, 1.1, 1.1),
      viewOffset: new THREE.Vector3(0.7, -0.7, -1.7),
      adsOffset: new THREE.Vector3(0.0, -0.5, -1.2),
      fireRate: 1, // 60 RPM
      projectileSpeed: 40,
      projectileRadius: 0.01,
      projectileLength: 0.05,
      damage: 13,
      pelletCount: 8,
      pelletSpreadDeg: 10,
      recoil: 0.02,
      adsTransitionTime: 0.2,
      magazineSize: 8,
      reloadTime: 3,
      spreadDeg: 0,
      bloomPerShot: 1.0,
      bloomDecayRate: 4.0,
      maxBloom: 6.0,
      pixelsPerDeg: 3.0,
    });
  }
  protected fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    const { pelletCount = 1, pelletSpreadDeg = 0 } = this.options;
    for (let i = 0; i < pelletCount; i++) {
      // random spread
      const spreadRad = THREE.MathUtils.degToRad(pelletSpreadDeg);
      const axis = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
      const angle = (Math.random() - 0.5) * spreadRad;
      const dir = direction.clone().applyAxisAngle(axis, angle).normalize();
      this.projectileManager.fire(origin, dir, {
        speed: this.options.projectileSpeed,
        radius: this.options.projectileRadius,
        length: this.options.projectileLength,
        damage: this.options.damage,
      });
    }
  }
}
/** Sniper Rifle: bolt-action, high damage, high speed */
export class SniperRifle extends Weapon {
  constructor(pm: ProjectileManager) {
    super(pm, {
      name: 'Sniper Rifle',
      modelPath: 'weapons/glTF/Sniper_2.gltf',
      viewScale: new THREE.Vector3(1.4, 1.4, 1.4),
      viewOffset: new THREE.Vector3(0.7, -0.7, -1.6),
      adsOffset: new THREE.Vector3(0.0, -0.7, -1.4),
      fireRate: 1, // 60 RPM
      projectileSpeed: 200,
      projectileRadius: 0.02,
      projectileLength: 0.2,
      damage: 100,
      recoil: 0.05,
      adsTransitionTime: 0.3,
      magazineSize: 5,
      reloadTime: 3.5,
      spreadDeg: 5.0,
      bloomPerShot: 0.8,
      bloomDecayRate: 2.0,
      maxBloom: 10.0,
      pixelsPerDeg: 5.0,
    });
  }
  protected fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    this.projectileManager.fire(origin, direction, {
      speed: this.options.projectileSpeed,
      radius: this.options.projectileRadius,
      length: this.options.projectileLength,
      damage: this.options.damage,
    });
  }
}
/** Marksman Rifle: semi-auto DMR */
export class MarksmanRifle extends Weapon {
  constructor(pm: ProjectileManager) {
    super(pm, {
      name: 'Marksman Rifle',
      modelPath: 'weapons/glTF/Sniper_1.gltf',
      viewScale: new THREE.Vector3(1.2, 1.2, 1.2),
      viewOffset: new THREE.Vector3(0.7, -0.7, -1.6),
      adsOffset: new THREE.Vector3(0.0, -0.5, -1.1),
      fireRate: 2, // 120 RPM
      projectileSpeed: 150,
      projectileRadius: 0.02,
      projectileLength: 0.15,
      damage: 60,
      recoil: 0.03,
      adsTransitionTime: 0.25,
      magazineSize: 10,
      reloadTime: 2.5,
      spreadDeg: 3.0,
      bloomPerShot: 0.7,
      bloomDecayRate: 4.0,
      maxBloom: 5.0,
      pixelsPerDeg: 3.0,
    });
  }
  protected fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    this.projectileManager.fire(origin, direction, {
      speed: this.options.projectileSpeed,
      radius: this.options.projectileRadius,
      length: this.options.projectileLength,
      damage: this.options.damage,
    });
  }
}
/** Grenade Launcher: projectile with grenade-like arc */
export class GrenadeLauncher extends Weapon {
  constructor(pm: ProjectileManager) {
    super(pm, {
      name: 'Grenade Launcher',
      modelPath: 'weapons/glTF/Grenade_3.gltf',
      viewScale: new THREE.Vector3(1.1, 1.1, 1.1),
      viewOffset: new THREE.Vector3(0.7, -0.7, -1.5),
      adsOffset: new THREE.Vector3(0.0, -0.6, -1.0),
      fireRate: 0.5, // 30 RPM
      projectileSpeed: 30,
      projectileRadius: 0.1,
      projectileLength: 0.2,
      damage: 80,
      recoil: 0.02,
      // explosion radius in world units (meters); tuned for tighter blast
      explosionRadius: 2,
      adsTransitionTime: 0.3,
      magazineSize: 6,
      reloadTime: 4,
      spreadDeg: 1.5,
      bloomPerShot: 1.0,
      bloomDecayRate: 4.0,
      maxBloom: 6.0,
      pixelsPerDeg: 3.0,
    });
  }
  protected fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    this.projectileManager.fire(origin, direction, {
      speed: this.options.projectileSpeed,
      radius: this.options.projectileRadius,
      length: this.options.projectileLength,
      damage: this.options.damage,
      explosionRadius: this.options.explosionRadius,
    });
  }
}
/** Rocket Launcher: high damage explosive projectile */
export class RocketLauncher extends Weapon {
  constructor(pm: ProjectileManager) {
    super(pm, {
      name: 'Rocket Launcher',
      modelPath: 'weapons/glTF/Grenade_2.gltf',
      viewScale: new THREE.Vector3(1.4, 1.4, 1.4),
      viewOffset: new THREE.Vector3(0.7, -0.7, -1.4),
      adsOffset: new THREE.Vector3(0.0, -0.8, -0.9),
      fireRate: 0.5, // 30 RPM
      projectileSpeed: 25,
      projectileRadius: 0.12,
      projectileLength: 0.3,
      damage: 120,
      recoil: 0.025,
      // explosion radius in world units (meters); tuned for controlled blast
      explosionRadius: 3,
      adsTransitionTime: 0.3,
      magazineSize: 4,
      reloadTime: 4,
      spreadDeg: 2.0,
      bloomPerShot: 1.2,
      bloomDecayRate: 4.0,
      maxBloom: 6.0,
      pixelsPerDeg: 3.0,
    });
  }
  protected fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    this.projectileManager.fire(origin, direction, {
      speed: this.options.projectileSpeed,
      radius: this.options.projectileRadius,
      length: this.options.projectileLength,
      damage: this.options.damage,
      explosionRadius: this.options.explosionRadius,
    });
  }
}
