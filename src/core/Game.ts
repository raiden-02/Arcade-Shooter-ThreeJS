import * as THREE from 'three';
import { InputManager } from './InputManager';
import { CameraRig } from '../player/CameraRig';
import { PlayerController } from '../player/PlayerController';
import { PhysicsHelper } from './PhysicsHelper';
import * as RAPIER from '@dimforge/rapier3d';

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

    constructor() {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.clock = new THREE.Clock();
        this.input = new InputManager();

        this.cameraRig = new CameraRig(this.camera);
        this.scene.add(this.cameraRig.object);

        this.physics = new PhysicsHelper();
        this.playerBody = this.physics.createPlayerBody(new RAPIER.Vector3(0, 2, 0));
        this.physics.createFloorCollider(new RAPIER.Vector3(0, -0.5, 0), new RAPIER.Vector3(50, 1, 50));

        this.playerController = new PlayerController(this.cameraRig, this.input, this.playerBody);

        this.addTestFloor();
        window.addEventListener('resize', () => this.onWindowResize());
    }

    private addTestFloor() {
        const floor = new THREE.Mesh(
            new THREE.BoxGeometry(50, 1, 50),
            new THREE.MeshStandardMaterial({ color: 0x555555 })
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
        const delta = this.clock.getDelta();

        this.physics.step(delta);
        this.playerController.update(delta);
        this.syncGraphicsToPhysics();
        this.renderer.render(this.scene, this.camera);
    }

    private syncGraphicsToPhysics() {
        const pos = this.playerBody.translation();
        this.cameraRig.position.set(pos.x, pos.y, pos.z);
    }
}
