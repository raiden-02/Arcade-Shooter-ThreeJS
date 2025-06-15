// src/core/SettingsService.ts
// Service to manage loading, saving, and providing game settings at runtime.

import { GameSettings, loadSettings, saveSettings } from './GameSettings';

/**
 * SettingsService wraps persistent storage and provides the current settings state.
 */
export class SettingsService {
  private settings: GameSettings;

  constructor() {
    this.settings = loadSettings();
  }

  /** Get the current settings (mutable copy). */
  public getSettings(): GameSettings {
    return JSON.parse(JSON.stringify(this.settings));
  }

  /** Update settings and persist to storage. */
  public applySettings(newSettings: GameSettings): void {
    this.settings = newSettings;
    saveSettings(this.settings);
  }
}
