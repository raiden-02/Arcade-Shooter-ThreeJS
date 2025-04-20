// src/core/SkyBox.ts
import * as THREE from 'three';

/**
 * SkyBox loads a cubemap and sets it as the scene background and environment.
 * @param renderer - the WebGLRenderer used for PMREM generation
 * @param scene    - the Three.js Scene to apply the skybox to
 * @param path     - URL path to the folder containing px.jpg, nx.jpg, py.jpg, ny.jpg, pz.jpg, nz.jpg
 */
export class SkyBox {
  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, path: string) {
    const loader = new THREE.CubeTextureLoader().setPath(path);
    loader.load(
      ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
      cubeTexture => {
        // Set as scene background
        scene.background = cubeTexture;
        // Generate prefiltered environment map for PBR
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        pmremGenerator.compileCubemapShader();
        const envMap = pmremGenerator.fromCubemap(cubeTexture).texture;
        scene.environment = envMap;
        pmremGenerator.dispose();
      },
      undefined,
      error => {
        console.error('Error loading skybox from', path, error);
      },
    );
  }
}
