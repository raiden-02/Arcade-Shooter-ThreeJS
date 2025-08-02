// src/interfaces/IPhysicsWorld.ts
import * as THREE from 'three';

export interface ICollisionResult {
  hasCollision: boolean;
  point: THREE.Vector3;
  normal: THREE.Vector3;
  distance: number;
  object?: THREE.Object3D;
}

export interface IRigidBody {
  id: string;
  position: THREE.Vector3;
  rotation: THREE.Quaternion;
  velocity: THREE.Vector3;
  mass: number;
  isKinematic: boolean;
}

export interface IPhysicsWorld {
  // World management
  setGravity(gravity: THREE.Vector3): void;
  step(deltaTime: number): void;

  // Rigid body management
  addRigidBody(body: IRigidBody, shape: THREE.BufferGeometry): void;
  removeRigidBody(body: IRigidBody): void;
  updateRigidBody(body?: IRigidBody): void;

  // Collision detection
  raycast(origin: THREE.Vector3, direction: THREE.Vector3, maxDistance: number): ICollisionResult;
  sphereCast(
    origin: THREE.Vector3,
    direction: THREE.Vector3,
    radius: number,
    maxDistance: number,
  ): ICollisionResult;
  checkCollision(bodyA: IRigidBody, bodyB: IRigidBody): boolean;

  // Queries
  getOverlappingBodies(position: THREE.Vector3, radius: number): IRigidBody[];

  // Cleanup
  dispose(): void;
}
