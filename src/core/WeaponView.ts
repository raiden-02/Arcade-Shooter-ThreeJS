import * as THREE from 'three';
// Removed unused GLTF type import; loadGLTF is typed in AssetLoader

import { loadGLTF, loadModel } from './AssetLoader';

/** Renders a weapon model in first-person attached to the camera */
export class WeaponView {
  private camera: THREE.Object3D;
  private model?: THREE.Object3D;
  private mixer?: THREE.AnimationMixer;
  private scale: THREE.Vector3;
  // Hip-fire offsets
  private defaultOffset: THREE.Vector3;
  private defaultRotation: THREE.Euler;
  // ADS (aim-down-sights) configuration
  private adsOffset: THREE.Vector3;
  private adsRotationOffset: THREE.Euler;
  private adsTransitionTime: number;
  private adsProgress: number = 0;
  private isADS: boolean = false;

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
    this.defaultOffset = offset?.clone() ?? new THREE.Vector3(0.3, -0.35, -0.5);
    this.defaultRotation = rotationOffset?.clone() ?? new THREE.Euler(0, Math.PI / 2, 0);
    this.scale = scale?.clone() ?? new THREE.Vector3(1, 1, 1);
    // Initialize ADS to hip-fire by default
    this.adsOffset = this.defaultOffset.clone();
    this.adsRotationOffset = this.defaultRotation.clone();
    this.adsTransitionTime = 0.2;
    this.adsProgress = 0;
    this.isADS = false;
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
    // apply custom scale
    this.model.scale.copy(this.scale);
    // initial position & rotation (hip-fire)
    this.model.position.copy(this.defaultOffset);
    this.model.rotation.copy(this.defaultRotation);
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

  /** Update the animation mixer and handle ADS transition */
  update(delta: number) {
    this.mixer?.update(delta);
    if (!this.model) return;
    if (this.adsTransitionTime > 0) {
      const step = delta / this.adsTransitionTime;
      this.adsProgress = THREE.MathUtils.clamp(
        this.adsProgress + (this.isADS ? step : -step),
        0,
        1,
      );
    }
    // interpolate position between hip-fire and ADS offsets
    const targetOffset = this.defaultOffset.clone().lerp(this.adsOffset, this.adsProgress);
    this.model.position.copy(targetOffset);
    // interpolate rotation (Euler) linearly
    const rx = THREE.MathUtils.lerp(
      this.defaultRotation.x,
      this.adsRotationOffset.x,
      this.adsProgress,
    );
    const ry = THREE.MathUtils.lerp(
      this.defaultRotation.y,
      this.adsRotationOffset.y,
      this.adsProgress,
    );
    const rz = THREE.MathUtils.lerp(
      this.defaultRotation.z,
      this.adsRotationOffset.z,
      this.adsProgress,
    );
    this.model.rotation.set(rx, ry, rz);
  }

  /** Remove the model from the camera */
  dispose() {
    if (this.model) {
      this.camera.remove(this.model);
      this.model = undefined;
    }
    this.mixer = undefined;
  }
  /**
   * Configure ADS offsets and transition time (seconds)
   */
  public configureADS(
    adsOffset: THREE.Vector3,
    adsRotationOffset: THREE.Euler,
    transitionTime: number,
  ): void {
    this.adsOffset = adsOffset.clone();
    this.adsRotationOffset = adsRotationOffset.clone();
    this.adsTransitionTime = transitionTime;
    this.adsProgress = 0;
  }
  /**
   * Enable or disable aim-down-sights
   */
  public setADS(active: boolean): void {
    this.isADS = active;
  }
  /**
   * Returns current ADS interpolation progress (0 = hip-fire, 1 = ADS)
   */
  public getADSProgress(): number {
    return this.adsProgress;
  }
}
