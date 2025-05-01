import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { ProjectileManager } from '../core/ProjectileManager';
import { Player } from '../player/Player';

import { Enemy } from './Enemy';

export class EnemyManager {
  private _enemies: Enemy[] = [];

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
   * Spawn an enemy at a given world position.
   */
  spawnEnemy(position: THREE.Vector3) {
    const enemy = new Enemy(
      this.scene,
      this.world,
      position,
      this.projectileManager,
      this.player,
      this.camera,
    );
    this._enemies.push(enemy);
  }

  /** List of managed enemies */
  get enemies(): Enemy[] {
    return this._enemies;
  }

  /**
   * Update all enemies: movement, shooting, UI.
   * @param delta - time since last frame (s)
   * @param elapsedTime - total elapsed time (s)
   */
  update(delta: number, elapsedTime: number) {
    this._enemies.forEach(enemy => enemy.update(delta, elapsedTime));
  }

  handleProjectileHit(pos: THREE.Vector3) {
    this.enemies.forEach(enemy => {
      if (enemy.isDead) return;
      const enemyPos = enemy.mesh.position;
      const distance = pos.distanceTo(enemyPos);
      if (distance < 1) {
        enemy.takeDamage(50); // Later: differentiate damage based on part hit
      }
    });
  }
}
