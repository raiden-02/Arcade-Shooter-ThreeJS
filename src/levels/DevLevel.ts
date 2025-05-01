// src/levels/DevLevel.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { Engine } from '../core/Engine';
import { InputAction } from '../core/InputManager';
import { ProjectileManager } from '../core/ProjectileManager';
import { BaseScene } from '../core/Scene';
import { WeaponManager } from '../core/WeaponManager';
import { EnemyManager } from '../enemy/EnemyManager';
import { Player } from '../player/Player';

/**
 * Development level with simple floor and placeholder enemies.
 */
export class DevLevel extends BaseScene {
  private player!: Player;
  private enemyManager!: EnemyManager;
  private projectileManager!: ProjectileManager;
  private weaponManager!: WeaponManager;
  private wasFiring: boolean = false;
  /**
   * Handle weapon switching via number keys or Q.
   */
  private onKeyDown = (e: KeyboardEvent): void => {
    let switched = false;
    if (e.code.startsWith('Digit')) {
      const idx = parseInt(e.code.replace('Digit', ''), 10) - 1;
      this.weaponManager.selectWeapon(idx);
      switched = true;
    } else if (e.code === 'KeyQ') {
      this.weaponManager.nextWeapon();
      switched = true;
    }
    if (switched) {
      const curr = this.weaponManager.getCurrentWeapon();
      this.ui.updateWeaponInfo(curr.getName(), curr.getOptions());
    }
  };

  constructor(engine: Engine) {
    super(engine);
  }

  /**
   * Level initialization: setup floor, lighting, player, enemies, UI.
   */
  public init(): void {
    // Create floor physics collider
    this.physics.createFloorCollider(new RAPIER.Vector3(0, -0.5, 0), new RAPIER.Vector3(50, 1, 50));

    // Create floor mesh
    const floorGeom = new THREE.BoxGeometry(50, 1, 50);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const floorMesh = new THREE.Mesh(floorGeom, floorMat);
    floorMesh.position.set(0, -0.5, 0);
    floorMesh.receiveShadow = true;
    this.scene.add(floorMesh);

    // Add a directional light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    this.scene.add(light);
    // Create player and gameplay systems
    this.player = new Player(this.scene, this.input, this.physics);
    // Use player camera for rendering and raycasting
    const playerCam = this.player.getCamera();
    this.engine.camera = playerCam;
    this.camera = playerCam;
    // Set up projectile and enemy systems with AI
    this.projectileManager = new ProjectileManager(this.scene, this.physics.world);
    this.enemyManager = new EnemyManager(
      this.scene,
      this.physics.world,
      this.projectileManager,
      this.player,
      this.camera,
    );
    this.projectileManager.setEnemyManager(this.enemyManager);
    // Provide player reference for projectile collision handling
    this.projectileManager.setPlayer(this.player);
    this.weaponManager = new WeaponManager(this.projectileManager);

    // Spawn placeholder enemies
    this.enemyManager.spawnEnemy(new THREE.Vector3(5, 2, -5));
    this.enemyManager.spawnEnemy(new THREE.Vector3(-5, 2, 5));
    this.enemyManager.spawnEnemy(new THREE.Vector3(10, 2, -10));
    // Update initial UI for weapon
    const initial = this.weaponManager.getCurrentWeapon();
    this.ui.updateWeaponInfo(initial.getName(), initial.getOptions());
    // Update initial UI for player health
    this.ui.updateHealth(this.player.getHealth(), this.player.getMaxHealth());
    // Weapon switching input
    window.addEventListener('keydown', this.onKeyDown);
  }

  /**
   * Per-frame update.
   */
  public update(delta: number): void {
    // Handle firing input
    const fire = this.input.isPressed(InputAction.Fire);
    const opts = this.weaponManager.getCurrentWeapon().getOptions();
    if (fire) {
      if (opts.automatic) {
        this.shoot();
      } else if (!this.wasFiring) {
        this.shoot();
        this.wasFiring = true;
      }
    } else {
      this.wasFiring = false;
    }

    // Update systems
    this.player.update();
    this.projectileManager.update(delta);
    this.projectileManager.handleCollisions(this.physics.eventQueue);
    // Update enemies (movement, shooting, UI)
    this.enemyManager.update(delta, this.engine.getTime());
    // Update player health in UI
    this.ui.updateHealth(this.player.getHealth(), this.player.getMaxHealth());
  }

  /**
   * Clean up scene objects and event handlers.
   */
  public dispose(): void {
    // TODO: dispose meshes, materials, colliders as needed
    this.scene.clear();
    window.removeEventListener('keydown', this.onKeyDown);
  }

  /**
   * Fire a shot and apply recoil.
   */
  private shoot(): void {
    const mouse = new THREE.Vector2(0, 0);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.camera);
    const spawnOffset = 0.5;
    const origin = raycaster.ray.origin
      .clone()
      .add(raycaster.ray.direction.clone().multiplyScalar(spawnOffset));
    const direction = raycaster.ray.direction.clone();
    const time = this.engine.getTime();
    if (this.weaponManager.tryFire(origin, direction, time)) {
      const opts = this.weaponManager.getCurrentWeapon().getOptions();
      this.player.applyRecoil(opts.recoil ?? 0, (Math.random() - 0.5) * (opts.recoil ?? 0));
    }
  }
}
