//src/core/Projectile.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

export class Projectile {
  mesh: THREE.Mesh;
  body: RAPIER.RigidBody;
  lifetime: number = 5; // seconds

  constructor(
    scene: THREE.Scene,
    world: RAPIER.World,
    position: THREE.Vector3,
    direction: THREE.Vector3,
    debugScale: number = 1, // scale for debug purposes
  ) {
    const radius = 0.1 * debugScale;

    const geometry = new THREE.SphereGeometry(radius, 8, 8);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    scene.add(this.mesh);

    const bodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(
      position.x,
      position.y,
      position.z,
    );
    this.body = world.createRigidBody(bodyDesc);

    const colliderDesc = RAPIER.ColliderDesc.ball(radius);
    world.createCollider(colliderDesc, this.body);

    const impulse = direction.clone().multiplyScalar(15);
    this.body.applyImpulse(impulse, true);
  }

  update(delta: number) {
    // Update the lifetime
    this.lifetime -= delta;

    this.mesh.position.copy(this.body.translation());
    this.mesh.quaternion.copy(this.body.rotation());
  }

  shouldDespawn(): boolean {
    return this.lifetime <= 0;
  }

  destroy(scene: THREE.Scene, world: RAPIER.World) {
    scene.remove(this.mesh);
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
    world.removeRigidBody(this.body);
  }
}
