// src/interfaces/IUIManager.ts
import { GameState } from '../core/GameStateMachine';

export interface IUIManager {
  // State management
  showMainMenu(): void;
  hideMainMenu(): void;
  showGameUI(): void;
  hideGameUI(): void;
  showPauseMenu(): void;
  hidePauseMenu(): void;

  // Game state updates
  updateHealth(current: number, max: number): void;
  updateAmmo(current: number, max: number, isReloading: boolean): void;
  updateWeaponInfo(weaponName: string, weaponData: Record<string, unknown>): void;
  showHitMarker(): void;

  // Multiplayer UI
  showSessionCreationUI(): void;
  showSessionJoinUI(): void;
  displaySessionId(sessionId: string): void;
  updateConnectionStatus(status: string): void;

  // Death/respawn
  showDeathScreen(respawnTime: number): void;
  hideDeathScreen(): void;

  // Lifecycle
  handleGameStateChange(oldState: GameState, newState: GameState): void;
  dispose(): void;
}
