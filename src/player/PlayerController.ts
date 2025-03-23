// /src/player/PlayerController.ts
import { CameraRig } from './CameraRig';
import { InputManager } from '../core/InputManager';
import * as THREE from 'three';

export class PlayerController {
    private rig: CameraRig;
    private input: InputManager;
    private speed: number = 5; // m/s
    private lookSpeed: number = 0.002;

    constructor(rig: CameraRig, input: InputManager) {
        this.rig = rig;
        this.input = input;
        this.lockPointer();
    }

    private lockPointer() {
        const canvas = document.querySelector('canvas')!;
        canvas.addEventListener('click', () => {
            canvas.requestPointerLock();
        });

        document.addEventListener('pointerlockchange', () => {
            if (document.pointerLockElement !== canvas) {
                // Reset input on unlock
                this.input.reset();
            }
        });
    }

    update(delta: number) {
        // Mouse look
        const look = this.input.mouseMovement;
        this.rig.rotateYaw(-look.x * this.lookSpeed);
        this.rig.rotatePitch(-look.y * this.lookSpeed);

        // WASD movement
        const dir = this.input.getMovementDirection();
        if (dir.lengthSq() > 0) {
            dir.normalize();
            dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.rig.object.rotation.y);
            this.rig.position.addScaledVector(dir, delta * this.speed);
        }
    }
}
