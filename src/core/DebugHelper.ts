import * as THREE from 'three';

export function drawDebugLine(
  scene: THREE.Scene,
  start: THREE.Vector3,
  end: THREE.Vector3,
  color = 0xffff00,
  duration = 0.25,
) {
  const material = new THREE.LineBasicMaterial({ color });
  const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
  const line = new THREE.Line(geometry, material);
  scene.add(line);

  setTimeout(() => {
    scene.remove(line);
    geometry.dispose();
    material.dispose();
  }, duration * 1000);
}
