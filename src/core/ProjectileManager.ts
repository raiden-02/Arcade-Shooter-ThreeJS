//src/core/ProjectileManager.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { EnemyManager } from '../enemy/EnemyManager';

import { drawDebugLine } from './DebugHelper';
import { Projectile } from './Projectile';

export class ProjectileManager {
  private projectiles: Projectile[] = [];

  constructor(
    private scene: THREE.Scene,
    private world: RAPIER.World,
    private enemyManager?: EnemyManager,
  ) {}

  fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    // console.log('Firing from:', origin, 'in direction:', direction);
    // const debugScale = 1;
    const projectile = new Projectile(this.scene, this.world, origin, direction);
    this.projectiles.push(projectile);

    // Draw a debug line to visualize the direction
    // This is a temporary solution for debugging purposes
    const length = 10;
    const end = origin.clone().add(direction.clone().normalize().multiplyScalar(length));
    drawDebugLine(this.scene, origin, end, 0x00ff00, 5); // green line for direction
  }

  update(delta: number) {
    this.projectiles.forEach(p => p.update(delta));

    const narrowPhase = this.world.narrowPhase;
    const toRemove: Projectile[] = [];

    for (const projectile of this.projectiles) {
      if (projectile.shouldDespawn()) {
        toRemove.push(projectile);
        continue;
      }

      for (const enemy of this.enemyManager?.enemies || []) {
        if (enemy.isDead) continue;

        let hitDetected = false;

        narrowPhase.contactPair(projectile.collider.handle, enemy.collider.handle, manifold => {
          if (manifold.numContacts() > 0) {
            hitDetected = true;
          }
        });

        if (hitDetected) {
          enemy.takeDamage(50);
          toRemove.push(projectile);
          break; // don't process other enemies
        }
      }
    }

    this.projectiles = this.projectiles.filter(p => {
      if (toRemove.includes(p)) {
        p.destroy(this.scene, this.world);
        return false;
      }
      return true;
    });
  }
}
