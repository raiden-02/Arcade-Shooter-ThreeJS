// /src/core/InputManager.ts
import * as THREE from 'three';

export enum InputAction {
  MoveForward = 'MoveForward',
  MoveBackward = 'MoveBackward',
  MoveLeft = 'MoveLeft',
  MoveRight = 'MoveRight',
  Jump = 'Jump',
  Sprint = 'Sprint',
  Fire = 'Fire',
  Aim = 'Aim',
}

/**
 * Manages mapped user input (keyboard and mouse) as named actions.
 */
export class InputManager {
  // Raw state
  private keyStates: Map<string, boolean> = new Map();
  private buttonStates: Map<number, boolean> = new Map();
  private mouseDelta: THREE.Vector2 = new THREE.Vector2();
  private pointerLocked: boolean = false;

  // Action bindings
  private keyBindings: Map<InputAction, string[]> = new Map([
    [InputAction.MoveForward, ['KeyW']],
    [InputAction.MoveBackward, ['KeyS']],
    [InputAction.MoveLeft, ['KeyA']],
    [InputAction.MoveRight, ['KeyD']],
    [InputAction.Jump, ['Space']],
    [InputAction.Sprint, ['ShiftLeft', 'ShiftRight']],
  ]);
  private buttonBindings: Map<InputAction, number[]> = new Map([
    [InputAction.Fire, [0]], // Left mouse button
    [InputAction.Aim, [2]], // Right mouse button
  ]);

  constructor() {
    // Keyboard
    window.addEventListener('keydown', e => this.keyStates.set(e.code, true));
    window.addEventListener('keyup', e => this.keyStates.set(e.code, false));
    // Mouse buttons
    window.addEventListener('mousedown', e => this.buttonStates.set(e.button, true));
    window.addEventListener('mouseup', e => this.buttonStates.set(e.button, false));
    // Mouse movement (for look)
    window.addEventListener('mousemove', e => {
      if (this.pointerLocked) {
        this.mouseDelta.x += e.movementX;
        this.mouseDelta.y += e.movementY;
      }
    });
    // Pointer lock state
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement !== null;
      if (!this.pointerLocked) {
        this.reset();
      }
    });
  }

  /**
   * Returns and clears accumulated mouse movement delta.
   */
  public getMouseDelta(): THREE.Vector2 {
    const delta = this.mouseDelta.clone();
    this.mouseDelta.set(0, 0);
    return delta;
  }

  /**
   * Returns true if the given action is currently held.
   */
  public isPressed(action: InputAction): boolean {
    // Check keys
    const keys = this.keyBindings.get(action) || [];
    for (const code of keys) {
      if (this.keyStates.get(code)) return true;
    }
    // Check mouse buttons
    const buttons = this.buttonBindings.get(action) || [];
    for (const btn of buttons) {
      if (this.buttonStates.get(btn)) return true;
    }
    return false;
  }

  /**
   * Reset all input states (e.g. on pointer unlock).
   */
  public reset(): void {
    this.keyStates.clear();
    this.buttonStates.clear();
    this.mouseDelta.set(0, 0);
  }
}
