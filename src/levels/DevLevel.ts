// src/levels/DevLevel.ts
import * as RAPIER from '@dimforge/rapier3d';
import * as THREE from 'three';

import { Game } from '../core/Game';

/**
 * Development level with simple floor and placeholder enemies.
 */
export class DevLevel extends Game {
  protected initLevel(): void {
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

    // Spawn placeholder enemies
    this.enemyManager.spawnEnemy(new THREE.Vector3(5, 2, -5));
    this.enemyManager.spawnEnemy(new THREE.Vector3(-5, 2, 5));
    this.enemyManager.spawnEnemy(new THREE.Vector3(10, 2, -10));
  }
}
