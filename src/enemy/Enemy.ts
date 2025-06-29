import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { CollisionGroups } from '../core/CollisionGroups';
import { ProjectileManager } from '../core/ProjectileManager';
import { WeaponOptions, AssaultRifle } from '../core/Weapon';
import { Player } from '../player/Player';

export class Enemy {
  mesh: THREE.Mesh;
  private charController: RAPIER.KinematicCharacterController;
  collider: RAPIER.Collider;
  private world: RAPIER.World;
  health: number = 100;
  isDead: boolean = false;
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
    this.projectileManager = projectileManager;
    this.player = player;
    this.camera = camera;
    this.world = world;
    const weapon = new AssaultRifle(projectileManager);
    this.weaponOpts = weapon.getOptions();
    // Limit AI fire rate to 1 shot per second
    this.fireRate = 0.5;
    this.lastShotTime = 0;
    // Random stand-off distance between 5 and 15 units
    this.standoffDistance = 5 + Math.random() * 10;
    this.lastShotTime = 0;
    // Create kinematic controller and capsule collider for enemy
    // Small offset ensures stability near surfaces
    this.charController = this.world.createCharacterController(0.1);
    const enemyColliderDesc = RAPIER.ColliderDesc.capsule(0.5, 0.5)
      .setTranslation(position.x, position.y, position.z)
      .setCollisionGroups(
        (CollisionGroups.ENEMY << 16) | CollisionGroups.PROJECTILE | CollisionGroups.DEFAULT,
      );
    this.collider = this.world.createCollider(enemyColliderDesc);
    // Snap to ground to keep enemy on floor
    this.charController.enableSnapToGround(0.1);
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
  }

  /**
   * Update enemy each frame: movement, shooting, and UI.
   * @param delta - time since last frame (s)
   * @param elapsedTime - total elapsed time (s)
   */
  update(delta: number, elapsedTime: number) {
    if (this.isDead) return;

    // Basic movement: chase player on XZ plane until within standoffDistance
    const playerPos = this.player.root.position;
    const cur = this.collider.translation();
    const chaseDir = new THREE.Vector3(playerPos.x - cur.x, 0, playerPos.z - cur.z);
    const distSq = chaseDir.lengthSq();
    // Compute movement with character controller (handles sliding, steps, slopes)
    const prevPos = this.collider.translation();
    let desiredDelta;
    if (distSq > this.standoffDistance * this.standoffDistance) {
      chaseDir.normalize();
      const moveSpeed = 2 * delta;
      desiredDelta = { x: chaseDir.x * moveSpeed, y: 0, z: chaseDir.z * moveSpeed };
    } else {
      // Hold position but maintain ground snap
      desiredDelta = { x: 0, y: 0, z: 0 };
    }
    this.charController.computeColliderMovement(this.collider, desiredDelta);
    // Apply computed movement to collider and mesh
    const movement = this.charController.computedMovement();
    const newPos = new RAPIER.Vector3(
      prevPos.x + movement.x,
      prevPos.y + movement.y,
      prevPos.z + movement.z,
    );
    this.collider.setTranslation(newPos);
    this.mesh.position.set(newPos.x, newPos.y, newPos.z);

    // Shooting logic: fire at player if ready
    const origin = new THREE.Vector3(newPos.x, newPos.y + 1.0, newPos.z);
    const aimDir = new THREE.Vector3(
      playerPos.x - newPos.x,
      playerPos.y - newPos.y,
      playerPos.z - newPos.z,
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

    // Remove kinematic controller and collider from physics world
    this.world.removeCharacterController(this.charController);
    this.world.removeCollider(this.collider, true);
  }
}
