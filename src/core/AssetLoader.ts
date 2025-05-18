import { LoadingManager } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

const manager = new LoadingManager();
const loader = new GLTFLoader(manager);
const cache = new Map<string, Promise<GLTF>>();

/**
 * Load a GLTF model and cache the result.
 * @param path - URL or import path to the GLTF/GLB file.
 * @returns Promise resolving to the loaded GLTF.
 */
export function loadGLTF(path: string): Promise<GLTF> {
  if (!cache.has(path)) {
    const promise = loader.loadAsync(path);
    cache.set(path, promise);
  }
  return cache.get(path)!;
}
