//src/player/PlayerController.ts

import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { InputManager } from '../core/InputManager';

import { CameraRig } from './CameraRig';

export class PlayerController {
  private rig: CameraRig;
  private input: InputManager;
  private body: RAPIER.RigidBody;
  private speed: number = 5;
  private lookSpeed: number = 0.002;
  private jumpForce: number = 6;
  private world: RAPIER.World;
  private canJump = true;

  constructor(rig: CameraRig, input: InputManager, body: RAPIER.RigidBody, world: RAPIER.World) {
    this.rig = rig;
    this.input = input;
    this.body = body;
    this.world = world;
    this.lockPointer();
  }

  private lockPointer() {
    const canvas = document.querySelector('canvas')!;
    canvas.addEventListener('click', () => {
      // console.log('Requesting pointer lock');
      canvas.requestPointerLock();
    });

    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== canvas) {
        this.input.reset();
      }
    });
  }

  private isOnGround(): boolean {
    const origin = this.body.translation();

    // Offset the origin slightly above the feet
    const rayOrigin = new RAPIER.Vector3(origin.x, origin.y - 0.9, origin.z);
    const rayDir = new RAPIER.Vector3(0, -1, 0);
    const ray = new RAPIER.Ray(rayOrigin, rayDir);
    const maxDistance = 0.2; // just enough to hit floor beneath capsule

    const hit = this.world.castRay(ray, maxDistance, true);

    if (!hit) return false;

    const hitParent = hit.collider.parent();
    return hitParent !== null && hitParent.handle !== this.body.handle;
  }

  update() {
    // will want to include delta here as argument later
    // delta = delta; // Temporary delta use workaround until we start using it

    // Mouse look
    const look = this.input.mouseMovement;
    this.rig.rotateYaw(-look.x * this.lookSpeed);
    this.rig.rotatePitch(-look.y * this.lookSpeed);

    const dir = this.input.getMovementDirection();
    const yaw = this.rig.object.rotation.y;
    const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);

    const linearVelocity = this.body.linvel();

    // Apply movement
    if (dir.lengthSq() > 0) {
      dir.normalize();
      const moveVec = new THREE.Vector3()
        .addScaledVector(forward, -dir.z)
        .addScaledVector(right, dir.x)
        .normalize();

      // Apply sprinting speed
      const speed = this.input.isSprinting() ? this.speed * 1.8 : this.speed;
      moveVec.multiplyScalar(speed);

      // Apply only XZ velocity
      this.body.setLinvel(new RAPIER.Vector3(moveVec.x, linearVelocity.y, moveVec.z), true);
    } else {
      // Reset XZ velocity instantly when no input
      this.body.setLinvel(new RAPIER.Vector3(0, linearVelocity.y, 0), true);
    }

    // console.log(this.input.isJumpPressed(), this.isOnGround());

    // Jumping
    if (this.input.isJumpPressed()) {
      if (this.canJump && this.isOnGround()) {
        const velocity = this.body.linvel();
        this.body.setLinvel(new RAPIER.Vector3(velocity.x, this.jumpForce, velocity.z), true);
        this.canJump = false;
      }
    } else {
      this.canJump = true;
    }
  }
}
