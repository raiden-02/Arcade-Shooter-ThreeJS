import * as THREE from 'three';

export class NetworkPlayer {
  public readonly id: string;
  public readonly root: THREE.Group;
  private body: THREE.Mesh;
  private nameSprite: THREE.Sprite;
  private targetPos: THREE.Vector3 = new THREE.Vector3();
  private lerpSpeed = 12; // smoothing factor

  constructor(id: string, name: string, scene: THREE.Scene) {
    this.id = id;
    this.root = new THREE.Group();

    const geom = new THREE.CapsuleGeometry(0.4, 1.6, 8, 16);
    const mat = new THREE.MeshStandardMaterial({ color: 0x2a7bff, roughness: 0.6, metalness: 0 });
    this.body = new THREE.Mesh(geom, mat);
    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.root.add(this.body);

    // Nameplate
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff88';
    ctx.font = '28px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name || id.slice(-6), canvas.width / 2, canvas.height / 2);
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    const spriteMat = new THREE.SpriteMaterial({ map: tex, depthTest: false });
    this.nameSprite = new THREE.Sprite(spriteMat);
    this.nameSprite.position.set(0, 2.0, 0);
    this.nameSprite.scale.set(1.5, 0.375, 1);
    this.root.add(this.nameSprite);

    scene.add(this.root);
  }

  setPosition(x: number, y: number, z: number) {
    this.targetPos.set(x, y, z);
    if (this.root.position.lengthSq() === 0) {
      // First set snaps to target to avoid sliding from origin
      this.root.position.copy(this.targetPos);
    }
  }

  update(dt: number) {
    // Smoothly move toward target
    this.root.position.lerp(this.targetPos, Math.min(1, dt * this.lerpSpeed));
  }

  dispose(scene: THREE.Scene) {
    scene.remove(this.root);
    this.body.geometry.dispose();
    (this.body.material as THREE.Material).dispose();
    (this.nameSprite.material as THREE.Material).dispose();
  }
}
