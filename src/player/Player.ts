// src/player/Player.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { CollisionGroups } from '../core/CollisionGroups';
import { InputManager } from '../core/InputManager';
import { PhysicsHelper } from '../core/PhysicsHelper';

import { CameraRig } from './CameraRig';
import { PlayerController } from './PlayerController';

/**
 * Represents the player entity, including 3D model, camera rig, and character controller.
 */
export class Player {
  /** Root object for all player components. */
  public root: THREE.Object3D;
  private camera: THREE.PerspectiveCamera;
  private cameraRig: CameraRig;
  private model: THREE.Mesh;
  private collider: RAPIER.Collider;
  private charController: RAPIER.KinematicCharacterController;
  private controller: PlayerController;
  // Player health and death state
  private maxHealth: number;
  private health: number;
  private isDead: boolean = false;
  private respawnDelay: number = 3.0; // seconds
  private respawnTimer: number = 0;
  private spawnPosition: RAPIER.Vector3;

  /**
   * @param scene - The Three.js scene to which the player is added.
   * @param input - Input manager for handling player input.
   * @param physics - Physics helper for creating the player body.
   * @param spawnPos - Initial spawn position for the player physics body.
   */
  constructor(
    scene: THREE.Scene,
    input: InputManager,
    physics: PhysicsHelper,
    spawnPos: RAPIER.Vector3 = new RAPIER.Vector3(0, 2, 0),
  ) {
    // Store spawn position for respawn
    this.spawnPosition = spawnPos;

    // Create root object and add to scene
    this.root = new THREE.Object3D();
    scene.add(this.root);

    // Create and attach camera rig
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.cameraRig = new CameraRig(this.camera);
    this.root.add(this.cameraRig.object);

    // Create simple capsule model
    const geometry = new THREE.CapsuleGeometry(0.4, 1.6, 8, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    this.model = new THREE.Mesh(geometry, material);
    this.model.castShadow = true;
    this.root.add(this.model);
    // Create kinematic character controller and capsule collider for player
    this.charController = physics.createCharacterController(0.1);
    const playerColliderDesc = RAPIER.ColliderDesc.capsule(0.8, 0.4)
      .setTranslation(spawnPos.x, spawnPos.y, spawnPos.z)
      .setCollisionGroups(
        (CollisionGroups.PLAYER << 16) |
          CollisionGroups.DEFAULT |
          CollisionGroups.ENEMY |
          CollisionGroups.PROJECTILE,
      );
    this.collider = physics.world.createCollider(playerColliderDesc);
    // Optional: snap to ground to keep player on floor
    this.charController.enableSnapToGround(0.1);

    // Create controller to handle input and movement
    this.controller = new PlayerController(
      this.cameraRig,
      input,
      this.charController,
      this.collider,
    );
    // Initialize health
    this.maxHealth = 100;
    this.health = this.maxHealth;
  }

  /**
   * Returns the player's camera for rendering and raycasting.
   */
  public getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  /**
   * Apply recoil to the camera rig (pitch and yaw adjustments).
   */
  public applyRecoil(vertical: number, horizontal: number): void {
    this.cameraRig.rotatePitch(vertical);
    this.cameraRig.rotateYaw(horizontal);
  }

  /**
   * Update player each frame: handle input, sync physics and graphics.
   */
  /**
   * Update player each frame: handle input, drive character controller, and sync visuals.
   * @param delta - time since last frame (s)
   */
  public update(delta: number): void {
    if (this.isDead) {
      // If dead, count down to respawn
      this.respawnTimer -= delta;
      if (this.respawnTimer <= 0) {
        this.respawn();
      }
      return;
    }

    // Process input and drive kinematic controller
    this.controller.update(delta);
    // Sync root position to controller collider
    const pos = this.collider.translation();
    this.root.position.set(pos.x, pos.y, pos.z);
    // Align model orientation (yaw) with camera rig
    this.model.rotation.y = this.cameraRig.object.rotation.y;
  }
  /**
   * Get current health.
   */
  public getHealth(): number {
    return this.health;
  }
  /**
   * Get maximum health.
   */
  public getMaxHealth(): number {
    return this.maxHealth;
  }
  /**
   * Get the collider handle for collision detection.
   */
  public getColliderHandle(): number {
    return this.collider.handle;
  }
  /**
   * Apply damage to the player.
   */
  public takeDamage(amount: number): void {
    if (this.isDead) return;
    this.health = Math.max(0, this.health - amount);
    if (this.health <= 0) {
      this.die();
    }
  }
  /**
   * Heal the player.
   */
  public heal(amount: number): void {
    if (this.isDead) return; // Can't heal while dead
    this.health = Math.min(this.maxHealth, this.health + amount);
  }
  /**
   * Handle player death: stop movement, hide model, start respawn timer.
   */
  private die(): void {
    this.isDead = true;
    this.respawnTimer = this.respawnDelay;
    this.model.visible = false;
    // Optionally: play death animation or sound
  }
  /**
   * Respawn the player at the spawn position with full health.
   */
  private respawn(): void {
    this.isDead = false;
    this.health = this.maxHealth;
    this.respawnTimer = 0;

    // Reset collider position to spawn position
    this.collider.setTranslation(this.spawnPosition);

    // Show the model again
    this.model.visible = true;

    // Reset camera orientation
    this.cameraRig.object.rotation.set(0, 0, 0);
  }

  /**
   * Check if the player is currently dead.
   */
  public isPlayerDead(): boolean {
    return this.isDead;
  }

  /**
   * Get remaining respawn time.
   */
  public getRespawnTime(): number {
    return Math.max(0, this.respawnTimer);
  }
}
