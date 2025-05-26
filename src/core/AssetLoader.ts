import { LoadingManager, Group, Object3D } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const manager = new LoadingManager();
const gltfLoader = new GLTFLoader(manager);
const fbxLoader = new FBXLoader(manager);
const cache = new Map<string, Promise<unknown>>();
/**
 * Load a GLTF/GLB model and cache the result.
 * @param path - URL or import path to the GLTF/GLB file.
 * @returns Promise resolving to the loaded GLTF asset.
 */
export function loadGLTF(path: string): Promise<GLTF> {
  if (!cache.has(path)) {
    const promise = gltfLoader.loadAsync(path);
    cache.set(path, promise);
  }
  return cache.get(path) as Promise<GLTF>;
}
/**
 * Load an OBJ model and cache the result.
 * @param path - URL or import path to the OBJ file.
 * @returns Promise resolving to a THREE.Group containing the loaded mesh.
 */
export function loadOBJ(path: string): Promise<Group> {
  if (!cache.has(path)) {
    const promise = (async () => {
      const mtlLoader = new MTLLoader(manager);
      const loader = new OBJLoader(manager);
      const mtlPath = path.replace(/\.obj$/i, '.mtl');
      try {
        const materials = await mtlLoader.loadAsync(mtlPath);
        materials.preload();
        loader.setMaterials(materials);
      } catch {
        console.warn(`MTL not found for ${path}, loading OBJ without materials.`);
      }
      return loader.loadAsync(path);
    })();
    cache.set(path, promise);
  }
  return cache.get(path) as Promise<Group>;
}
/**
 * Load an FBX model and cache the result.
 * @param path - URL or import path to the FBX file.
 * @returns Promise resolving to a THREE.Group containing the loaded mesh.
 */
export function loadFBX(path: string): Promise<Group> {
  if (!cache.has(path)) {
    const promise = fbxLoader.loadAsync(path);
    cache.set(path, promise);
  }
  return cache.get(path) as Promise<Group>;
}
/**
 * Generic model loader for GLTF/GLB, OBJ, and FBX formats.
 * @param path - URL or import path to the model file.
 * @returns Promise resolving to a cloned THREE.Object3D scene graph.
 */
export async function loadModel(path: string): Promise<Object3D> {
  const ext = path.split('.').pop()?.toLowerCase();
  if (ext === 'gltf' || ext === 'glb') {
    const gltf = await loadGLTF(path);
    return gltf.scene.clone(true);
  } else if (ext === 'obj') {
    const obj = await loadOBJ(path);
    return obj.clone(true);
  } else if (ext === 'fbx') {
    const fbx = await loadFBX(path);
    return fbx.clone(true);
  }
  throw new Error(`Unsupported model format: .${ext}`);
}
