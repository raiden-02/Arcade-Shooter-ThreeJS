import * as THREE from 'three';
// Removed unused GLTF type import; loadGLTF is typed in AssetLoader

import { loadGLTF, loadModel } from './AssetLoader';

/** Renders a weapon model in first-person attached to the camera */
export class WeaponView {
  private camera: THREE.Object3D;
  private model?: THREE.Object3D;
  private mixer?: THREE.AnimationMixer;
  private scale: THREE.Vector3;
  private readonly offset: THREE.Vector3;
  private readonly rotationOffset: THREE.Euler;

  /**
   * @param camera Parent object (typically the player camera) to attach the model to
   * @param offset Position offset from the camera
   * @param rotationOffset Rotation offset from the camera
   */
  /**
   * @param camera Parent object (typically the player camera)
   * @param offset Position offset from the camera
   * @param rotationOffset Rotation offset from the camera
   * @param scale Scale of the model
   */
  constructor(
    camera: THREE.Object3D,
    offset?: THREE.Vector3,
    rotationOffset?: THREE.Euler,
    scale?: THREE.Vector3,
  ) {
    this.camera = camera;
    this.offset = offset ?? new THREE.Vector3(0.3, -0.35, -0.5);
    this.rotationOffset = rotationOffset ?? new THREE.Euler(0, Math.PI / 2, 0);
    this.scale = scale ?? new THREE.Vector3(1, 1, 1);
  }

  /**
   * Load and attach the weapon model, choosing loader by file extension.
   */
  async load(path: string) {
    if (this.model) {
      this.camera.remove(this.model);
    }
    const ext = path.split('.').pop()?.toLowerCase();
    let obj: THREE.Object3D;
    if (ext === 'gltf' || ext === 'glb') {
      const gltf = await loadGLTF(path);
      obj = gltf.scene.clone(true);
      this.mixer = gltf.animations?.length ? new THREE.AnimationMixer(obj) : undefined;
    } else {
      obj = await loadModel(path);
      this.mixer = undefined;
    }
    this.model = obj;
    // apply custom scale, position, and rotation
    this.model.scale.copy(this.scale);
    this.model.position.copy(this.offset);
    this.model.rotation.copy(this.rotationOffset);
    this.camera.add(this.model);
    // Ensure weapon model always renders on top and isn't clipped by world geometry
    // by disabling depth test/write and bumping render order
    this.model.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.renderOrder = 999;
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach(mat => {
          mat.depthTest = false;
          mat.depthWrite = false;
        });
      }
    });
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
