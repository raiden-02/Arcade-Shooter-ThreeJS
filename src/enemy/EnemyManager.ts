import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { Enemy } from './Enemy';

export class EnemyManager {
  private _enemies: Enemy[] = [];

  constructor(
    private scene: THREE.Scene,
    private world: RAPIER.World,
  ) {}

  spawnEnemy(position: THREE.Vector3) {
    const enemy = new Enemy(this.scene, this.world, position);
    this.enemies.push(enemy);
  }

  get enemies(): Enemy[] {
    return this._enemies;
  }

  update() {
    this.enemies.forEach(enemy => enemy.update());
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
