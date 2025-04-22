// src/core/Scene.ts
import * as THREE from 'three';

import { UIManager } from '../ui/UIManager';

import { Engine } from './Engine';
import { InputManager } from './InputManager';
import { PhysicsHelper } from './PhysicsHelper';

/**
 * Interface for game scenes/levels.
 */
export interface IScene {
  /** Called once when the scene is activated. */
  init(): void;
  /** Called each frame with elapsed seconds. */
  update(delta: number): void;
  /** Called before scene is disposed/unloaded. */
  dispose(): void;
}

/**
 * Base class for scenes, providing engine systems.
 */
export abstract class BaseScene implements IScene {
  protected engine: Engine;
  protected scene: THREE.Scene;
  protected camera: THREE.PerspectiveCamera;
  protected renderer: THREE.WebGLRenderer;
  protected input: InputManager;
  protected physics: PhysicsHelper;
  protected ui: UIManager;

  constructor(engine: Engine) {
    this.engine = engine;
    this.scene = engine.scene;
    this.camera = engine.camera;
    this.renderer = engine.renderer;
    this.input = engine.input;
    this.physics = engine.physics;
    this.ui = engine.ui;
  }

  abstract init(): void;
  abstract update(delta: number): void;
  abstract dispose(): void;
}
