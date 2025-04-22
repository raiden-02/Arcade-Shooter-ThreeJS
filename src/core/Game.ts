// src/core/Game.ts
import * as THREE from 'three';

import { EnemyManager } from '../enemy/EnemyManager';
import { Player } from '../player/Player';
import { UIManager } from '../ui/UIManager';

import { InputManager, InputAction } from './InputManager';
import { PhysicsHelper } from './PhysicsHelper';
import { ProjectileManager } from './ProjectileManager';
import { SkyBox } from './SkyBox';
import { WeaponManager } from './WeaponManager';

export class Game {
  protected scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private clock: THREE.Clock;
  private input: InputManager;
  protected physics: PhysicsHelper;
  private player: Player;
  private ui: UIManager;
  private paused = false;
  // True while left mouse button is held down for automatic fire
  private isFiring: boolean = false;
  private projectileManager: ProjectileManager;
  private weaponManager: WeaponManager;
  protected enemyManager: EnemyManager;

  constructor() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);
    // Load and apply a pluggable skybox (background + environment lighting)
    new SkyBox(this.renderer, this.scene, '/skybox/');

    this.clock = new THREE.Clock();
    this.input = new InputManager();

    this.physics = new PhysicsHelper();

    this.player = new Player(this.scene, this.input, this.physics);
    this.camera = this.player.getCamera();

    this.enemyManager = new EnemyManager(this.scene, this.physics.world);
    this.projectileManager = new ProjectileManager(
      this.scene,
      this.physics.world,
      this.enemyManager,
    );
    // Weapon system: manage multiple weapon types
    this.weaponManager = new WeaponManager(this.projectileManager);
    // Initialize level-specific setup
    this.initLevel();
    window.addEventListener('resize', () => this.onWindowResize());

    this.ui = new UIManager();
    // Initialize weapon info display for the default weapon
    const initialWeapon = this.weaponManager.getCurrentWeapon();
    this.ui.updateWeaponInfo(initialWeapon.getName(), initialWeapon.getOptions());

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

  /**
   * Level-specific initialization; override in subclasses to set up level geometry, colliders, and actors.
   */
  protected initLevel(): void {
    // no-op default implementation
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  start() {
    this.animate();
  }
  /**
   * Perform a single weapon shot and apply recoil.
   */
  private shoot() {
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
      const opts = this.weaponManager.getCurrentWeapon().getOptions();
      const recoilVert = opts.recoil ?? 0;
      const recoilHorz = (Math.random() - 0.5) * recoilVert;
      this.player.applyRecoil(recoilVert, recoilHorz);
    }
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    if (this.paused) {
      this.clock.getDelta(); // discard delta so it doesn't pile up
      return;
    }

    const delta = this.clock.getDelta();

    this.physics.step(delta);
    // Handle firing input (automatic vs. semi-auto)
    const firePressed = this.input.isPressed(InputAction.Fire);
    const currentOpts = this.weaponManager.getCurrentWeapon().getOptions();
    if (firePressed) {
      if (currentOpts.automatic) {
        this.shoot();
      } else if (!this.isFiring) {
        this.shoot();
        this.isFiring = true;
      }
    } else {
      this.isFiring = false;
    }
    this.player.update();
    this.projectileManager.update(delta);
    // Handle collisions with the environment (floor, walls, etc.)
    this.projectileManager.handleCollisions(this.physics.eventQueue);
    this.enemyManager.update();
    this.renderer.render(this.scene, this.camera);
  };
}
