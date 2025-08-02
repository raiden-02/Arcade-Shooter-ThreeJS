import * as THREE from 'three';

import { IGameEngine } from '../interfaces/IGameEngine';
import { IPlayer } from '../interfaces/IPlayer';
import { IScene } from '../interfaces/IScene';

export class DevLevel implements IScene {
  public readonly name: string = 'DevLevel';
  private players: Map<string, IPlayer> = new Map();
  private gameObjects: THREE.Object3D[] = [];

  public async initialize(engine: IGameEngine): Promise<void> {
    console.log('🏗️ DevLevel initialized with engine:', !!engine);

    // TODO: Set up basic scene with ground, lighting, etc.
    // For now, just log initialization
  }

  public activate(): void {
    console.log('🔄 DevLevel activated');
  }

  public deactivate(): void {
    console.log('⏸️ DevLevel deactivated');
  }

  public update(deltaTime: number): void {
    void deltaTime;
    // TODO: Update game logic, physics, etc.
  }

  public render(): void {
    // TODO: Render scene-specific elements
  }

  public dispose(): void {
    this.players.clear();
    this.gameObjects.length = 0;
    console.log('🗑️ DevLevel disposed');
  }

  // Player management
  public spawnPlayer(playerId: string, position: { x: number; y: number; z: number }): IPlayer {
    void playerId;
    void position;
    // TODO: Create actual player implementation
    throw new Error('Player spawning not yet implemented');
  }

  public removePlayer(playerId: string): void {
    this.players.delete(playerId);
    console.log(`🚪 Player ${playerId} removed from DevLevel`);
  }

  public getPlayer(playerId: string): IPlayer | null {
    return this.players.get(playerId) || null;
  }

  public getAllPlayers(): IPlayer[] {
    return Array.from(this.players.values());
  }

  // Game object management
  public addGameObject(object: THREE.Object3D): void {
    this.gameObjects.push(object);
    console.log('➕ Game object added to DevLevel');
  }

  public removeGameObject(object: THREE.Object3D): void {
    const index = this.gameObjects.indexOf(object);
    if (index > -1) {
      this.gameObjects.splice(index, 1);
      console.log('➖ Game object removed from DevLevel');
    }
  }
}
