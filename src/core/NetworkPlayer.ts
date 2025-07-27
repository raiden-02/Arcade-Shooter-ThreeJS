import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { CollisionGroups } from './CollisionGroups';
import { PlayerState } from './NetworkTypes';

/**
 * NetworkPlayer represents a remote player in the local game
 * - Visual representation with physics collision for interactions
 * - Handles position/rotation updates from network
 * - Shows player name, health, and weapon
 * - Can be shot by projectiles and collides with enemies
 */
export class NetworkPlayer {
  private playerId: string;
  private playerName: string;
  private mesh: THREE.Group;
  private scene: THREE.Scene;
  private world: RAPIER.World;
  private nameTag: THREE.Sprite | null = null;
  private healthBar: THREE.Group | null = null;

  // Physics components
  private collider: RAPIER.Collider;

  // Current state
  private position: THREE.Vector3;
  private rotation: THREE.Euler;
  private health: number = 100;
  private maxHealth: number = 100;

  private weapon: string = 'none'; // Will be used for visual weapon indication in future
  private isAlive: boolean = true;

  // Visual components
  private playerGeometry: THREE.BoxGeometry;
  private playerMaterial: THREE.MeshLambertMaterial;
  private playerMesh: THREE.Mesh;

  constructor(playerId: string, playerName: string, scene: THREE.Scene, world: RAPIER.World) {
    this.playerId = playerId;
    this.playerName = playerName;
    this.scene = scene;
    this.world = world;
    this.position = new THREE.Vector3(0, 2, 0);
    this.rotation = new THREE.Euler(0, 0, 0);

    // Create the main group
    this.mesh = new THREE.Group();
    this.mesh.name = `NetworkPlayer_${playerId}`;

    // Create a simple box representation for the player
    this.playerGeometry = new THREE.BoxGeometry(0.6, 1.8, 0.6);
    this.playerMaterial = new THREE.MeshLambertMaterial({
      color: 0x4444ff, // Blue color for remote players
      transparent: true,
      opacity: 0.9,
    });
    this.playerMesh = new THREE.Mesh(this.playerGeometry, this.playerMaterial);
    this.playerMesh.position.set(0, 0.9, 0); // Center the box on the position
    this.mesh.add(this.playerMesh);

    // Create physics collider for interactions
    const colliderDesc = RAPIER.ColliderDesc.capsule(0.8, 0.4)
      .setTranslation(this.position.x, this.position.y, this.position.z)
      .setCollisionGroups(
        (CollisionGroups.PLAYER << 16) |
          CollisionGroups.DEFAULT |
          CollisionGroups.ENEMY |
          CollisionGroups.PROJECTILE,
      );
    this.collider = world.createCollider(colliderDesc);

    // Create name tag
    this.createNameTag();

    // Create health bar
    this.createHealthBar();

    // Add to scene
    this.mesh.position.copy(this.position);
    this.mesh.rotation.copy(this.rotation);
    this.scene.add(this.mesh);

    console.log(`Created NetworkPlayer with physics: ${playerName} (${playerId})`);
  }

  /**
   * Create floating name tag above player
   */
  private createNameTag(): void {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const fontSize = 24;

    canvas.width = 256;
    canvas.height = 64;

    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'white';
    context.font = `${fontSize}px Arial`;
    context.textAlign = 'center';
    context.fillText(this.playerName, canvas.width / 2, canvas.height / 2 + fontSize / 4);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    this.nameTag = new THREE.Sprite(material);
    this.nameTag.position.set(0, 2.5, 0);
    this.nameTag.scale.set(1.5, 0.375, 1);
    this.mesh.add(this.nameTag);
  }

  /**
   * Create health bar above name tag
   */
  private createHealthBar(): void {
    this.healthBar = new THREE.Group();

    // Background bar
    const bgGeometry = new THREE.PlaneGeometry(1.2, 0.15);
    const bgMaterial = new THREE.MeshBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.7,
    });
    const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
    this.healthBar.add(bgMesh);

    // Health bar
    const healthGeometry = new THREE.PlaneGeometry(1.2, 0.12);
    const healthMaterial = new THREE.MeshBasicMaterial({
      color: 0x44ff44,
      transparent: true,
    });
    const healthMesh = new THREE.Mesh(healthGeometry, healthMaterial);
    healthMesh.position.z = 0.001; // Slightly in front
    healthMesh.name = 'healthMesh';
    this.healthBar.add(healthMesh);

    this.healthBar.position.set(0, 3.0, 0);
    this.mesh.add(this.healthBar);
  }

  /**
   * Update player state from network
   */
  public updateState(state: PlayerState): void {
    // Update position
    this.position.set(state.position.x, state.position.y, state.position.z);
    this.mesh.position.copy(this.position);

    // Update physics collider position
    const newPosition = new RAPIER.Vector3(state.position.x, state.position.y, state.position.z);
    this.collider.setTranslation(newPosition);

    // Update rotation
    this.rotation.set(state.rotation.x, state.rotation.y, state.rotation.z);
    this.mesh.rotation.copy(this.rotation);

    // Update health
    if (state.health !== this.health) {
      this.health = state.health;
      this.updateHealthBar();
    }

    // Update alive state
    if (state.isAlive !== this.isAlive) {
      this.isAlive = state.isAlive;
      this.updateVisibility();
    }

    // Update weapon (visual indication could be added later)
    this.weapon = state.weapon;
  }

  /**
   * Update health bar visual
   */
  private updateHealthBar(): void {
    if (!this.healthBar) return;

    const healthMesh = this.healthBar.getObjectByName('healthMesh') as THREE.Mesh;
    if (!healthMesh) return;

    const healthPercent = Math.max(0, this.health / this.maxHealth);

    // Update scale to show health percentage
    healthMesh.scale.x = healthPercent;

    // Update color based on health
    const material = healthMesh.material as THREE.MeshBasicMaterial;
    if (healthPercent > 0.6) {
      material.color.setHex(0x44ff44); // Green
    } else if (healthPercent > 0.3) {
      material.color.setHex(0xffff44); // Yellow
    } else {
      material.color.setHex(0xff4444); // Red
    }
  }

  /**
   * Update visibility based on alive state
   */
  private updateVisibility(): void {
    if (this.isAlive) {
      this.playerMaterial.opacity = 0.9;
      this.mesh.visible = true;
    } else {
      // Make player semi-transparent when dead
      this.playerMaterial.opacity = 0.3;
      // Could add death animation/effects here
    }
  }

  /**
   * Set player color (for teams, etc.)
   */
  public setColor(color: number): void {
    this.playerMaterial.color.setHex(color);
  }

  /**
   * Get player ID
   */
  public getPlayerId(): string {
    return this.playerId;
  }

  /**
   * Get player name
   */
  public getPlayerName(): string {
    return this.playerName;
  }

  /**
   * Get current position
   */
  public getPosition(): THREE.Vector3 {
    return this.position.clone();
  }

  /**
   * Get current health
   */
  public getHealth(): number {
    return this.health;
  }

  /**
   * Check if player is alive
   */
  public isPlayerAlive(): boolean {
    return this.isAlive;
  }

  /**
   * Get the collider handle for collision detection
   */
  public getColliderHandle(): number {
    return this.collider.handle;
  }

  /**
   * Apply damage to the remote player (for multiplayer combat)
   */
  public takeDamage(amount: number): void {
    if (!this.isAlive) return;

    console.log(`Remote player ${this.playerName} took ${amount} damage`);
    this.health = Math.max(0, this.health - amount);
    this.updateHealthBar();

    if (this.health <= 0) {
      this.isAlive = false;
      this.updateVisibility();
      console.log(`Remote player ${this.playerName} died`);
    }
  }

  /**
   * Clean up and remove from scene
   */
  public dispose(): void {
    // Remove physics collider
    if (this.collider && this.world) {
      this.world.removeCollider(this.collider, true);
    }

    // Remove from scene
    if (this.mesh.parent) {
      this.mesh.parent.remove(this.mesh);
    }

    // Dispose geometries
    this.playerGeometry.dispose();

    // Dispose materials
    this.playerMaterial.dispose();

    // Dispose name tag texture
    if (this.nameTag && this.nameTag.material.map) {
      this.nameTag.material.map.dispose();
      this.nameTag.material.dispose();
    }

    // Dispose health bar materials
    if (this.healthBar) {
      this.healthBar.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }

    console.log(`Disposed NetworkPlayer with physics: ${this.playerName} (${this.playerId})`);
  }

  /**
   * Get current weapon (for future weapon visual indication)
   */
  public getCurrentWeapon(): string {
    return this.weapon;
  }

  /**
   * Update name tag to always face camera
   */
  public updateNameTag(camera: THREE.Camera): void {
    if (this.nameTag) {
      this.nameTag.lookAt(camera.position);
    }
    if (this.healthBar) {
      this.healthBar.lookAt(camera.position);
    }
  }
}
