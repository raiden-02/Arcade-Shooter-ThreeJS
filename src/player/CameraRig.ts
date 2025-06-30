import * as THREE from 'three';

export class CameraRig {
  public object: THREE.Object3D;
  private pitch: THREE.Object3D;

  constructor(camera: THREE.PerspectiveCamera) {
    this.object = new THREE.Object3D(); // Handles YAW (left/right)
    this.pitch = new THREE.Object3D(); // Handles PITCH (up/down)
    this.object.add(this.pitch);
    this.pitch.add(camera);

    camera.position.set(0, 1.6, 0); // Typical player eye level
  }

  rotateYaw(angle: number) {
    this.object.rotation.y += angle;
  }

  rotatePitch(angle: number) {
    this.pitch.rotation.x = THREE.MathUtils.clamp(
      this.pitch.rotation.x + angle,
      -Math.PI / 2,
      Math.PI / 2,
    );
  }

  get position() {
    return this.object.position;
  }
}
