// src/core/Game.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { CameraRig } from '../player/CameraRig';
import { PlayerController } from '../player/PlayerController';
import { UIManager } from '../ui/UIManager';

import { InputManager } from './InputManager';
import { PhysicsHelper } from './PhysicsHelper';
import { ProjectileManager } from './ProjectileManager';

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
  private projectileManager: ProjectileManager;

  constructor() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);

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

    this.projectileManager = new ProjectileManager(this.scene, this.physics.world);

    this.addTestFloor();
    window.addEventListener('resize', () => this.onWindowResize());

    this.ui = new UIManager();

    document.addEventListener('pointerlockchange', () => {
      const canvas = this.renderer.domElement;
      if (document.pointerLockElement !== canvas && !this.paused) {
        this.paused = true;
        this.ui.showPause();
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
          this.renderer.domElement.requestPointerLock(); // re-enter
        }
      }
    });

    document.addEventListener('unpause', () => {
      this.paused = false;
      this.ui.hidePause();
      this.clock.getDelta(); // reset delta accumulator
    });

    window.addEventListener('click', () => {
      const origin = new THREE.Vector3();
      this.camera.getWorldPosition(origin);

      const direction = new THREE.Vector3();
      this.camera.getWorldDirection(direction);

      this.projectileManager.fire(origin, direction);
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
    this.playerController.update();
    this.projectileManager.update();
    this.syncGraphicsToPhysics();
    this.renderer.render(this.scene, this.camera);
  };

  private syncGraphicsToPhysics() {
    const pos = this.playerBody.translation();
    this.cameraRig.position.set(pos.x, pos.y, pos.z);
  }
}
