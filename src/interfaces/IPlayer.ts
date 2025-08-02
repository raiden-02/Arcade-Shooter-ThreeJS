// src/interfaces/IPlayer.ts
import * as THREE from 'three';

export interface IPlayerInput {
  moveForward: boolean;
  moveBackward: boolean;
  moveLeft: boolean;
  moveRight: boolean;
  jump: boolean;
  fire: boolean;
  reload: boolean;
  mouseDeltaX: number;
  mouseDeltaY: number;
}

export interface IPlayerState {
  id: string;
  name: string;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  velocity: THREE.Vector3;
  health: number;
  maxHealth: number;
  isAlive: boolean;
  currentWeapon: string;
  ammo: number;
  maxAmmo: number;
  isReloading: boolean;
}

export interface IPlayer {
  readonly id: string;
  readonly name: string;
  readonly isLocal: boolean;

  // State management
  getState(): IPlayerState;
  setState(state: Partial<IPlayerState>): void;

  // Input handling (local players only)
  processInput(input: IPlayerInput, deltaTime: number): void;

  // Physics
  getPosition(): THREE.Vector3;
  setPosition(position: THREE.Vector3): void;
  getRotation(): THREE.Euler;
  setRotation(rotation: THREE.Euler): void;

  // Combat
  takeDamage(damage: number, attackerId?: string): void;
  heal(amount: number): void;
  fire(): boolean;
  reload(): void;

  // Lifecycle
  update(deltaTime: number): void;
  dispose(): void;

  // Rendering
  getVisualRepresentation(): THREE.Object3D;
}
