import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { CollisionGroups } from '../core/CollisionGroups';
import { PhysicsHelper } from '../core/PhysicsHelper';
import { ProjectileManager } from '../core/ProjectileManager';
import { SkyBox } from '../core/SkyBox';
import { WeaponManager } from '../core/WeaponManager';
import { WeaponView } from '../core/WeaponView';
import { EnemyManager } from '../enemy/EnemyManager';
import { IGameEngine } from '../interfaces/IGameEngine';
import { IPlayer } from '../interfaces/IPlayer';
import { IScene } from '../interfaces/IScene';
import { Player } from '../player/Player';

/**
 * Development level with skybox, obstacles, walls and enemies.
 */
export class DevLevel implements IScene {
  public readonly name = 'DevLevel';

  private engine!: IGameEngine;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.Camera;

  private players: Map<string, Player> = new Map();
  private gameObjects: THREE.Object3D[] = [];

  private physics!: PhysicsHelper;
  private projectileManager!: ProjectileManager;
  private weaponManager!: WeaponManager;
  private weaponView!: WeaponView;
  private enemyManager!: EnemyManager;
  private player!: Player;

  private elapsed = 0;
  private wasFiring: boolean = false;
  private defaultFov!: number;
  private adsFov!: number;

  public async initialize(engine: IGameEngine): Promise<void> {
    this.engine = engine;
    // Access Three.js components from engine
    const spEngine = engine as unknown as {
      getThreeScene(): THREE.Scene;
      getRenderer(): THREE.WebGLRenderer;
      getCamera(): THREE.Camera;
      scene: THREE.Scene;
      camera: THREE.Camera;
      renderer: THREE.WebGLRenderer;
    };

    this.scene = spEngine.getThreeScene?.() || spEngine.scene;
    this.renderer = spEngine.getRenderer?.() || spEngine.renderer;
    this.camera = spEngine.getCamera?.() || spEngine.camera;

    // Initialize physics
    this.physics = new PhysicsHelper();

    // Create skybox
    const basePath = import.meta.env.BASE_URL;
    console.log('🌌 Creating skybox with path:', `${basePath}skybox/`);
    try {
      new SkyBox(this.renderer, this.scene, `${basePath}skybox/`);
      console.log('🌌 Skybox creation initiated');
    } catch (error) {
      console.error('🌌 Skybox creation failed:', error);
    }

    // Create floor
    this.physics.createFloorCollider(new RAPIER.Vector3(0, -0.5, 0), new RAPIER.Vector3(50, 1, 50));
    const floorGeom = new THREE.BoxGeometry(50, 1, 50);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
    const floorMesh = new THREE.Mesh(floorGeom, floorMat);
    floorMesh.position.set(0, -0.5, 0);
    floorMesh.receiveShadow = true;
    this.scene.add(floorMesh);
    console.log('🏗️ Floor created and added to scene');

    // Enhanced lighting
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    hemi.position.set(0, 20, 0);
    this.scene.add(hemi);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -25;
    directionalLight.shadow.camera.right = 25;
    directionalLight.shadow.camera.top = 25;
    directionalLight.shadow.camera.bottom = -25;
    this.scene.add(directionalLight);

    // Enable shadows on renderer
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Helper function to add obstacles with physics
    const addObstacle = (pos: THREE.Vector3, size: THREE.Vector3, color = 0x888888) => {
      // Visual mesh
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

      console.log(
        `🧱 Added obstacle at (${pos.x}, ${pos.y}, ${pos.z}) with size (${size.x}, ${size.y}, ${size.z})`,
      );
    };

    // Create walls around the perimeter
    addObstacle(new THREE.Vector3(0, 2.5, -15), new THREE.Vector3(20, 5, 1)); // Back wall
    addObstacle(new THREE.Vector3(-15, 2.5, 0), new THREE.Vector3(1, 5, 20)); // Left wall
    addObstacle(new THREE.Vector3(15, 2.5, 0), new THREE.Vector3(1, 5, 20)); // Right wall

    // Add cover crates with different colors
    addObstacle(new THREE.Vector3(5, 0.5, -5), new THREE.Vector3(2, 1, 2), 0x336633); // Green crate
    addObstacle(new THREE.Vector3(-5, 0.5, 5), new THREE.Vector3(2, 1, 2), 0x663333); // Red crate
    addObstacle(new THREE.Vector3(0, 0.5, 0), new THREE.Vector3(2, 1, 2), 0x333366); // Blue crate
    addObstacle(new THREE.Vector3(-8, 0.5, -8), new THREE.Vector3(1.5, 1, 1.5), 0x666633); // Yellow crate
    addObstacle(new THREE.Vector3(8, 0.5, 8), new THREE.Vector3(1.5, 1, 1.5), 0x663366); // Purple crate

    // Add some additional structural elements
    addObstacle(new THREE.Vector3(-10, 1, -10), new THREE.Vector3(3, 2, 1), 0x777777); // Barrier
    addObstacle(new THREE.Vector3(10, 1, 10), new THREE.Vector3(1, 2, 3), 0x777777); // Barrier

    // Create and initialize player
    console.log('🧍 Creating player...');
    this.player = new Player(this.scene, this.engine.inputManager, this.physics);
    console.log('🧍 Player created successfully');

    // Set engine camera to player camera
    const playerCam = this.player.getCamera();
    if (spEngine.camera) {
      // Copy player camera properties to engine camera
      spEngine.camera.position.copy(playerCam.position);
      spEngine.camera.rotation.copy(playerCam.rotation);
      if (
        spEngine.camera instanceof THREE.PerspectiveCamera &&
        playerCam instanceof THREE.PerspectiveCamera
      ) {
        spEngine.camera.fov = playerCam.fov;
        spEngine.camera.updateProjectionMatrix();
      }
    }
    this.camera = playerCam;

    // Initialize game systems
    this.projectileManager = new ProjectileManager(this.scene, this.physics.world);
    this.enemyManager = new EnemyManager(
      this.scene,
      this.physics.world,
      this.projectileManager,
      this.player,
      this.camera as THREE.PerspectiveCamera,
    );
    this.projectileManager.setEnemyManager(this.enemyManager);
    this.projectileManager.setPlayer(this.player);

    this.weaponManager = new WeaponManager(this.projectileManager);

    // Initialize weapon view
    const initialWeapon = this.weaponManager.getCurrentWeapon();
    const initialOpts = initialWeapon.getOptions();

    this.weaponView = new WeaponView(
      this.camera,
      initialOpts.viewOffset,
      initialOpts.viewRotationOffset,
      initialOpts.viewScale,
    );

    if (initialOpts.modelPath) {
      this.weaponView.load(`${basePath}${initialOpts.modelPath}`);
    }

    // Configure ADS for weapon
    const defaultOffset = initialOpts.viewOffset?.clone() ?? new THREE.Vector3(0.3, -0.35, -0.5);
    const defaultRot =
      initialOpts.viewRotationOffset?.clone() ?? new THREE.Euler(0, Math.PI / 2, 0);
    const adsOffset = initialOpts.adsOffset?.clone() ?? defaultOffset.clone();
    const adsRot = initialOpts.adsRotationOffset?.clone() ?? defaultRot.clone();
    const adsTime = initialOpts.adsTransitionTime ?? 0.15;
    this.weaponView.configureADS(adsOffset, adsRot, adsTime);

    // Store camera FOV settings
    this.defaultFov = (this.camera as THREE.PerspectiveCamera).fov;
    this.adsFov = initialOpts.adsFov ?? this.defaultFov * 0.75;

    // Spawn enemies
    this.enemyManager.spawnEnemy(new THREE.Vector3(5, 1, -5));
    this.enemyManager.spawnEnemy(new THREE.Vector3(-5, 1, 5));
    this.enemyManager.spawnEnemy(new THREE.Vector3(10, 1, -10));

    // Add key listeners
    window.addEventListener('keydown', this.onKeyDown);

    console.log('🏗️ DevLevel initialized with skybox and obstacles');
  }

  public activate(): void {
    console.log('🎮 DevLevel activated');
  }

  public deactivate(): void {
    console.log('🎮 DevLevel deactivated');
    window.removeEventListener('keydown', this.onKeyDown);
  }

  public update(deltaTime: number): void {
    this.elapsed += deltaTime;

    // Update physics (client-side prediction)
    this.physics.step(deltaTime);

    // Update local player
    this.player.update(deltaTime);

    // Sync engine camera with player camera for consistent rendering
    const playerCamera = this.player.getCamera();
    if (this.renderer && playerCamera) {
      // Update engine camera position and rotation to match player camera
      const spEngine = this.engine as unknown as {
        camera: THREE.Camera;
      };
      if (spEngine.camera) {
        spEngine.camera.position.copy(playerCamera.position);
        spEngine.camera.rotation.copy(playerCamera.rotation);
        if (
          spEngine.camera instanceof THREE.PerspectiveCamera &&
          playerCamera instanceof THREE.PerspectiveCamera
        ) {
          spEngine.camera.fov = playerCamera.fov;
          spEngine.camera.updateProjectionMatrix();
        }
      }
    }

    // Update other systems
    this.projectileManager.update(deltaTime);
    this.enemyManager.update(deltaTime, this.elapsed);

    // Handle weapon firing and ADS using correct input API
    const input = this.engine.inputManager.getCurrentInput();
    const currentWeapon = this.weaponManager.getCurrentWeapon();

    // Update weapon view (client-side only)
    this.weaponView.update(deltaTime);

    // ADS camera adjustment (client-side only) - using right mouse button from input
    const isAiming = this.engine.inputManager.isKeyPressed('Mouse2');
    if (this.camera instanceof THREE.PerspectiveCamera) {
      const targetFov = isAiming ? this.adsFov : this.defaultFov;
      this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFov, deltaTime * 10);
      this.camera.updateProjectionMatrix();
    }

    // Update UI systems - get access to UI Manager from engine
    const spEngine = this.engine as unknown as {
      ui: {
        hud: { setSpread: (spread: number) => void; setADSProgress: (progress: number) => void };
      };
    };
    if (spEngine.ui?.hud) {
      // Update crosshair spread based on weapon accuracy and movement
      const baseSpread = 5; // Default spread value
      const movementInput =
        input.moveForward || input.moveBackward || input.moveLeft || input.moveRight;
      const movementSpread = movementInput ? 2 : 0;
      const totalSpread = baseSpread + movementSpread;
      spEngine.ui.hud.setSpread(totalSpread);

      // Update ADS progress for crosshair transition
      if (isAiming && this.camera instanceof THREE.PerspectiveCamera) {
        // Calculate ADS progress - smooth transition
        const adsProgress = Math.min(
          1,
          (this.defaultFov - this.camera.fov) / (this.defaultFov - this.adsFov),
        );
        spEngine.ui.hud.setADSProgress(adsProgress);
      } else {
        spEngine.ui.hud.setADSProgress(0);
      }
    }

    // Handle firing using input state
    if (input.fire && !this.wasFiring) {
      if (currentWeapon.canFire(this.elapsed)) {
        const origin = new THREE.Vector3().copy(this.player.getPosition());
        const direction = this.camera.getWorldDirection(new THREE.Vector3());
        this.weaponManager.tryFire(origin, direction, this.elapsed);
        // Note: Weapon view recoil would be handled by the weapon view system
      }
    }
    this.wasFiring = input.fire;

    // Handle reload
    if (input.reload) {
      currentWeapon.reload();
    }
  }

  public render(): void {
    // Use the player camera for rendering, not the engine's static camera
    if (this.player) {
      const playerCamera = this.player.getCamera();
      this.renderer.render(this.scene, playerCamera);
    } else {
      // Fallback to engine camera if no player
      this.renderer.render(this.scene, this.camera);
    }
  }

  // Player management - implementing IScene interface
  public spawnPlayer(playerId: string, position: { x: number; y: number; z: number }): IPlayer {
    const spawn = new THREE.Vector3(position.x, position.y, position.z);
    const player = new Player(this.scene, this.engine.inputManager, this.physics, spawn);
    this.players.set(playerId, player);
    return player as unknown as IPlayer;
  }

  public removePlayer(playerId: string): void {
    const player = this.players.get(playerId);
    if (player) {
      this.players.delete(playerId);
      // Clean up player resources if needed
    }
  }

  public getPlayer(playerId: string): IPlayer | null {
    const player = this.players.get(playerId);
    return player ? (player as unknown as IPlayer) : null;
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

  // Legacy methods for backward compatibility
  public addPlayer(player: IPlayer): void {
    console.log('🧍 Adding player to DevLevel');
    this.players.set(player.id, player as unknown as Player);
  }

  public getPlayers(): Map<string, IPlayer> {
    return this.players as unknown as Map<string, IPlayer>;
  }

  public getPhysicsWorld(): RAPIER.World {
    return this.physics.world;
  }

  private onKeyDown = (event: KeyboardEvent): void => {
    // Simplified key handling - weapon switching would be handled through proper input system
    switch (event.code) {
      case 'KeyR':
        // Reload would be handled through input system
        const currentWeapon = this.weaponManager.getCurrentWeapon();
        currentWeapon.reload();
        break;
    }
  };

  public dispose(): void {
    // Clean up resources
    window.removeEventListener('keydown', this.onKeyDown);
    this.players.clear();
    this.gameObjects.forEach(obj => {
      if (obj.parent) {
        obj.parent.remove(obj);
      }
    });
    this.gameObjects.length = 0;
  }
}
