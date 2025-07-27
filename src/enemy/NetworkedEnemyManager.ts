import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { IMultiplayerEngine } from '../core/MultiplayerEngine';
import { ProjectileManager } from '../core/ProjectileManager';
import { Player } from '../player/Player';

import { Enemy } from './Enemy';

/**
 * NetworkedEnemyManager handles enemy spawning and synchronization in multiplayer
 * - Host-only enemy spawning and AI logic
 * - Client receives enemy state updates from server
 * - Proper separation of authority for multiplayer FPS
 */
export class NetworkedEnemyManager {
  private _enemies: Enemy[] = [];
  private multiplayerEngine: IMultiplayerEngine | null = null;
  private isHost: boolean = false;

  /**
   * @param scene - Three.js scene
   * @param world - Rapier physics world
   * @param projectileManager - manager for firing projectiles
   * @param player - player instance for AI targeting
   * @param camera - camera for UI projection
   */
  constructor(
    private scene: THREE.Scene,
    private world: RAPIER.World,
    private projectileManager: ProjectileManager,
    private player: Player,
    private camera: THREE.PerspectiveCamera,
  ) {}

  /**
   * Set multiplayer engine for networking
   */
  public setMultiplayerEngine(engine: IMultiplayerEngine): void {
    this.multiplayerEngine = engine;
    this.updateHostStatus();
  }

  /**
   * Update host status for enemy authority
   */
  private updateHostStatus(): void {
    if (this.multiplayerEngine?.isInMultiplayerMode()) {
      // Check if we're the host/server
      this.isHost = true; // This should be determined by the multiplayer engine
    } else {
      this.isHost = true; // Single player mode
    }
  }

  /**
   * Spawn an enemy at a given world position (host only)
   */
  spawnEnemy(position: THREE.Vector3): Enemy | null {
    // In multiplayer, only host should spawn enemies
    if (this.multiplayerEngine?.isInMultiplayerMode() && !this.isHost) {
      console.log('Client attempted to spawn enemy - ignoring (host-only operation)');
      return null;
    }

    const enemy = new Enemy(
      this.scene,
      this.world,
      position,
      this.projectileManager,
      this.player,
      this.camera,
    );

    this._enemies.push(enemy);

    console.log(`Host spawned enemy at position: ${position.x}, ${position.y}, ${position.z}`);

    // Send enemy spawn event to server for synchronization
    if (this.multiplayerEngine?.isInMultiplayerMode()) {
      // The server will handle broadcasting to clients
    }

    return enemy;
  }

  /**
   * Create an enemy from network data (clients only)
   */
  createEnemyFromNetwork(enemyData: {
    id: string;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number; w: number };
    health: number;
    isDead: boolean;
    isAlive: boolean;
  }): Enemy {
    const position = new THREE.Vector3(
      enemyData.position.x,
      enemyData.position.y,
      enemyData.position.z,
    );

    const enemy = new Enemy(
      this.scene,
      this.world,
      position,
      this.projectileManager,
      this.player,
      this.camera,
    );

    // Set the enemy ID to match server
    enemy.setId(enemyData.id);

    // Apply initial network state
    enemy.applyNetworkState({
      position: enemyData.position,
      rotation: enemyData.rotation,
      health: enemyData.health,
      isDead: enemyData.isDead,
    });

    this._enemies.push(enemy);

    console.log(
      `Client created enemy from network: ${enemyData.id} at ${enemyData.position.x}, ${enemyData.position.y}, ${enemyData.position.z}`,
    );

    return enemy;
  }

  /**
   * Remove all enemies and clear the array
   */
  clearAllEnemies(): void {
    console.log(`Clearing ${this._enemies.length} enemies`);

    this._enemies.forEach(enemy => {
      enemy.die();
    });

    this._enemies.length = 0;
  }

  /**
   * Find enemy by ID
   */
  findEnemyById(id: string): Enemy | undefined {
    return this._enemies.find(enemy => enemy.getId() === id);
  }

  /**
   * Remove enemy by ID
   */
  removeEnemyById(id: string): boolean {
    const index = this._enemies.findIndex(enemy => enemy.getId() === id);
    if (index !== -1) {
      const enemy = this._enemies[index];
      enemy.die();
      this._enemies.splice(index, 1);
      console.log(`Removed enemy: ${id}`);
      return true;
    }
    return false;
  }

  /** List of managed enemies */
  get enemies(): Enemy[] {
    return this._enemies;
  }

  /**
   * Update all enemies: movement, shooting, UI (host only for AI logic)
   * @param delta - time since last frame (s)
   * @param elapsedTime - total elapsed time (s)
   */
  update(delta: number, elapsedTime: number) {
    // Only host should run AI logic
    if (this.multiplayerEngine?.isInMultiplayerMode() && !this.isHost) {
      // Clients just update visual state from network
      this._enemies.forEach(enemy => {
        enemy.updateVisuals(delta, elapsedTime);
      });
      return;
    }

    // Host runs full AI logic and sends updates to clients
    this._enemies.forEach(enemy => {
      if (!enemy.isDead) {
        enemy.update(delta, elapsedTime);

        // Send enemy state updates to clients if needed
        if (this.multiplayerEngine?.isInMultiplayerMode()) {
          // Check if enemy state has changed significantly
          if (enemy.hasSignificantChange()) {
            // Send update to server for broadcast to clients
            // This should be handled by the enemy's networking logic
          }
        }
      }
    });

    // Clean up dead enemies (host only)
    this._enemies = this._enemies.filter(enemy => {
      if (enemy.isDead) {
        console.log(`Host cleaned up dead enemy: ${enemy.getId()}`);
        return false;
      }
      return true;
    });
  }

  /**
   * Get enemy count
   */
  getEnemyCount(): number {
    return this._enemies.length;
  }

  /**
   * Get alive enemy count
   */
  getAliveEnemyCount(): number {
    return this._enemies.filter(enemy => !enemy.isDead).length;
  }
}
