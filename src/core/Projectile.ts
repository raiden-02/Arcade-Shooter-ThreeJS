//src/core/Projectile.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { CollisionGroups } from './CollisionGroups';

export class Projectile {
  mesh: THREE.Mesh;
  body: RAPIER.RigidBody;
  lifetime: number = 4; // seconds
  colliderHandle: RAPIER.ColliderHandle;
  collider: RAPIER.Collider;
  radius: number;
  length: number;
  speed: number;
  // damage applied on hit
  damage: number;
  /** optional radius for area-of-effect explosion */
  explosionRadius?: number;

  constructor(
    scene: THREE.Scene,
    world: RAPIER.World,
    position: THREE.Vector3,
    direction: THREE.Vector3,
    // projectile parameters
    speed: number = 1,
    radius: number = 0.05,
    length: number = 0.1,
    damage: number = 50,
    // optional explosion radius for AOE
    explosionRadius?: number,
  ) {
    this.explosionRadius = explosionRadius;
    const debugScale: number = 1; // scale for debug purposes
    this.radius = radius * debugScale;
    this.length = length * debugScale;

    const geometry = new THREE.CapsuleGeometry(this.radius, this.length);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    scene.add(this.mesh);

    // Orient mesh and physics body to point along the fire direction
    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0), // capsule’s default up-axis
      direction.clone().normalize(),
    );
    this.mesh.quaternion.copy(quaternion);

    const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(position.x, position.y, position.z)
      .setRotation({ x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w })
      .setCcdEnabled(true); // Continuous Collision Detection to prevent tunneling
    this.body = world.createRigidBody(bodyDesc);

    // This is Y aligned in the physics world RAPIER
    const halfheight = this.length / 2;
    const colliderDesc = RAPIER.ColliderDesc.capsule(this.radius, halfheight)
      .setCollisionGroups(
        (CollisionGroups.PROJECTILE << 16) | CollisionGroups.ENEMY | CollisionGroups.DEFAULT,
      )
      // Enable collision events so we can detect hits on non-enemy surfaces
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    this.collider = world.createCollider(colliderDesc, this.body);
    this.colliderHandle = this.collider.handle;

    this.speed = speed;
    this.damage = damage;

    // Apply impulse in correct direction (Z forward)
    const impulse = direction.clone().normalize().multiplyScalar(this.speed);
    this.body.applyImpulse({ x: impulse.x, y: impulse.y, z: impulse.z }, true);
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
