import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { CollisionGroups } from '../core/CollisionGroups';
import { ProjectileManager } from '../core/ProjectileManager';
import {
  WeaponOptions,
  Pistol,
  AssaultRifle,
  SubMachineGun,
  LightMachineGun,
  MarksmanRifle,
  SniperRifle,
} from '../core/Weapon';
import { Player } from '../player/Player';

export class Enemy {
  mesh: THREE.Mesh;
  body: RAPIER.RigidBody;
  health: number = 100;
  isDead: boolean = false;
  collider: RAPIER.Collider;
  // References for AI and UI
  private projectileManager: ProjectileManager;
  private player: Player;
  private camera: THREE.PerspectiveCamera;
  private weaponOpts: WeaponOptions;
  private fireRate: number;
  private lastShotTime: number = 0;
  // Distance to maintain from player before stopping
  private standoffDistance: number;
  private uiElement: HTMLDivElement;

  constructor(
    scene: THREE.Scene,
    world: RAPIER.World,
    position: THREE.Vector3,
    projectileManager: ProjectileManager,
    player: Player,
    camera: THREE.PerspectiveCamera,
  ) {
    // Store AI references and equip a random weapon
    this.projectileManager = projectileManager;
    this.player = player;
    this.camera = camera;
    // Choose random bullet weapon
    const weaponClasses = [
      Pistol,
      AssaultRifle,
      SubMachineGun,
      LightMachineGun,
      MarksmanRifle,
      SniperRifle,
    ];
    const idx = Math.floor(Math.random() * weaponClasses.length);
    const weapon = new weaponClasses[idx](projectileManager);
    this.weaponOpts = weapon.getOptions();
    // Limit AI fire rate to 1 shot per second
    this.fireRate = 0.5;
    this.lastShotTime = 0;
    // Random stand-off distance between 5 and 15 units
    this.standoffDistance = 5 + Math.random() * 10;
    this.lastShotTime = 0;
    // Create health bar UI element
    this.uiElement = document.createElement('div');
    // Health bar overlay: fixed to viewport, hidden off-screen if enemy not in view
    this.uiElement.style.cssText =
      'position:fixed; background:red; height:5px; width:50px; transform:translate(-50%,-120%); pointer-events:none; z-index:500;';
    document.body.appendChild(this.uiElement);
    // Mesh geometry (can be replaced with GLTF later)
    const geometry = new THREE.CapsuleGeometry(0.5, 1.0);
    const material = new THREE.MeshStandardMaterial({ color: 0x990000, wireframe: false }); // enable wireframe for collision debugging
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    scene.add(this.mesh);

    // Physics body
    const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(position.x, position.y, position.z)
      .setLinearDamping(0.8);
    this.body = world.createRigidBody(bodyDesc);

    this.body.lockRotations(true, true);

    const colliderDesc = RAPIER.ColliderDesc.capsule(0.5, 0.5).setCollisionGroups(
      (CollisionGroups.ENEMY << 16) | CollisionGroups.PROJECTILE | CollisionGroups.DEFAULT,
    );
    this.collider = world.createCollider(colliderDesc, this.body);
  }

  /**
   * Update enemy each frame: movement, shooting, and UI.
   * @param delta - time since last frame (s)
   * @param elapsedTime - total elapsed time (s)
   */
  update(_delta: number, elapsedTime: number) {
    if (this.isDead) return;

    // Basic movement: chase player on XZ plane until within standoffDistance
    const pos = this.body.translation();
    const playerPos = this.player.root.position;
    const chaseDir = new THREE.Vector3(playerPos.x - pos.x, 0, playerPos.z - pos.z);
    const distSq = chaseDir.lengthSq();
    if (distSq > this.standoffDistance * this.standoffDistance) {
      chaseDir.normalize();
      const moveSpeed = 2;
      this.body.setLinvel(
        { x: chaseDir.x * moveSpeed, y: this.body.linvel().y, z: chaseDir.z * moveSpeed },
        true,
      );
    } else {
      // Stop horizontal movement within stand-off range
      const vel = this.body.linvel();
      this.body.setLinvel({ x: 0, y: vel.y, z: 0 }, true);
    }

    // Sync mesh transform to physics
    this.mesh.position.set(pos.x, pos.y, pos.z);
    this.mesh.quaternion.copy(this.body.rotation());

    // Shooting logic: fire at player if ready
    const origin = new THREE.Vector3(pos.x, pos.y + 1.0, pos.z);
    const aimDir = new THREE.Vector3(
      playerPos.x - pos.x,
      playerPos.y - pos.y,
      playerPos.z - pos.z,
    ).normalize();
    const interval = 1 / this.fireRate;
    if (elapsedTime - this.lastShotTime >= interval) {
      this.lastShotTime = elapsedTime;
      this.projectileManager.fireEnemy(origin, aimDir, {
        speed: this.weaponOpts.projectileSpeed,
        radius: this.weaponOpts.projectileRadius,
        length: this.weaponOpts.projectileLength,
        damage: this.weaponOpts.damage,
        explosionRadius: this.weaponOpts.explosionRadius,
      });
    }

    // Update health bar width
    const healthPct = Math.max(this.health, 0) / 100;
    this.uiElement.style.width = `${50 * healthPct}px`;
    // Project mesh world position to normalized device coords
    const screenPos = this.mesh.position.clone().project(this.camera);
    // Hide if outside view frustum or behind camera
    const offScreen =
      screenPos.x < -1 ||
      screenPos.x > 1 ||
      screenPos.y < -1 ||
      screenPos.y > 1 ||
      screenPos.z < 0 ||
      screenPos.z > 1;
    if (offScreen) {
      this.uiElement.style.display = 'none';
    } else {
      this.uiElement.style.display = 'block';
      const x = ((screenPos.x + 1) / 2) * window.innerWidth;
      const y = ((1 - screenPos.y) / 2) * window.innerHeight;
      this.uiElement.style.left = `${x}px`;
      this.uiElement.style.top = `${y}px`;
    }
  }

  takeDamage(amount: number) {
    console.log(`Enemy took ${amount} damage!`);
    this.health -= amount;
    if (this.health <= 0 && !this.isDead) {
      this.die();
    }
  }

  die() {
    this.isDead = true;

    // Remove from scene
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
    this.mesh.removeFromParent();
    // Remove UI elementw
    this.uiElement.remove();

    // Remove from physics world
    this.body.setEnabled(false); // safer than removeRigidBody if you want to reuse
    this.collider.setEnabled(false);
  }
}
