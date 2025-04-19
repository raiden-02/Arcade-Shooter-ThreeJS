//src/core/ProjectileManager.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { drawDebugLine } from './DebugHelper';
import { Projectile } from './Projectile';

export class ProjectileManager {
  private projectiles: Projectile[] = [];

  constructor(
    private scene: THREE.Scene,
    private world: RAPIER.World,
  ) {}

  fire(origin: THREE.Vector3, direction: THREE.Vector3) {
    console.log('Firing from:', origin, 'in direction:', direction);
    const debugScale = 5;
    const projectile = new Projectile(this.scene, this.world, origin, direction, debugScale);
    this.projectiles.push(projectile);

    // Draw a debug line to visualize the direction
    // This is a temporary solution for debugging purposes
    const length = 10;
    const end = origin.clone().add(direction.clone().normalize().multiplyScalar(length));
    drawDebugLine(this.scene, origin, end, 0x00ff00, 5); // green line for direction
  }

  update(delta: number) {
    this.projectiles.forEach(p => p.update(delta));

    // Remove expired projectiles
    this.projectiles = this.projectiles.filter(p => {
      if (p.shouldDespawn()) {
        p.destroy(this.scene, this.world);
        return false;
      }
      return true;
    });
  }
}
