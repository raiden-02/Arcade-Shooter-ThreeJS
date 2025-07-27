import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { CollisionGroups } from '../core/CollisionGroups';
import { Engine } from '../core/Engine';
import { InputAction } from '../core/InputManager';
import { MultiplayerEngine } from '../core/MultiplayerEngine';
import { ProjectileManager } from '../core/ProjectileManager';
import { BaseScene } from '../core/Scene';
import { WeaponManager } from '../core/WeaponManager';
import { WeaponView } from '../core/WeaponView';
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
  private weaponView!: WeaponView;
  private wasFiring: boolean = false;
  private defaultFov!: number;
  private adsFov!: number;

  // Multiplayer enemy event handlers
  private enemyEventHandlers: { [key: string]: EventListener } = {};

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
    if (e.code === 'KeyR') {
      // Trigger reload for current weapon
      this.weaponManager.getCurrentWeapon().reload();
      return;
    }
    // Debug: Take damage for testing (K key)
    if (e.code === 'KeyK') {
      console.log('Debug: Taking 50 damage');
      this.player.takeDamage(50);
    }
    // Debug: Take fatal damage for testing (L key)
    if (e.code === 'KeyL') {
      console.log('Debug: Taking fatal damage');
      this.player.takeDamage(this.player.getHealth());
    }
    if (switched) {
      const curr = this.weaponManager.getCurrentWeapon();
      const opts = curr.getOptions();
      this.ui.updateWeaponInfo(curr.getName(), opts);
      this.weaponView.dispose();
      const basePath = import.meta.env.BASE_URL;
      // create a new view with this weapon's custom offsets, rotation, and scale
      this.weaponView = new WeaponView(
        this.camera,
        opts.viewOffset,
        opts.viewRotationOffset,
        opts.viewScale,
      );
      if (opts.modelPath) {
        this.weaponView.load(`${basePath}${opts.modelPath}`);
      }
      // Configure ADS offsets for the new weapon
      const defaultOffset2 = opts.viewOffset?.clone() ?? new THREE.Vector3(0.3, -0.35, -0.5);
      const defaultRot2 = opts.viewRotationOffset?.clone() ?? new THREE.Euler(0, Math.PI / 2, 0);
      const adsOffset2 = opts.adsOffset?.clone() ?? defaultOffset2.clone();
      const adsRot2 = opts.adsRotationOffset?.clone() ?? defaultRot2.clone();
      const adsTime2 = opts.adsTransitionTime ?? 0.15;
      this.weaponView.configureADS(adsOffset2, adsRot2, adsTime2);
      // Update ADS FOV for the new weapon
      this.adsFov = opts.adsFov ?? this.defaultFov * 0.75;
    }
  };

  constructor(engine: Engine) {
    super(engine);
  }

  /**
   * Level initialization: setup floor, lighting, player, enemies, UI.
   */
  public init(): void {
    this.physics.createFloorCollider(new RAPIER.Vector3(0, -0.5, 0), new RAPIER.Vector3(50, 1, 50));

    const floorGeom = new THREE.BoxGeometry(50, 1, 50);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const floorMesh = new THREE.Mesh(floorGeom, floorMat);
    floorMesh.position.set(0, -0.5, 0);
    floorMesh.receiveShadow = true;
    this.scene.add(floorMesh);

    // Add a demo wall for line-of-sight visualization
    const wallGeom = new THREE.BoxGeometry(1, 5, 20);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const wall = new THREE.Mesh(wallGeom, wallMat);
    wall.position.set(0, 2.5, -15);
    wall.castShadow = true;
    wall.receiveShadow = true;
    this.scene.add(wall);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    this.scene.add(light);

    const addObstacle = (pos: THREE.Vector3, size: THREE.Vector3, color = 0x888888) => {
      // Mesh
      const geom = new THREE.BoxGeometry(size.x, size.y, size.z);
      const mat = new THREE.MeshStandardMaterial({ color });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.copy(pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      // Physics collider (static)
      const bodyDesc = RAPIER.RigidBodyDesc.fixed();
      const body = this.physics.world.createRigidBody(bodyDesc);
      const colliderDesc = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2)
        .setTranslation(pos.x, pos.y, pos.z)
        .setCollisionGroups(
          (CollisionGroups.DEFAULT << 16) |
            CollisionGroups.PLAYER |
            CollisionGroups.ENEMY |
            CollisionGroups.PROJECTILE,
        )
        .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
      this.physics.world.createCollider(colliderDesc, body);
    };

    // Walls
    addObstacle(new THREE.Vector3(0, 2.5, -15), new THREE.Vector3(20, 5, 1));
    addObstacle(new THREE.Vector3(-15, 2.5, 0), new THREE.Vector3(1, 5, 20));
    addObstacle(new THREE.Vector3(15, 2.5, 0), new THREE.Vector3(1, 5, 20));

    // Cover crates
    addObstacle(new THREE.Vector3(5, 0.5, -5), new THREE.Vector3(2, 1, 2), 0x336633);
    addObstacle(new THREE.Vector3(-5, 0.5, 5), new THREE.Vector3(2, 1, 2), 0x663333);
    addObstacle(new THREE.Vector3(0, 0.5, 0), new THREE.Vector3(2, 1, 2), 0x333366);

    // Create player and gameplay systems
    this.player = new Player(this.scene, this.input, this.physics);

    // Inform multiplayer engine about the local player
    if (this.engine instanceof MultiplayerEngine) {
      this.engine.attachPlayer(this.player);
    }

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
    this.projectileManager.setUIManager(this.ui);

    // Set multiplayer engine reference for remote player interactions
    if (this.engine instanceof MultiplayerEngine) {
      this.projectileManager.setMultiplayerEngine(this.engine);
    }

    this.weaponManager = new WeaponManager(this.projectileManager);

    // Initialize first-person weapon view with per-weapon offsets
    const initialWeapon = this.weaponManager.getCurrentWeapon();
    const initialOpts = initialWeapon.getOptions();
    const basePath = import.meta.env.BASE_URL;
    this.weaponView = new WeaponView(
      this.camera,
      initialOpts.viewOffset,
      initialOpts.viewRotationOffset,
      initialOpts.viewScale,
    );
    if (initialOpts.modelPath) {
      this.weaponView.load(`${basePath}${initialOpts.modelPath}`);
    }

    // Configure ADS offsets for this weapon
    const defaultOffset = initialOpts.viewOffset?.clone() ?? new THREE.Vector3(0.3, -0.35, -0.5);
    const defaultRot =
      initialOpts.viewRotationOffset?.clone() ?? new THREE.Euler(0, Math.PI / 2, 0);
    const adsOffset = initialOpts.adsOffset?.clone() ?? defaultOffset.clone();
    const adsRot = initialOpts.adsRotationOffset?.clone() ?? defaultRot.clone();
    const adsTime = initialOpts.adsTransitionTime ?? 0.15;
    this.weaponView.configureADS(adsOffset, adsRot, adsTime);

    // Store camera FOV settings for ADS zoom
    this.defaultFov = this.camera.fov;
    this.adsFov = initialOpts.adsFov ?? this.defaultFov * 0.75;

    // Spawn placeholder enemies
    this.enemyManager.spawnEnemy(new THREE.Vector3(5, 2, -5));
    // this.enemyManager.spawnEnemy(new THREE.Vector3(-5, 2, 5));
    // this.enemyManager.spawnEnemy(new THREE.Vector3(10, 2, -10));
    // Update initial UI for weapon
    const initial = this.weaponManager.getCurrentWeapon();
    this.ui.updateWeaponInfo(initial.getName(), initial.getOptions());
    // Update initial UI for player health and ammo
    this.ui.updateHealth(this.player.getHealth(), this.player.getMaxHealth());
    const initWeapon = this.weaponManager.getCurrentWeapon();
    this.ui.updateAmmo(
      initWeapon.getCurrentAmmo(),
      initWeapon.getMagazineSize(),
      initWeapon.isReloading(),
    );

    // Weapon switching input
    window.addEventListener('keydown', this.onKeyDown);

    // Multiplayer enemy event handlers
    if (this.engine instanceof MultiplayerEngine) {
      this.setupMultiplayerEnemyHandlers();
    }
  }

  /**
   * Per-frame update.
   */
  public update(delta: number): void {
    // Handle firing input - only if player is alive
    if (!this.player.isPlayerDead()) {
      const fire = this.input.isPressed(InputAction.Fire);
      const weapon = this.weaponManager.getCurrentWeapon();
      const opts = weapon.getOptions();
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
    } else {
      this.wasFiring = false; // Stop firing when dead
    }

    // Update systems
    this.player.update(delta);

    // Show respawn timer if dead
    if (this.player.isPlayerDead()) {
      const respawnTime = this.player.getRespawnTime();
      // console.log('Player is dead, showing death screen with respawn time:', respawnTime);
      this.ui.showDeathScreen(respawnTime);
    } else {
      this.ui.hideDeathScreen();
    }

    this.projectileManager.update(delta);
    this.projectileManager.handleCollisions(this.physics.eventQueue);
    // Update enemies (movement, shooting, UI)
    this.enemyManager.update(delta, this.engine.getTime());
    // Update player health and ammo in UI
    this.ui.updateHealth(this.player.getHealth(), this.player.getMaxHealth());
    const weapon = this.weaponManager.getCurrentWeapon();
    this.ui.updateAmmo(weapon.getCurrentAmmo(), weapon.getMagazineSize(), weapon.isReloading());

    // Send updated player state to multiplayer engine
    if (this.engine instanceof MultiplayerEngine && this.engine.isInMultiplayerMode()) {
      this.engine.updatePlayerState(
        this.player.getPosition(),
        this.player.getRotation(),
        this.player.getCurrentWeapon(),
      );
    }

    // Aim-down-sights toggle and HUD crosshair updates - only if alive
    if (!this.player.isPlayerDead()) {
      const aiming = this.input.isPressed(InputAction.Aim);
      this.weaponView.setADS(aiming);
      // update weapon bloom and crosshair morphing to ADS
      weapon.updateBloom(delta);
      const progress = this.weaponView.getADSProgress();
      const totalSpread = weapon.getTotalSpreadDeg(aiming);
      this.ui.hud.setSpread(totalSpread * weapon.getPixelsPerDeg());
      this.ui.hud.setADSProgress(progress);
      // smoothly interpolate camera FOV for ADS zoom
      this.camera.fov = THREE.MathUtils.lerp(this.defaultFov, this.adsFov, progress);
      this.camera.updateProjectionMatrix();
      this.weaponView.update(delta);
    }
  }

  /**
   * Clean up scene objects and event handlers.
   */
  public dispose(): void {
    // TODO: dispose meshes, materials, colliders as needed
    this.weaponView.dispose();
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
    let direction = raycaster.ray.direction.clone();
    const aiming = this.input.isPressed(InputAction.Aim);
    const weapon = this.weaponManager.getCurrentWeapon();
    const totalSpread = weapon.getTotalSpreadDeg(aiming);
    if (totalSpread > 0) {
      const spreadRad = THREE.MathUtils.degToRad(totalSpread);
      const axis = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
      direction = direction.applyAxisAngle(axis, (Math.random() - 0.5) * spreadRad).normalize();
    }
    const time = this.engine.getTime();
    if (weapon.tryFire(origin, direction, time)) {
      const opts = weapon.getOptions();
      this.player.applyRecoil(opts.recoil ?? 0, (Math.random() - 0.5) * (opts.recoil ?? 0));
    }
  }

  /**
   * Setup multiplayer enemy event handlers
   */
  private setupMultiplayerEnemyHandlers(): void {
    // Handler for enemies spawned
    this.enemyEventHandlers['enemies:spawned'] = (event: Event) => {
      const customEvent = event as CustomEvent;
      const enemies: Array<{
        id: string;
        position: { x: number; y: number; z: number };
        rotation: { x: number; y: number; z: number; w: number };
        health: number;
        isDead: boolean;
        isAlive: boolean;
      }> = customEvent.detail;

      console.log(`Creating ${enemies.length} enemies from server`);

      // Create actual enemy objects in the game world
      enemies.forEach(enemyData => {
        if (!enemyData.isDead && enemyData.isAlive) {
          const position = new THREE.Vector3(
            enemyData.position.x,
            enemyData.position.y,
            enemyData.position.z,
          );
          this.enemyManager.spawnEnemy(position);
          console.log(
            `Created enemy at position: ${enemyData.position.x}, ${enemyData.position.y}, ${enemyData.position.z}`,
          );
        }
      });
    };

    // Handler for enemy updates
    this.enemyEventHandlers['enemy:updated'] = (event: Event) => {
      const customEvent = event as CustomEvent;
      const enemyData: {
        id: string;
        position: { x: number; y: number; z: number };
        rotation: { x: number; y: number; z: number; w: number };
        health: number;
        isDead: boolean;
        isAlive: boolean;
      } = customEvent.detail;

      console.log(
        `Enemy updated: ${enemyData.id}, health: ${enemyData.health}, isDead: ${enemyData.isDead}`,
      );

      // Find and update the corresponding enemy
      const enemy = this.enemyManager.enemies.find(e => e.getId() === enemyData.id);
      if (enemy) {
        enemy.applyNetworkState({
          position: enemyData.position,
          rotation: enemyData.rotation,
          health: enemyData.health,
          isDead: enemyData.isDead,
        });
      }
    };

    // Handler for enemy death
    this.enemyEventHandlers['enemy:died'] = (event: Event) => {
      const customEvent = event as CustomEvent;
      const enemyId: string = customEvent.detail;

      console.log(`Enemy died: ${enemyId}`);

      // Remove the enemy from the game world
      const enemyIndex = this.enemyManager.enemies.findIndex(e => e.getId() === enemyId);
      if (enemyIndex !== -1) {
        const enemy = this.enemyManager.enemies[enemyIndex];
        enemy.die();
        this.enemyManager.enemies.splice(enemyIndex, 1);
      }
    };

    // Register all event listeners
    Object.keys(this.enemyEventHandlers).forEach(eventName => {
      document.addEventListener(eventName, this.enemyEventHandlers[eventName]);
    });

    console.log('Multiplayer enemy event handlers registered');
  }

  /**
   * Cleanup method - remove event listeners
   */
  public cleanup(): void {
    window.removeEventListener('keydown', this.onKeyDown);

    // Remove multiplayer enemy event listeners
    Object.keys(this.enemyEventHandlers).forEach(eventName => {
      document.removeEventListener(eventName, this.enemyEventHandlers[eventName]);
    });
    this.enemyEventHandlers = {};

    console.log('DevLevel cleanup completed');
  }
}
