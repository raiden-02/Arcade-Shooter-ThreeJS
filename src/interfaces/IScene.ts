// src/interfaces/IScene.ts
import * as THREE from 'three';
import { IGameEngine } from './IGameEngine';
import { IPlayer } from './IPlayer';

export interface IScene {
  readonly name: string;

  // Lifecycle
  initialize(engine: IGameEngine): Promise<void>;
  activate(): void;
  deactivate(): void;
  dispose(): void;

  // Update loop
  update(deltaTime: number): void;
  render(): void;

  // Player management
  spawnPlayer(playerId: string, position: { x: number; y: number; z: number }): IPlayer;
  removePlayer(playerId: string): void;
  getPlayer(playerId: string): IPlayer | null;
  getAllPlayers(): IPlayer[];

  // Game objects
  addGameObject(object: THREE.Object3D): void;
  removeGameObject(object: THREE.Object3D): void;
}
