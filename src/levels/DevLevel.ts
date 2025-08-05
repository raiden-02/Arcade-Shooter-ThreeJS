import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { PhysicsHelper } from '../core/PhysicsHelper';
import { ProjectileManager } from '../core/ProjectileManager';
import { WeaponManager } from '../core/WeaponManager';
import { EnemyManager } from '../enemy/EnemyManager';
import { IGameEngine } from '../interfaces/IGameEngine';
import { IPlayer } from '../interfaces/IPlayer';
import { IScene } from '../interfaces/IScene';
import { Player } from '../player/Player';

/**
 * Simple development level that spawns a player, a single enemy and basic geometry.
 */
export class DevLevel implements IScene {
  public readonly name = 'DevLevel';

  private engine!: IGameEngine;
  private scene!: THREE.Scene;

  private players: Map<string, Player> = new Map();
  private gameObjects: THREE.Object3D[] = [];

  private physics!: PhysicsHelper;
  private projectileManager!: ProjectileManager;
  private weaponManager!: WeaponManager;
  private enemyManager!: EnemyManager;

  private elapsed = 0;

  public async initialize(engine: IGameEngine): Promise<void> {
    this.engine = engine;
    // Access Three.js scene from engine
    const spEngine = engine as unknown as {
      getThreeScene(): THREE.Scene;
      getRenderer(): THREE.WebGLRenderer;
    };
    this.scene = spEngine.getThreeScene();

    // Basic lighting
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    hemi.position.set(0, 20, 0);
    this.scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 10, 7.5);
    dir.castShadow = true;
    this.scene.add(dir);

    // Ground
    const groundGeo = new THREE.PlaneGeometry(50, 50);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Physics world and managers
    this.physics = new PhysicsHelper();
    this.physics.createFloorCollider(new RAPIER.Vector3(0, 0, 0), new RAPIER.Vector3(50, 1, 50));

    this.projectileManager = new ProjectileManager(this.scene, this.physics.world);
    this.weaponManager = new WeaponManager(this.projectileManager);

    // Spawn local player
    const localId = engine.getPlayerId() || 'player-local';
    const player = this.spawnPlayer(localId, { x: 0, y: 2, z: 0 }) as unknown as Player;
    this.projectileManager.setPlayer(player);

    // Enemy manager and a single enemy
    this.enemyManager = new EnemyManager(
      this.scene,
      this.physics.world,
      this.projectileManager,
      player,
      player.getCamera(),
    );
    this.enemyManager.spawnEnemy(new THREE.Vector3(10, 0, 0));
  }

  public activate(): void {
    // no-op for now
  }

  public deactivate(): void {
    // no-op for now
  }

  public update(deltaTime: number): void {
    this.elapsed += deltaTime;

    // Step physics and update entities
    this.physics.step(deltaTime);
    this.players.forEach(p => p.update(deltaTime));
    this.enemyManager.update(deltaTime, this.elapsed);
    this.projectileManager.update(deltaTime);
    this.projectileManager.handleCollisions(this.physics.eventQueue);

    // Weapon firing
    const input = this.engine.inputManager.getCurrentInput();
    const player = this.players.values().next().value as Player | undefined;
    if (player) {
      if (input.fire) {
        const cam = player.getCamera();
        const origin = cam.getWorldPosition(new THREE.Vector3());
        const dir = new THREE.Vector3();
        cam.getWorldDirection(dir);
        this.weaponManager.tryFire(origin, dir, this.elapsed);
      }
      if (input.reload) {
        this.weaponManager.getCurrentWeapon().reload();
      }
    }
  }

  public render(): void {
    const spEngine = this.engine as unknown as {
      getRenderer(): THREE.WebGLRenderer;
    };
    const player = this.players.values().next().value as Player | undefined;
    if (player) {
      spEngine.getRenderer().render(this.scene, player.getCamera());
    }
  }

  public dispose(): void {
    this.players.clear();
    this.gameObjects.length = 0;
  }

  // Player management
  public spawnPlayer(playerId: string, position: { x: number; y: number; z: number }): IPlayer {
    const spawn = new RAPIER.Vector3(position.x, position.y, position.z);
    const player = new Player(this.scene, this.engine.inputManager, this.physics, spawn);
    this.players.set(playerId, player);
    return player as unknown as IPlayer;
  }

  public removePlayer(playerId: string): void {
    const p = this.players.get(playerId);
    if (p) {
      this.players.delete(playerId);
    }
  }

  public getPlayer(playerId: string): IPlayer | null {
    return (this.players.get(playerId) as unknown as IPlayer) || null;
  }

  public getAllPlayers(): IPlayer[] {
    return Array.from(this.players.values()) as unknown as IPlayer[];
  }

  // Game object management
  public addGameObject(object: THREE.Object3D): void {
    this.gameObjects.push(object);
    this.scene.add(object);
  }

  public removeGameObject(object: THREE.Object3D): void {
    const index = this.gameObjects.indexOf(object);
    if (index > -1) {
      this.gameObjects.splice(index, 1);
      object.parent?.remove(object);
    }
  }
}
