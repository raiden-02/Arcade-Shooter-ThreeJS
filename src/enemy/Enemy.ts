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
      // Small downward bias keeps controller grounded on slopes/edges
      desiredDelta = { x: chaseDir.x * moveSpeed, y: -0.05 * delta, z: chaseDir.z * moveSpeed };
    } else {
      // Hold position but maintain ground snap with slight downward bias
      desiredDelta = { x: 0, y: -0.05 * delta, z: 0 };
    }
    this.charController.computeColliderMovement(this.collider, desiredDelta);
    // Apply computed movement to collider and mesh
    const movement = this.charController.computedMovement();
    const newPos = new RAPIER.Vector3(
      prevPos.x + movement.x,
      prevPos.y + movement.y,
      prevPos.z + movement.z,
    );
    // Prevent gradual sinking below the floor due to numerical drift
    // Floor top is at y=0, capsule requires center >= radius + halfHeight = 0.5 + 0.5 = 1.0
    if (newPos.y < 1.0) newPos.y = 1.0;
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

  // === NETWORKING METHODS FOR MULTIPLAYER ===

  /**
   * Get enemy ID for network synchronization
   */
  private enemyId: string = `enemy_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  public getId(): string {
    return this.enemyId;
  }

  /**
   * Set enemy ID (for network synchronization)
   */
  public setId(id: string): void {
    this.enemyId = id;
  }

  /**
   * Get enemy position for network synchronization
   */
  public getPosition(): { x: number; y: number; z: number } {
    const translation = this.collider.translation();
    return {
      x: translation.x,
      y: translation.y,
      z: translation.z,
    };
  }

  /**
   * Get enemy rotation for network synchronization
   */
  public getRotation(): { x: number; y: number; z: number; w: number } {
    const rotation = this.collider.rotation();
    return {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z,
      w: rotation.w,
    };
  }

  /**
   * Get enemy network state for synchronization
   */
  public getNetworkState(enemyId?: string): {
    id: string;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number; w: number };
    health: number;
    isDead: boolean;
    isAlive: boolean;
  } {
    return {
      id: enemyId || this.getId(),
      position: this.getPosition(),
      rotation: this.getRotation(),
      health: this.health,
      isDead: this.isDead,
      isAlive: !this.isDead,
    };
  }

  /**
   * Apply network state from server (for client synchronization)
   */
  public applyNetworkState(state: {
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number; w: number };
    health: number;
    isDead: boolean;
  }): void {
    // Update position
    const newPosition = new RAPIER.Vector3(state.position.x, state.position.y, state.position.z);
    this.collider.setTranslation(newPosition);

    // Update rotation
    const newRotation = new RAPIER.Quaternion(
      state.rotation.x,
      state.rotation.y,
      state.rotation.z,
      state.rotation.w,
    );
    this.collider.setRotation(newRotation);

    // Update health and death state
    this.health = state.health;
    this.isDead = state.isDead;

    // Update visual state
    if (this.isDead && !this.mesh.userData.wasDeadBefore) {
      this.mesh.material = new THREE.MeshBasicMaterial({ color: 0x666666 }); // Gray out dead enemies
      this.mesh.userData.wasDeadBefore = true;
    }
  }

  /**
   * Check if enemy has moved significantly (for network optimization)
   */
  private lastNetworkPosition: { x: number; y: number; z: number } | null = null;
  private lastNetworkHealth: number | null = null;

  public hasSignificantChange(threshold: number = 0.5): boolean {
    const currentPos = this.getPosition();
    const currentHealth = this.health;

    if (!this.lastNetworkPosition || this.lastNetworkHealth === null) {
      this.lastNetworkPosition = currentPos;
      this.lastNetworkHealth = currentHealth;
      return true;
    }

    const posDistance = Math.sqrt(
      Math.pow(currentPos.x - this.lastNetworkPosition.x, 2) +
        Math.pow(currentPos.y - this.lastNetworkPosition.y, 2) +
        Math.pow(currentPos.z - this.lastNetworkPosition.z, 2),
    );

    const healthChanged = Math.abs(currentHealth - this.lastNetworkHealth) > 0.1;

    if (posDistance > threshold || healthChanged || this.isDead) {
      this.lastNetworkPosition = currentPos;
      this.lastNetworkHealth = currentHealth;
      return true;
    }

    return false;
  }

  die() {
    if (this.isDead) return;
    this.isDead = true;

    console.log(`Enemy ${this.enemyId} died!`);

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

  /**
   * Update visuals only (for clients in multiplayer)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public updateVisuals(_delta: number, _elapsedTime: number): void {
    if (this.isDead) return;

    // Only update visual elements, no AI logic
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
}
