// src/interfaces/IInputManager.ts
import { IPlayerInput } from './IPlayer';

export interface IInputManager {
  // Configuration
  setSensitivity(sensitivity: number): void;
  setInvertY(invert: boolean): void;

  // Input state
  getCurrentInput(): IPlayerInput;
  isKeyPressed(key: string): boolean;
  getMouseDelta(): { x: number; y: number };

  // Event handling
  onKeyDown(callback: (key: string) => void): void;
  onKeyUp(callback: (key: string) => void): void;
  onMouseMove(callback: (deltaX: number, deltaY: number) => void): void;

  // Lifecycle
  enable(): void;
  disable(): void;
  update(): void;
}
