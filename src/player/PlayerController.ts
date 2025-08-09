import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { IInputManager } from '../interfaces/IInputManager';

import { CameraRig } from './CameraRig';

export class PlayerController {
  private rig: CameraRig;
  private input: IInputManager;
  private controller: RAPIER.KinematicCharacterController;
  private collider: RAPIER.Collider;
  private speed: number = 5;
  private lookSpeed: number = 0.002;
  private jumpForce: number = 6;
  private gravity: number = 9.81;
  private verticalVelocity: number = 0;
  private canJump: boolean = true;

  constructor(
    rig: CameraRig,
    input: IInputManager,
    controller: RAPIER.KinematicCharacterController,
    collider: RAPIER.Collider,
  ) {
    this.rig = rig;
    this.input = input;
    this.controller = controller;
    this.collider = collider;
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
        // Note: reset() method not available in interface
        // Input manager should handle pointer lock state internally
      }
    });
  }

  /**
   * Update each frame: handle input, drive kinematic controller movement, and jumping.
   * @param delta - elapsed time in seconds
   */
  public update(delta: number): void {
    // Mouse look
    const look = this.input.getMouseDelta();
    this.rig.rotateYaw(-look.x * this.lookSpeed);
    this.rig.rotatePitch(-look.y * this.lookSpeed);

    // Reset mouse delta after using it
    if ('resetMouseDelta' in this.input) {
      (this.input as any).resetMouseDelta();
    }

    // Get current input state
    const currentInput = this.input.getCurrentInput();

    // Horizontal movement input
    const dir = new THREE.Vector3();
    if (currentInput.moveForward) dir.z -= 1;
    if (currentInput.moveBackward) dir.z += 1;
    if (currentInput.moveLeft) dir.x -= 1;
    if (currentInput.moveRight) dir.x += 1;
    let moveVec = new THREE.Vector3();
    if (dir.lengthSq() > 0) {
      dir.normalize();
      const yaw = this.rig.object.rotation.y;
      const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
      const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
      moveVec.addScaledVector(forward, -dir.z).addScaledVector(right, dir.x).normalize();
      // Check for sprint using shift key
      const speed = this.input.isKeyPressed('ShiftLeft') ? this.speed * 1.8 : this.speed;
      moveVec.multiplyScalar(speed);
    }

    // Jump initiation
    if (currentInput.jump && this.canJump && this.controller.computedGrounded()) {
      this.verticalVelocity = this.jumpForce;
      this.canJump = false;
    } else if (!currentInput.jump) {
      this.canJump = true;
    }

    // Apply gravity to vertical velocity
    this.verticalVelocity -= this.gravity * delta;

    // Desired translation delta
    const desiredDelta = {
      x: moveVec.x * delta,
      y: this.verticalVelocity * delta,
      z: moveVec.z * delta,
    };
    // Preserve previous position for manual translation
    const prevPos = this.collider.translation();
    // Compute movement with character controller (handles sliding, steps, slopes)
    this.controller.computeColliderMovement(this.collider, desiredDelta);
    // Apply the computed movement to the collider's translation
    const movement = this.controller.computedMovement();
    const newPos = new RAPIER.Vector3(
      prevPos.x + movement.x,
      prevPos.y + movement.y,
      prevPos.z + movement.z,
    );
    this.collider.setTranslation(newPos);
  }
}
