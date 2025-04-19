//src/core/Projectile.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

export class Projectile {
  mesh: THREE.Mesh;
  body: RAPIER.RigidBody;
  lifetime: number = 4; // seconds
  colliderHandle: RAPIER.ColliderHandle;
  collider: RAPIER.Collider;
  radius: number;
  length: number;
  speed: number;

  constructor(
    scene: THREE.Scene,
    world: RAPIER.World,
    position: THREE.Vector3,
    direction: THREE.Vector3,
    speed: number = 1,
    radius: number = 0.05,
    length: number = 0.1,
  ) {
    const debugScale: number = 1; // scale for debug purposes
    this.radius = radius * debugScale;
    this.length = length * debugScale;

    const geometry = new THREE.CapsuleGeometry(this.radius, this.length);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    this.mesh.rotateX(Math.PI / 2); // Align the capsule with the Z axis
    scene.add(this.mesh);

    // Rotate the capsule to point in the direction of movement
    // This is a bit tricky because THREE.js uses a right-handed coordinate system
    // while RAPIER uses a left-handed coordinate system
    // We need to rotate the capsule around the Y-axis by 90 degrees
    // to align it with the Z-axis of RAPIER
    const up = new THREE.Vector3(0, 1, 0); // capsule’s default up-axis
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction.clone().normalize());

    const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(position.x, position.y, position.z)
      .setRotation({ x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w })
      .setCcdEnabled(true); // Enable Continuous Collision Detection fixes tunelling and missed collisions
    this.body = world.createRigidBody(bodyDesc);

    // This is Y aligned in the physics world RAPIER
    const halfheight = this.length / 2;
    const colliderDesc = RAPIER.ColliderDesc.capsule(this.radius, halfheight);
    this.collider = world.createCollider(colliderDesc, this.body);
    this.colliderHandle = this.collider.handle;

    this.speed = speed;

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
