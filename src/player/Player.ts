// src/player/Player.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { InputManager } from '../core/InputManager';
import { PhysicsHelper } from '../core/PhysicsHelper';

import { CameraRig } from './CameraRig';
import { PlayerController } from './PlayerController';

/**
 * Represents the player entity, including 3D model, physics body, camera, and controller.
 */
// Augmented rigid body with collider reference
type BodyWithCollider = RAPIER.RigidBody & { _collider: RAPIER.Collider };
export class Player {
  /** Root object for all player components. */
  public root: THREE.Object3D;
  private camera: THREE.PerspectiveCamera;
  private cameraRig: CameraRig;
  private model: THREE.Mesh;
  private body: BodyWithCollider;
  // Collider for player (for projectile hits)
  private collider: RAPIER.Collider;
  private controller: PlayerController;
  // Player health
  private maxHealth: number;
  private health: number;

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

    // Create physics body for the player, augmented with a collider reference
    // The physics body is augmented with a private collider reference
    type BodyWithCollider = RAPIER.RigidBody & { _collider: RAPIER.Collider };
    this.body = physics.createPlayerBody(spawnPos) as BodyWithCollider;
    this.collider = this.body._collider;

    // Create controller to handle input and movement
    this.controller = new PlayerController(this.cameraRig, input, this.body, physics.world);
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
  public update(): void {
    // Process input and update physics body (movement, jumping, etc.)
    this.controller.update();

    // Sync root position to physics body
    const pos = this.body.translation();
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
    this.health = Math.max(0, this.health - amount);
  }
  /**
   * Heal the player.
   */
  public heal(amount: number): void {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }
}
