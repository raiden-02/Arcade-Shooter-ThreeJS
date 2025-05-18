import * as THREE from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { loadGLTF } from './AssetLoader';

/** Renders a weapon model in first-person attached to the camera */
export class WeaponView {
  private camera: THREE.Object3D;
  private model?: THREE.Object3D;
  private mixer?: THREE.AnimationMixer;
  private readonly offset: THREE.Vector3;
  private readonly rotationOffset: THREE.Euler;

  /**
   * @param camera Parent object (typically the player camera) to attach the model to
   * @param offset Position offset from the camera
   * @param rotationOffset Rotation offset from the camera
   */
  constructor(camera: THREE.Object3D, offset?: THREE.Vector3, rotationOffset?: THREE.Euler) {
    this.camera = camera;
    this.offset = offset ?? new THREE.Vector3(0.3, -0.35, -0.5);
    this.rotationOffset = rotationOffset ?? new THREE.Euler(0, Math.PI / 2, 0);
  }

  /** Load and attach the weapon model */
  async load(path: string) {
    if (this.model) {
      this.camera.remove(this.model);
    }
    const gltf: GLTF = await loadGLTF(path);
    this.model = gltf.scene.clone(true);
    this.model.position.copy(this.offset);
    this.model.rotation.copy(this.rotationOffset);
    this.camera.add(this.model);
    if (gltf.animations?.length) {
      this.mixer = new THREE.AnimationMixer(this.model);
    } else {
      this.mixer = undefined;
    }
  }

  /** Update the animation mixer */
  update(delta: number) {
    this.mixer?.update(delta);
  }

  /** Remove the model from the camera */
  dispose() {
    if (this.model) {
      this.camera.remove(this.model);
      this.model = undefined;
    }
    this.mixer = undefined;
  }
}
