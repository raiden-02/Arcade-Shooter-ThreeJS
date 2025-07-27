import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { EnemyManager } from '../enemy/EnemyManager';
import { Player } from '../player/Player';
import { UIManager } from '../ui/UIManager';

import { drawDebugLine } from './DebugHelper';
import { Projectile } from './Projectile';

// Interface to avoid circular import with MultiplayerEngine
interface IMultiplayerEngine {
  isInMultiplayerMode(): boolean;
  damagePlayer(targetPlayerId: string, damage: number, weaponType: string): void;
  getNetworkPlayers(): Map<
    string,
    {
      getColliderHandle(): number;
      takeDamage(amount: number): void;
      getPlayerName(): string;
      getPosition(): { x: number; y: number; z: number };
    }
  >;
}

export class ProjectileManager {
  private projectiles: Projectile[] = [];
  // How long to keep non-explosive shell meshes before cleanup (ms)
  private shellCleanupTimeMs: number = 5000;

  // Reference to player for enemy projectile collisions
  private player?: Player;
  private ui?: UIManager;

  // Reference to multiplayer engine for remote player interactions
  private multiplayerEngine?: IMultiplayerEngine;

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
   * Set the multiplayer engine reference for remote player interactions.
   */
  public setMultiplayerEngine(engine: IMultiplayerEngine): void {
    this.multiplayerEngine = engine;
  }

  /**
   * Create a remote projectile (from other players) for visual effects only
   * These projectiles don't damage local entities but provide visual feedback
   */
  public createRemoteProjectile(
    origin: THREE.Vector3,
    direction: THREE.Vector3,
    speed: number,
    damage: number,
    playerId: string,
    weaponType: string,
  ): void {
    console.log(`Creating remote projectile from player ${playerId} using ${weaponType}`);

    // Create a visual-only projectile that doesn't interact with local entities
    const projectile = new Projectile(
      this.scene,
      this.world,
      origin,
      direction,
      speed,
      0.02, // radius
      0.1, // length
      damage,
      undefined, // no explosion radius
      'enemy', // Set as enemy so it doesn't hit remote players
    );

    this.projectiles.push(projectile);
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
            // AOE damage for enemies
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

            // AOE damage for remote players
            if (this.multiplayerEngine) {
              const remotePlayers = this.multiplayerEngine.getNetworkPlayers();
              for (const [, networkPlayer] of remotePlayers) {
                const pos = networkPlayer.getPosition();
                const posVec = new THREE.Vector3(pos.x, pos.y, pos.z);
                const sqrDist = center.distanceToSquared(posVec);
                if (sqrDist <= radiusSq) {
                  const dist = Math.sqrt(sqrDist);
                  console.log(
                    `[AOE] Explosion damaged remote player ${networkPlayer.getPlayerName()} at distance ${dist.toFixed(2)}`,
                  );
                  networkPlayer.takeDamage(projectile.damage);
                }
              }
            }

            // AOE damage for local player
            if (this.player) {
              const playerPos = this.player.getPosition();
              const playerPosVec = new THREE.Vector3(playerPos.x, playerPos.y, playerPos.z);
              const sqrDist = center.distanceToSquared(playerPosVec);
              if (sqrDist <= radiusSq) {
                const dist = Math.sqrt(sqrDist);
                console.log(`[AOE] Explosion damaged local player at distance ${dist.toFixed(2)}`);
                this.player.takeDamage(projectile.damage);
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
              } else if (this.multiplayerEngine) {
                // Check for remote player hit
                const remotePlayers = this.multiplayerEngine.getNetworkPlayers();
                for (const [playerId, networkPlayer] of remotePlayers) {
                  if (networkPlayer.getColliderHandle() === other) {
                    // Player-to-player damage!
                    networkPlayer.takeDamage(projectile.damage);
                    this.ui?.showHitMarker();
                    console.log(
                      `Local player damaged remote player ${networkPlayer.getPlayerName()} for ${projectile.damage} damage`,
                    );

                    // Send damage event to server for validation and synchronization
                    if (this.multiplayerEngine.isInMultiplayerMode()) {
                      this.multiplayerEngine.damagePlayer(playerId, projectile.damage, 'unknown');
                    }
                    break;
                  }
                }
              }
            } else if (projectile.ownerType === 'enemy' && this.player) {
              // Enemy-fired: check player hit
              if (other === this.player.getColliderHandle()) {
                this.player.takeDamage(projectile.damage);
              } else if (this.multiplayerEngine) {
                // Check for remote player hit by enemy projectile
                const remotePlayers = this.multiplayerEngine.getNetworkPlayers();
                for (const [, networkPlayer] of remotePlayers) {
                  if (networkPlayer.getColliderHandle() === other) {
                    networkPlayer.takeDamage(projectile.damage);
                    console.log(
                      `Enemy projectile hit remote player: ${networkPlayer.getPlayerName()}`,
                    );
                    break;
                  }
                }
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
