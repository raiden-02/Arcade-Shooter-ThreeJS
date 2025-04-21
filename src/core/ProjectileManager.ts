//src/core/ProjectileManager.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { Enemy } from '../enemy/Enemy';
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

  /**
   * Fire a projectile from origin in direction with optional parameters.
   */
  fire(
    origin: THREE.Vector3,
    direction: THREE.Vector3,
    options?: {
      speed?: number;
      radius?: number;
      length?: number;
      damage?: number;
      explosionRadius?: number;
    },
  ) {
    // Use provided options or fall back to Projectile defaults
    const speedVal = options?.speed ?? undefined;
    const radiusVal = options?.radius ?? undefined;
    const lengthVal = options?.length ?? undefined;
    const damageVal = options?.damage ?? undefined;
    const explosionRadiusVal = options?.explosionRadius ?? undefined;
    const projectile = new Projectile(
      this.scene,
      this.world,
      origin,
      direction,
      speedVal,
      radiusVal,
      lengthVal,
      damageVal,
      explosionRadiusVal,
    );
    this.projectiles.push(projectile);

    // Draw a debug line to visualize the direction (temporary)
    const debugLength = 10;
    const end = origin.clone().add(direction.clone().normalize().multiplyScalar(debugLength));
    drawDebugLine(this.scene, origin, end, 0x00ff00, 5);
  }

  update(delta: number) {
    this.projectiles.forEach(p => p.update(delta));

    const narrowPhase = this.world.narrowPhase;
    const toRemove: Projectile[] = [];

    for (const projectile of this.projectiles) {
      // Check for lifetime expiration (explode on despawn for explosives)
      if (projectile.shouldDespawn()) {
        // Area-of-effect damage on expiration
        if (projectile.explosionRadius != null) {
          const center = projectile.mesh.position;
          for (const enemy of this.enemyManager?.enemies || []) {
            if (enemy.isDead) continue;
            const distance = center.distanceTo(enemy.mesh.position);
            if (distance <= projectile.explosionRadius) {
              console.log(
                `[AOE] Projectile exploded at ${center
                  .toArray()
                  .map(v => v.toFixed(2))} - damaging enemy at ${enemy.mesh.position
                  .toArray()
                  .map(v => v.toFixed(2))} (dist ${distance.toFixed(2)})`,
              );
              enemy.takeDamage(projectile.damage);
            }
          }
        }
        toRemove.push(projectile);
        continue;
      }
      // Collision detection
      let collidedEnemy: Enemy | null = null;
      for (const enemy of this.enemyManager?.enemies || []) {
        if (enemy.isDead) continue;
        let hitDetected = false;
        narrowPhase.contactPair(projectile.collider.handle, enemy.collider.handle, manifold => {
          if (manifold.numContacts() > 0) {
            hitDetected = true;
          }
        });
        if (hitDetected) {
          collidedEnemy = enemy;
          break;
        }
      }
      if (collidedEnemy) {
        if (projectile.explosionRadius != null) {
          const center = projectile.mesh.position;
          // Log direct impact before area damage
          console.log(
            `[Direct] Projectile impacted enemy at ${collidedEnemy.mesh.position
              .toArray()
              .map(v => v.toFixed(2))}`,
          );
          // Area-of-effect explosion damage
          for (const enemy of this.enemyManager?.enemies || []) {
            if (enemy.isDead) continue;
            const distance = center.distanceTo(enemy.mesh.position);
            if (distance <= projectile.explosionRadius) {
              console.log(
                `[AOE] Exploding at ${center
                  .toArray()
                  .map(v => v.toFixed(2))} - damaging enemy at ${enemy.mesh.position
                  .toArray()
                  .map(v => v.toFixed(2))} (dist ${distance.toFixed(2)})`,
              );
              enemy.takeDamage(projectile.damage);
            }
          }
        } else {
          console.log(
            `[Direct] Projectile hit enemy at ${collidedEnemy.mesh.position
              .toArray()
              .map(v => v.toFixed(2))} - damage ${projectile.damage}`,
          );
          collidedEnemy.takeDamage(projectile.damage);
        }
        toRemove.push(projectile);
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
