// src/interfaces/IGameEngine.ts
import { GameState } from '../core/GameStateMachine';

import { IInputManager } from './IInputManager';
import { INetworkManager } from './INetworkManager';
import { IPhysicsWorld } from './IPhysicsWorld';
import { IScene } from './IScene';

export interface IGameEngine {
  // Core systems
  readonly inputManager: IInputManager;
  readonly physicsWorld: IPhysicsWorld;
  readonly networkManager?: INetworkManager;

  // Scene management
  loadScene(scene: IScene): Promise<void>;
  getCurrentScene(): IScene | null;

  // Game state
  getCurrentState(): GameState;
  transitionToState(state: GameState): void;

  // Lifecycle
  start(): void;
  stop(): void;
  update(deltaTime: number): void;

  // Multiplayer capabilities
  isMultiplayer(): boolean;
  getPlayerId(): string | null;
}
