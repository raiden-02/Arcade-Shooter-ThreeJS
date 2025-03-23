import { CameraRig } from './CameraRig';
import { InputManager } from '../core/InputManager';
import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d';

export class PlayerController {
    private rig: CameraRig;
    private input: InputManager;
    private body: RAPIER.RigidBody;
    private speed: number = 5;
    private lookSpeed: number = 0.002;

    constructor(rig: CameraRig, input: InputManager, body: RAPIER.RigidBody) {
        this.rig = rig;
        this.input = input;
        this.body = body;
        this.lockPointer();
    }

    private lockPointer() {
        const canvas = document.querySelector('canvas')!;
        canvas.addEventListener('click', () => {
            canvas.requestPointerLock();
        });

        document.addEventListener('pointerlockchange', () => {
            if (document.pointerLockElement !== canvas) {
                this.input.reset();
            }
        });
    }

    update(delta: number) {

        delta = delta // Temporary delta use workaround until we start using it

        // Mouse look
        const look = this.input.mouseMovement;
        this.rig.rotateYaw(-look.x * this.lookSpeed);
        this.rig.rotatePitch(-look.y * this.lookSpeed);
    
        const dir = this.input.getMovementDirection();
        const yaw = this.rig.object.rotation.y;
        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
        const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    
        const linearVelocity = this.body.linvel();
    
        if (dir.lengthSq() > 0) {
            dir.normalize();
            const moveVec = new THREE.Vector3()
                .addScaledVector(forward, -dir.z)
                .addScaledVector(right, dir.x)
                .normalize()
                .multiplyScalar(this.speed);
    
            // Apply only XZ velocity
            this.body.setLinvel(new RAPIER.Vector3(moveVec.x, linearVelocity.y, moveVec.z), true);
        } else {
            // Reset XZ velocity instantly when no input
            this.body.setLinvel(new RAPIER.Vector3(0, linearVelocity.y, 0), true);
        }
    }
    
}
