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
    const length = 10; // or however far you want the line
    const end = origin.clone().add(direction.clone().normalize().multiplyScalar(length));
    drawDebugLine(this.scene, origin, end, 0x00ff00, 5); // green line for direction
  }

  update() {
    this.projectiles.forEach(p => p.update());
    // You can also add lifetime cleanup here
  }
}
