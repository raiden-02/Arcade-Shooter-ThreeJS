// src/core/Game.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { EnemyManager } from '../enemy/EnemyManager';
import { CameraRig } from '../player/CameraRig';
import { PlayerController } from '../player/PlayerController';
import { UIManager } from '../ui/UIManager';

import { InputManager } from './InputManager';
import { PhysicsHelper } from './PhysicsHelper';
import { ProjectileManager } from './ProjectileManager';
import { SkyBox } from './SkyBox';
import { WeaponManager } from './WeaponManager';

export class Game {
  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private clock: THREE.Clock;
  private input: InputManager;
  private cameraRig: CameraRig;
  private playerController: PlayerController;
  private physics: PhysicsHelper;
  private playerBody: RAPIER.RigidBody;
  private ui: UIManager;
  private paused = false;
  // True while left mouse button is held down for automatic fire
  private isFiring: boolean = false;
  private projectileManager: ProjectileManager;
  private weaponManager: WeaponManager;
  private enemyManager: EnemyManager;

  constructor() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);
    // Load and apply a pluggable skybox (background + environment lighting)
    new SkyBox(this.renderer, this.scene, '/skybox/');

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.clock = new THREE.Clock();
    this.input = new InputManager();

    this.cameraRig = new CameraRig(this.camera);
    this.scene.add(this.cameraRig.object);

    this.physics = new PhysicsHelper();
    this.playerBody = this.physics.createPlayerBody(new RAPIER.Vector3(0, 2, 0));
    this.physics.createFloorCollider(new RAPIER.Vector3(0, -0.5, 0), new RAPIER.Vector3(50, 1, 50));

    this.playerController = new PlayerController(
      this.cameraRig,
      this.input,
      this.playerBody,
      this.physics.world,
    );

    this.enemyManager = new EnemyManager(this.scene, this.physics.world);
    this.projectileManager = new ProjectileManager(
      this.scene,
      this.physics.world,
      this.enemyManager,
    );
    // Weapon system: manage multiple weapon types
    this.weaponManager = new WeaponManager(this.projectileManager);

    this.enemyManager.spawnEnemy(new THREE.Vector3(5, 2, -5));
    this.enemyManager.spawnEnemy(new THREE.Vector3(-5, 2, 5));
    this.enemyManager.spawnEnemy(new THREE.Vector3(10, 2, -10));

    this.addTestFloor();
    window.addEventListener('resize', () => this.onWindowResize());

    this.ui = new UIManager();
    // Initialize weapon info display for the default weapon
    const initialWeapon = this.weaponManager.getCurrentWeapon();
    this.ui.updateWeaponInfo(initialWeapon.getName(), initialWeapon.getOptions());
    // Handle automatic firing when left mouse button is held
    window.addEventListener('mousedown', e => {
      // Start automatic fire only when left button and pointer locked
      if (
        e.button === 0 &&
        !this.paused &&
        document.pointerLockElement === this.renderer.domElement
      ) {
        this.isFiring = true;
      }
    });
    window.addEventListener('mouseup', e => {
      if (e.button === 0) {
        this.isFiring = false;
      }
    });

    document.addEventListener('pointerlockchange', () => {
      const canvas = this.renderer.domElement;
      if (document.pointerLockElement !== canvas && !this.paused) {
        this.paused = true;
        this.ui.showPause();
        this.isFiring = false;
      }
    });

    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        if (!this.paused) {
          // First ESC: exit pointer lock → handled by pointerlockchange
          return;
        } else {
          // Resume
          this.paused = false;
          this.ui.hidePause();
          this.isFiring = false;
          this.renderer.domElement.requestPointerLock(); // re-enter
        }
      }
    });

    document.addEventListener('unpause', () => {
      this.paused = false;
      this.ui.hidePause();
      this.clock.getDelta(); // reset delta accumulator
      this.isFiring = false;
    });

    // Weapon switching: keys 1-9 or Q for next
    document.addEventListener('keydown', e => {
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
        const current = this.weaponManager.getCurrentWeapon();
        this.ui.updateWeaponInfo(current.getName(), current.getOptions());
      }
    });
  }

  private addTestFloor() {
    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(50, 1, 50),
      new THREE.MeshStandardMaterial({ color: 0x555555 }),
    );
    floor.position.y = -0.5;
    floor.receiveShadow = true;
    this.scene.add(floor);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    this.scene.add(light);
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  start() {
    this.animate();
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    if (this.paused) {
      this.clock.getDelta(); // discard delta so it doesn't pile up
      return;
    }

    const delta = this.clock.getDelta();

    this.physics.step(delta);
    // Automatic firing when left mouse button is held
    if (this.isFiring) {
      const mouse = new THREE.Vector2(0, 0);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, this.camera);
      const spawnOffset = 0.5;
      const origin = raycaster.ray.origin
        .clone()
        .add(raycaster.ray.direction.clone().multiplyScalar(spawnOffset));
      const direction = raycaster.ray.direction.clone();
      const time = this.clock.getElapsedTime();
      if (this.weaponManager.tryFire(origin, direction, time)) {
        // Apply vertical recoil (now tilts view upward)
        const opts = this.weaponManager.getCurrentWeapon().getOptions();
        const recoilVert = opts.recoil ?? 0;
        this.cameraRig.rotatePitch(recoilVert);
        // Apply a small random horizontal recoil for realism
        const recoilHorz = (Math.random() - 0.5) * recoilVert;
        this.cameraRig.rotateYaw(recoilHorz);
      }
    }
    this.playerController.update();
    this.projectileManager.update(delta);
    this.enemyManager.update();
    this.syncGraphicsToPhysics();
    this.renderer.render(this.scene, this.camera);
  };

  private syncGraphicsToPhysics() {
    const pos = this.playerBody.translation();
    this.cameraRig.position.set(pos.x, pos.y, pos.z);
  }
}
