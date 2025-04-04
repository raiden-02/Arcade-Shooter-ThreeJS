// /src/core/InputManager.ts
import * as THREE from 'three';

export class InputManager {
  private keys: { [key: string]: boolean } = {};
  private mouseDelta: THREE.Vector2 = new THREE.Vector2();

  constructor() {
    window.addEventListener('keydown', e => (this.keys[e.code] = true));
    window.addEventListener('keyup', e => (this.keys[e.code] = false));
    window.addEventListener('mousemove', e => {
      if (document.pointerLockElement) {
        this.mouseDelta.x += e.movementX;
        this.mouseDelta.y += e.movementY;
        console.log('Mouse moved:', this.mouseDelta);
      }
    });
  }

  getMovementDirection(): THREE.Vector3 {
    const dir = new THREE.Vector3();
    if (this.keys['KeyW']) dir.z -= 1;
    if (this.keys['KeyS']) dir.z += 1;
    if (this.keys['KeyA']) dir.x -= 1;
    if (this.keys['KeyD']) dir.x += 1;
    return dir;
  }

  get mouseMovement(): THREE.Vector2 {
    const delta = this.mouseDelta.clone();
    this.mouseDelta.set(0, 0); // Reset after each frame
    return delta;
  }

  isSprinting(): boolean {
    return this.keys['ShiftLeft'] && this.keys['KeyW'];
  }

  isJumpPressed(): boolean {
    return this.keys['Space'];
  }

  reset() {
    this.keys = {};
  }
}
