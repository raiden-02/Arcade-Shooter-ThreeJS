// Service to manage loading, saving, and providing game settings at runtime.

import { GameSettings, loadSettings, saveSettings } from './GameSettings';

// Helper type for deep partial objects
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

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

  /** Update specific settings properties and persist to storage. */
  public updateSettings(partialSettings: DeepPartial<GameSettings>): void {
    this.settings = this.deepMerge(this.settings, partialSettings);
    saveSettings(this.settings);
  }

  private deepMerge<T>(target: T, source: DeepPartial<T>): T {
    const result = { ...target } as T;

    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const sourceValue = source[key];
        if (
          sourceValue !== null &&
          typeof sourceValue === 'object' &&
          !Array.isArray(sourceValue)
        ) {
          result[key] = this.deepMerge(result[key], sourceValue);
        } else if (sourceValue !== undefined) {
          result[key] = sourceValue as T[Extract<keyof T, string>];
        }
      }
    }

    return result;
  }
}
