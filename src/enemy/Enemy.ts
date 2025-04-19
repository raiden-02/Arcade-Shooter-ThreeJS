import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { CollisionGroups } from '../core/CollisionGroups';

export class Enemy {
  mesh: THREE.Mesh;
  body: RAPIER.RigidBody;
  health: number = 100;
  isDead: boolean = false;
  collider: RAPIER.Collider;

  constructor(scene: THREE.Scene, world: RAPIER.World, position: THREE.Vector3) {
    // Geometry (can be replaced with GLTF later)
    const geometry = new THREE.CapsuleGeometry(0.5, 1.0);
    const material = new THREE.MeshStandardMaterial({ color: 0x990000, wireframe: false }); // enable wireframe for collision debugging
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    scene.add(this.mesh);

    // Physics body
    const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(position.x, position.y, position.z)
      .setLinearDamping(0.8);
    this.body = world.createRigidBody(bodyDesc);

    this.body.lockRotations(true, true);

    const colliderDesc = RAPIER.ColliderDesc.capsule(0.5, 0.5).setCollisionGroups(
      (CollisionGroups.ENEMY << 16) | CollisionGroups.PROJECTILE | CollisionGroups.DEFAULT,
    );
    this.collider = world.createCollider(colliderDesc, this.body);
  }

  update() {
    if (this.isDead) return;

    const pos = this.body.translation();
    this.mesh.position.set(pos.x, pos.y, pos.z);
    this.mesh.quaternion.copy(this.body.rotation());

    // Placeholder movement (sway left and right)
    // const sway = Math.sin(Date.now() * 0.001) * 2;
    // this.body.setLinvel({ x: sway, y: this.body.linvel().y, z: 0 }, true);
  }

  takeDamage(amount: number) {
    console.log(`Enemy took ${amount} damage!`);
    this.health -= amount;
    if (this.health <= 0 && !this.isDead) {
      this.die();
    }
  }

  die() {
    this.isDead = true;

    // Remove from scene
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
    this.mesh.removeFromParent();

    // Remove from physics world
    this.body.setEnabled(false); // safer than removeRigidBody if you want to reuse
    this.collider.setEnabled(false);
  }
}
