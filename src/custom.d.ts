// Declarations for modules without built-in types
/* eslint-disable */
// Type definitions for modules without built-in TypeScript declarations
// Yuka - simple AI toolkit
declare module 'yuka' {
  export class EntityManager {
    update(delta: number): void;
  }
}

// three-pathfinding - NavMesh bindings to Recast/Detour
declare module 'three-pathfinding' {
  import * as THREE from 'three';
  export class Pathfinding {
    constructor();
    static createZone(geometry: THREE.BufferGeometry): any;
    setZoneData(zone: string, data: any): void;
    getGroup(zone: string, position: THREE.Vector3): any;
    findPath(
      start: THREE.Vector3,
      end: THREE.Vector3,
      zone: string,
      group: any,
    ): Array<{ x: number; y: number; z: number }> | null;
  }
}

// GLTFLoader from three.js examples
declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Loader, Group } from 'three';
  export interface GLTF {
    scene: Group;
  }
  export class GLTFLoader extends Loader {
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void,
    ): void;
  }
}
