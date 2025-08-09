// src/core/ProductionInputManager.ts
import { IInputManager } from '../interfaces/IInputManager';
import { IPlayerInput } from '../interfaces/IPlayer';

/**
 * Production-quality input manager
 */
export class ProductionInputManager implements IInputManager {
  private keysPressed: Set<string> = new Set();
  private mouseDelta: { x: number; y: number } = { x: 0, y: 0 };
  private sensitivity: number = 1.0;
  private invertY: boolean = false;
  private isEnabled: boolean = true;

  // Event callbacks
  private keyDownCallbacks: Array<(key: string) => void> = [];
  private keyUpCallbacks: Array<(key: string) => void> = [];
  private mouseMoveCallbacks: Array<(deltaX: number, deltaY: number) => void> = [];

  constructor() {
    this.setupEventListeners();
  }

  public setSensitivity(sensitivity: number): void {
    this.sensitivity = sensitivity;
  }

  public setInvertY(invert: boolean): void {
    this.invertY = invert;
  }

  public getCurrentInput(): IPlayerInput {
    return {
      moveForward: this.isKeyPressed('KeyW') || this.isKeyPressed('ArrowUp'),
      moveBackward: this.isKeyPressed('KeyS') || this.isKeyPressed('ArrowDown'),
      moveLeft: this.isKeyPressed('KeyA') || this.isKeyPressed('ArrowLeft'),
      moveRight: this.isKeyPressed('KeyD') || this.isKeyPressed('ArrowRight'),
      jump: this.isKeyPressed('Space'),
      fire: this.isKeyPressed('MouseLeft') || this.isKeyPressed('LeftClick'),
      reload: this.isKeyPressed('KeyR'),
      mouseDeltaX: this.mouseDelta.x * this.sensitivity,
      mouseDeltaY: this.mouseDelta.y * this.sensitivity * (this.invertY ? -1 : 1),
    };
  }

  public isKeyPressed(key: string): boolean {
    return this.keysPressed.has(key);
  }

  public getMouseDelta(): { x: number; y: number } {
    return { ...this.mouseDelta };
  }

  public resetMouseDelta(): void {
    this.mouseDelta.x = 0;
    this.mouseDelta.y = 0;
  }

  public onKeyDown(callback: (key: string) => void): void {
    this.keyDownCallbacks.push(callback);
  }

  public onKeyUp(callback: (key: string) => void): void {
    this.keyUpCallbacks.push(callback);
  }

  public onMouseMove(callback: (deltaX: number, deltaY: number) => void): void {
    this.mouseMoveCallbacks.push(callback);
  }

  public enable(): void {
    this.isEnabled = true;
  }

  public disable(): void {
    this.isEnabled = false;
    this.keysPressed.clear();
    this.mouseDelta.x = 0;
    this.mouseDelta.y = 0;
  }

  public update(): void {
    // Don't reset mouse delta here - it should be done after mouse look processing
    // Mouse delta will be reset by the consuming code after use
  }

  private setupEventListeners(): void {
    // Keyboard events
    document.addEventListener('keydown', event => {
      if (!this.isEnabled) return;

      this.keysPressed.add(event.code);
      this.keyDownCallbacks.forEach(callback => callback(event.code));
    });

    document.addEventListener('keyup', event => {
      if (!this.isEnabled) return;

      this.keysPressed.delete(event.code);
      this.keyUpCallbacks.forEach(callback => callback(event.code));
    });

    // Mouse events
    document.addEventListener('mousemove', event => {
      if (!this.isEnabled || !document.pointerLockElement) return;

      this.mouseDelta.x += event.movementX;
      this.mouseDelta.y += event.movementY;

      this.mouseMoveCallbacks.forEach(callback =>
        callback(event.movementX * this.sensitivity, event.movementY * this.sensitivity),
      );
    });

    document.addEventListener('mousedown', event => {
      if (!this.isEnabled) return;

      // Map mouse buttons: 0=left, 1=middle, 2=right
      const key =
        event.button === 0 ? 'MouseLeft' : event.button === 1 ? 'MouseMiddle' : 'MouseRight';

      // Also add alternative names for compatibility
      const altKey = event.button === 0 ? 'Mouse0' : event.button === 1 ? 'Mouse1' : 'Mouse2';

      this.keysPressed.add(key);
      this.keysPressed.add(altKey);
      this.keyDownCallbacks.forEach(callback => callback(key));
    });

    document.addEventListener('mouseup', event => {
      if (!this.isEnabled) return;

      // Map mouse buttons: 0=left, 1=middle, 2=right
      const key =
        event.button === 0 ? 'MouseLeft' : event.button === 1 ? 'MouseMiddle' : 'MouseRight';

      // Also remove alternative names for compatibility
      const altKey = event.button === 0 ? 'Mouse0' : event.button === 1 ? 'Mouse1' : 'Mouse2';

      this.keysPressed.delete(key);
      this.keysPressed.delete(altKey);
      this.keyUpCallbacks.forEach(callback => callback(key));
    });

    // Pointer lock events
    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement) {
        this.keysPressed.delete('MouseLeft');
        this.keysPressed.delete('MouseRight');
        this.keysPressed.delete('MouseMiddle');
        this.keysPressed.delete('Mouse0');
        this.keysPressed.delete('Mouse1');
        this.keysPressed.delete('Mouse2');
      }
    });
  }
}
