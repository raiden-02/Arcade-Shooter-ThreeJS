import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { EnemyManager } from '../enemy/EnemyManager';
import { Player } from '../player/Player';
import { UIManager } from '../ui/UIManager';

import { drawDebugLine } from './DebugHelper';
import { Projectile } from './Projectile';

export class ProjectileManager {
  private projectiles: Projectile[] = [];
  // How long to keep non-explosive shell meshes before cleanup (ms)
  private shellCleanupTimeMs: number = 5000;

  // Reference to player for enemy projectile collisions
  private player?: Player;
  private ui?: UIManager;

  constructor(
    private scene: THREE.Scene,
    private world: RAPIER.World,
    private enemyManager?: EnemyManager,
  ) {}
  /**
   * Set the player reference to handle enemy projectile hits.
   */
  public setPlayer(player: Player): void {
    this.player = player;
  }
  public setUIManager(ui: UIManager): void {
    this.ui = ui;
  }
  /**
   * Process Rapier collision events to explode projectiles that hit non-enemy surfaces.
   */
  public handleCollisions(eventQueue: RAPIER.EventQueue): void {
    // Drain Rapier collision start events for direct hits and shell bounces
    eventQueue.drainCollisionEvents((h1, h2, started) => {
      if (!started) return;
      for (const projectile of this.projectiles) {
        if (!projectile.active) continue;
        // Explosive single-collider
        if (projectile.explosionRadius != null) {
          const ch = projectile.collider.handle;
          if (h1 === ch || h2 === ch) {
            // Determine enemy hit (if any)
            const enemyHit = this.enemyManager?.enemies.find(e => {
              const eh = e.collider.handle;
              return (eh === h1 || eh === h2) && !e.isDead;
            });
            const center = projectile.mesh.position;
            const radius = projectile.explosionRadius;
            const radiusSq = radius * radius;
            if (enemyHit) {
              // Direct hit log
              console.log(
                `[Direct] Projectile impacted enemy at ${enemyHit.mesh.position
                  .toArray()
                  .map(v => v.toFixed(2))}`,
              );
              this.ui?.showHitMarker();
            }
            // AOE damage always
            for (const enemy of this.enemyManager?.enemies || []) {
              if (enemy.isDead) continue;
              const pos = enemy.mesh.position;
              const sqrDist = center.distanceToSquared(pos);
              if (sqrDist <= radiusSq) {
                const dist = Math.sqrt(sqrDist);
                console.log(
                  `[AOE] Explosion at ${center.toArray().map(v => v.toFixed(2))}` +
                    ` - damaging enemy at ${pos.toArray().map(v => v.toFixed(2))}` +
                    ` (dist ${dist.toFixed(2)})`,
                );
                enemy.takeDamage(projectile.damage);
                this.ui?.showHitMarker();
              }
            }
            // Remove explosive immediately
            projectile.active = false;
            projectile.destroy(this.scene, this.world);
            this.projectiles = this.projectiles.filter(p => p !== projectile);
          }
          break;
        } else {
          // Non-explosive: two colliders
          // 1) Sensor-based hits (player or enemy)
          const sensor = projectile.sensorCollider?.handle;
          if (sensor != null && (h1 === sensor || h2 === sensor)) {
            const other = h1 === sensor ? h2 : h1;
            if (projectile.ownerType === 'player') {
              // Player-fired: check enemy hit
              const enemyHit = this.enemyManager?.enemies.find(e => e.collider.handle === other);
              if (enemyHit && !enemyHit.isDead) {
                enemyHit.takeDamage(projectile.damage);
                this.ui?.showHitMarker();
              }
            } else if (projectile.ownerType === 'enemy' && this.player) {
              // Enemy-fired: check player hit
              if (other === this.player.getColliderHandle()) {
                this.player.takeDamage(projectile.damage);
              }
            }
            // Deactivate shell and schedule cleanup
            projectile.active = false;
            setTimeout(() => {
              this.world.removeRigidBody(projectile.body);
              this.scene.remove(projectile.mesh);
              projectile.mesh.geometry.dispose();
              (projectile.mesh.material as THREE.Material).dispose();
              this.projectiles = this.projectiles.filter(p => p !== projectile);
            }, this.shellCleanupTimeMs);
            break;
          }
          // 2) Physical for world collisions
          const phys = projectile.physicalCollider?.handle;
          if (phys != null && (h1 === phys || h2 === phys)) {
            // Shell hit floor/wall: deactivate after bounce
            projectile.active = false;
            setTimeout(() => {
              this.world.removeRigidBody(projectile.body);
              this.scene.remove(projectile.mesh);
              projectile.mesh.geometry.dispose();
              (projectile.mesh.material as THREE.Material).dispose();
              this.projectiles = this.projectiles.filter(p => p !== projectile);
            }, this.shellCleanupTimeMs);
            break;
          }
        }
      }
    });
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
    const speedVal = options?.speed;
    const radiusVal = options?.radius;
    const lengthVal = options?.length;
    const damageVal = options?.damage;
    const explosionRadiusVal = options?.explosionRadius;
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
    // Update all projectile meshes from physics bodies
    this.projectiles.forEach(p => p.update(delta));

    // Handle expiration for explosive and shell cleanup
    for (const projectile of this.projectiles.slice()) {
      if (!projectile.active) continue;
      if (projectile.shouldDespawn()) {
        if (projectile.explosionRadius != null) {
          // Explosive: AOE damage and immediate destroy
          const center = projectile.mesh.position;
          const radius = projectile.explosionRadius;
          const radiusSq = radius * radius;
          for (const enemy of this.enemyManager?.enemies || []) {
            if (enemy.isDead) continue;
            const pos = enemy.mesh.position;
            const sqrDist = center.distanceToSquared(pos);
            if (sqrDist <= radiusSq) {
              enemy.takeDamage(projectile.damage);
              this.ui?.showHitMarker();
            }
          }
          projectile.active = false;
          projectile.destroy(this.scene, this.world);
          this.projectiles = this.projectiles.filter(p => p !== projectile);
        } else {
          // Non-explosive shell: deactivate then schedule cleanup
          projectile.active = false;
          setTimeout(() => {
            this.world.removeRigidBody(projectile.body);
            this.scene.remove(projectile.mesh);
            projectile.mesh.geometry.dispose();
            (projectile.mesh.material as THREE.Material).dispose();
            this.projectiles = this.projectiles.filter(p => p !== projectile);
          }, this.shellCleanupTimeMs);
        }
      }
    }
  }
  /**
   * Set the enemy manager for handling projectile-enemy interactions.
   */
  public setEnemyManager(enemyManager: EnemyManager): void {
    this.enemyManager = enemyManager;
  }
  /**
   * Get all active projectiles.
   */
  public getProjectiles(): Projectile[] {
    return this.projectiles;
  }
  /**
   * Remove a projectile from the manager.
   */
  public removeProjectile(proj: Projectile): void {
    this.projectiles = this.projectiles.filter(p => p !== proj);
  }
  /**
   * Fire a projectile as an enemy (flags owner as enemy for collision logic).
   */
  public fireEnemy(
    origin: THREE.Vector3,
    direction: THREE.Vector3,
    options?: {
      speed?: number;
      radius?: number;
      length?: number;
      damage?: number;
      explosionRadius?: number;
    },
  ): void {
    const speedVal = options?.speed;
    const radiusVal = options?.radius;
    const lengthVal = options?.length;
    const damageVal = options?.damage;
    const explosionRadiusVal = options?.explosionRadius;
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
      'enemy',
    );
    this.projectiles.push(projectile);
    // Draw debug line for enemy fire
    const debugLength = 10;
    const end = origin.clone().add(direction.clone().normalize().multiplyScalar(debugLength));
    drawDebugLine(this.scene, origin, end, 0xff0000, 2);
  }
}
