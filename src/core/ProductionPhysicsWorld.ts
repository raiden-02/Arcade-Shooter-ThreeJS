// src/core/ProductionPhysicsWorld.ts
import * as THREE from 'three';

import { IPhysicsWorld, ICollisionResult, IRigidBody } from '../interfaces/IPhysicsWorld';

/**
 * Production-quality physics world implementation
 * For now using basic Three.js raycasting, can be upgraded to a full physics engine later
 */
export class ProductionPhysicsWorld implements IPhysicsWorld {
  private gravity: THREE.Vector3 = new THREE.Vector3(0, -9.81, 0);
  private rigidBodies: Map<string, IRigidBody> = new Map();
  private collisionGeometries: Map<string, THREE.BufferGeometry> = new Map();
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private collisionObjects: THREE.Object3D[] = [];

  public setGravity(gravity: THREE.Vector3): void {
    this.gravity.copy(gravity);
  }

  public step(deltaTime: number): void {
    // Apply physics to all rigid bodies
    this.rigidBodies.forEach(body => {
      if (!body.isKinematic) {
        // Apply gravity
        body.velocity.add(this.gravity.clone().multiplyScalar(deltaTime));

        // Update position based on velocity
        body.position.add(body.velocity.clone().multiplyScalar(deltaTime));

        // Simple ground collision (y = 0)
        if (body.position.y < 0) {
          body.position.y = 0;
          body.velocity.y = 0;
        }
      }
    });
  }

  public addRigidBody(body: IRigidBody, shape: THREE.BufferGeometry): void {
    this.rigidBodies.set(body.id, body);

    // Store collision geometry
    if (shape instanceof THREE.BufferGeometry) {
      this.collisionGeometries.set(body.id, shape);
    }
  }

  public removeRigidBody(body: IRigidBody): void {
    this.rigidBodies.delete(body.id);
    this.collisionGeometries.delete(body.id);
  }

  public updateRigidBody(): void {
    // Body is already referenced, changes are automatic
    // This method exists for compatibility
  }

  public raycast(
    origin: THREE.Vector3,
    direction: THREE.Vector3,
    maxDistance: number,
  ): ICollisionResult {
    this.raycaster.set(origin, direction.normalize());
    this.raycaster.far = maxDistance;

    const intersections = this.raycaster.intersectObjects(this.collisionObjects, true);

    if (intersections.length > 0) {
      const hit = intersections[0];
      return {
        hasCollision: true,
        point: hit.point,
        normal: hit.face ? hit.face.normal : new THREE.Vector3(0, 1, 0),
        distance: hit.distance,
        object: hit.object,
      };
    }

    return {
      hasCollision: false,
      point: new THREE.Vector3(),
      normal: new THREE.Vector3(),
      distance: maxDistance,
    };
  }

  public sphereCast(
    origin: THREE.Vector3,
    direction: THREE.Vector3,
    radius: number,
    maxDistance: number,
  ): ICollisionResult {
    // Simplified sphere cast using multiple raycasts
    const results: ICollisionResult[] = [];

    // Cast from center
    results.push(this.raycast(origin, direction, maxDistance));

    // Cast from sphere edges (simplified - just 4 directions)
    const offsets = [
      new THREE.Vector3(radius, 0, 0),
      new THREE.Vector3(-radius, 0, 0),
      new THREE.Vector3(0, radius, 0),
      new THREE.Vector3(0, -radius, 0),
    ];

    offsets.forEach(offset => {
      const offsetOrigin = origin.clone().add(offset);
      results.push(this.raycast(offsetOrigin, direction, maxDistance));
    });

    // Return closest hit
    const hits = results.filter(r => r.hasCollision);
    if (hits.length > 0) {
      return hits.reduce((closest, current) =>
        current.distance < closest.distance ? current : closest,
      );
    }

    return {
      hasCollision: false,
      point: new THREE.Vector3(),
      normal: new THREE.Vector3(),
      distance: maxDistance,
    };
  }

  public checkCollision(bodyA: IRigidBody, bodyB: IRigidBody): boolean {
    // Simple sphere-sphere collision check
    const distance = bodyA.position.distanceTo(bodyB.position);
    const collisionDistance = 1.0; // Assume 1 unit radius for simplicity
    return distance < collisionDistance;
  }

  public getOverlappingBodies(position: THREE.Vector3, radius: number): IRigidBody[] {
    const overlapping: IRigidBody[] = [];

    this.rigidBodies.forEach(body => {
      const distance = position.distanceTo(body.position);
      if (distance < radius) {
        overlapping.push(body);
      }
    });

    return overlapping;
  }

  public addCollisionObject(object: THREE.Object3D): void {
    this.collisionObjects.push(object);
  }

  public removeCollisionObject(object: THREE.Object3D): void {
    const index = this.collisionObjects.indexOf(object);
    if (index !== -1) {
      this.collisionObjects.splice(index, 1);
    }
  }

  public dispose(): void {
    this.rigidBodies.clear();
    this.collisionGeometries.clear();
    this.collisionObjects.length = 0;
  }
}
