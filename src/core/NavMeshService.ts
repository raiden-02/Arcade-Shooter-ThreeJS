/* eslint-disable @typescript-eslint/no-explicit-any */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Pathfinding } from 'three-pathfinding';

/**
 * Service to load and query a NavMesh using three-pathfinding.
 */
export class NavMeshService {
  private pathfinder: Pathfinding;
  private zone: string = 'level';
  private ready: boolean = false;

  constructor(private scene: THREE.Scene) {
    this.pathfinder = new Pathfinding();
  }

  /**
   * Load a GLTF NavMesh from the given URL and build pathfinding data.
   */
  public load(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const loader = new GLTFLoader();
      loader.load(
        url,
        (gltf: any) => {
          // Assume the first mesh is the navigation mesh
          const mesh = (gltf.scene.children as any[]).find(
            (c: any) => c instanceof THREE.Mesh,
          ) as THREE.Mesh;
          if (!mesh) {
            reject(new Error('NavMesh mesh not found in GLTF'));
            return;
          }
          // Optionally hide nav mesh
          mesh.visible = false;
          this.scene.add(mesh);
          // Build zone data
          const zoneData = Pathfinding.createZone(mesh.geometry);
          this.pathfinder.setZoneData(this.zone, zoneData);
          this.ready = true;
          resolve();
        },
        undefined,
        (error: any) => reject(error),
      );
    });
  }

  /**
   * Whether the NavMesh is loaded and ready.
   */
  public isReady(): boolean {
    return this.ready;
  }

  /**
   * Find a path from origin to target on the loaded NavMesh.
   * Returns an array of waypoints (THREE.Vector3).
   */
  public findPath(origin: THREE.Vector3, target: THREE.Vector3): THREE.Vector3[] {
    if (!this.ready) return [];
    const group = this.pathfinder.getGroup(this.zone, origin);
    const rawPath = this.pathfinder.findPath(origin, target, this.zone, group) || [];
    return rawPath.map((p: any) => new THREE.Vector3(p.x, p.y, p.z));
  }
}
