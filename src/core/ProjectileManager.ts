//src/core/ProjectileManager.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { Enemy } from '../enemy/Enemy';
import { EnemyManager } from '../enemy/EnemyManager';

import { drawDebugLine } from './DebugHelper';
import { Projectile } from './Projectile';

export class ProjectileManager {
  private projectiles: Projectile[] = [];
  // How long to keep non-explosive shell meshes before cleanup (ms)
  private shellCleanupTimeMs: number = 5000;

  constructor(
    private scene: THREE.Scene,
    private world: RAPIER.World,
    private enemyManager?: EnemyManager,
  ) {}
  /**
   * Process Rapier collision events to explode projectiles that hit non-enemy surfaces.
   */
  public handleCollisions(eventQueue: RAPIER.EventQueue): void {
    const toRemove: Projectile[] = [];
    // Drain all collision start events
    eventQueue.drainCollisionEvents((h1, h2, started) => {
      if (!started) return;
      for (const projectile of this.projectiles) {
        const ph = projectile.collider.handle;
        if (ph !== h1 && ph !== h2) continue;
        // Determine if an enemy was involved in this collision
        const enemyHit = this.enemyManager?.enemies.find(e => {
          const eh = e.collider.handle;
          return (eh === h1 || eh === h2) && !e.isDead;
        });
        // On first non-enemy collision, remove projectile immediately
        if (!enemyHit) {
          // Explosive projectiles still deal AOE
          if (projectile.explosionRadius != null) {
            const center = projectile.mesh.position;
            const radius = projectile.explosionRadius;
            const radiusSq = radius * radius;
            for (const enemy of this.enemyManager?.enemies || []) {
              if (enemy.isDead) continue;
              const pos = enemy.mesh.position;
              const sqrDist = center.distanceToSquared(pos);
              if (sqrDist <= radiusSq) {
                const dist = Math.sqrt(sqrDist);
                console.log(
                  `[AOE] Explosion at ${center
                    .toArray()
                    .map(v => v.toFixed(2))} - damaging enemy at ${pos
                    .toArray()
                    .map(v => v.toFixed(2))} (dist ${dist.toFixed(2)})`,
                );
                enemy.takeDamage(projectile.damage);
              }
            }
          }
          // Queue for removal
          toRemove.push(projectile);
        }
        break;
      }
    });
    // Remove exploded projectiles
    if (toRemove.length > 0) {
      const removeSet = new Set<Projectile>(toRemove);
      this.projectiles = this.projectiles.filter(p => {
        if (removeSet.has(p)) {
          if (p.explosionRadius != null) {
            // Explosive: remove mesh and physics
            p.destroy(this.scene, this.world);
          } else {
            // Non-explosive: remove physics only (keep mesh as static shell)
            this.world.removeRigidBody(p.body);
            // Schedule mesh cleanup after shellCleanupTimeMs
            const mesh = p.mesh;
            const geom = mesh.geometry;
            const mat = mesh.material as THREE.Material;
            setTimeout(() => {
              this.scene.remove(mesh);
              geom.dispose();
              mat.dispose();
            }, this.shellCleanupTimeMs);
          }
          return false;
        }
        return true;
      });
    }
  }

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
        // Area-of-effect damage on expiration (squared-distance check for performance)
        if (projectile.explosionRadius != null) {
          const center = projectile.mesh.position;
          const radius = projectile.explosionRadius;
          const radiusSq = radius * radius;
          for (const enemy of this.enemyManager?.enemies || []) {
            if (enemy.isDead) continue;
            const pos = enemy.mesh.position;
            const sqrDist = center.distanceToSquared(pos);
            if (sqrDist <= radiusSq) {
              const dist = Math.sqrt(sqrDist);
              console.log(
                `[AOE] Projectile exploded at ${center
                  .toArray()
                  .map(v => v.toFixed(2))} - damaging enemy at ${pos
                  .toArray()
                  .map(v => v.toFixed(2))} (dist ${dist.toFixed(2)})`,
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
          const radius = projectile.explosionRadius;
          const radiusSq = radius * radius;
          // Log direct impact before area damage
          console.log(
            `[Direct] Projectile impacted enemy at ${collidedEnemy.mesh.position
              .toArray()
              .map(v => v.toFixed(2))}`,
          );
          // Area-of-effect explosion damage (squared-distance check)
          for (const enemy of this.enemyManager?.enemies || []) {
            if (enemy.isDead) continue;
            const pos = enemy.mesh.position;
            const sqrDist = center.distanceToSquared(pos);
            if (sqrDist <= radiusSq) {
              const dist = Math.sqrt(sqrDist);
              console.log(
                `[AOE] Exploding at ${center
                  .toArray()
                  .map(v => v.toFixed(2))} - damaging enemy at ${pos
                  .toArray()
                  .map(v => v.toFixed(2))} (dist ${dist.toFixed(2)})`,
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
        if (p.explosionRadius != null) {
          // Explosive: remove mesh and physics immediately
          p.destroy(this.scene, this.world);
        } else {
          // Non-explosive: remove physics only (keep mesh as static shell)
          this.world.removeRigidBody(p.body);
          // Schedule mesh cleanup
          const mesh = p.mesh;
          const geom = mesh.geometry;
          const mat = mesh.material as THREE.Material;
          setTimeout(() => {
            this.scene.remove(mesh);
            geom.dispose();
            mat.dispose();
          }, this.shellCleanupTimeMs);
        }
        return false;
      }
      return true;
    });
  }
}
