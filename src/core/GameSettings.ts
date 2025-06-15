// src/core/GameSettings.ts
// Defines input and graphics settings and persistence helpers.

/** Mouse/inversion settings for camera control */
export interface InputSettings {
  /** Global mouse sensitivity multiplier */
  mouseSensitivity: number;
  /** If true, invert the Y-axis for look controls */
  invertY: boolean;
}

/** Graphics-related options */
export interface GraphicsSettings {
  /** Render resolution scale relative to device pixel ratio (0.5–2.0) */
  resolutionScale: number;
  /** Fullscreen toggle */
  fullscreen: boolean;
  /** Vertical sync enabled/disabled */
  vsync: boolean;
  /** Field of view in degrees */
  fov: number;
}

/** Top-level game settings object */
export interface GameSettings {
  input: InputSettings;
  graphics: GraphicsSettings;
}

const STORAGE_KEY = 'myfpsgame-settings';

/** Returns default settings object */
function defaultSettings(): GameSettings {
  return {
    input: { mouseSensitivity: 1.0, invertY: false },
    graphics: { resolutionScale: 1.0, fullscreen: false, vsync: true, fov: 75 },
  };
}

/**
 * Load settings from localStorage, falling back to defaults.
 */
export function loadSettings(): GameSettings {
  try {
    const json = localStorage.getItem(STORAGE_KEY);
    if (json) {
      return JSON.parse(json) as GameSettings;
    }
  } catch {
    // ignore parse errors
  }
  return defaultSettings();
}

/**
 * Persist settings to localStorage.
 */
export function saveSettings(settings: GameSettings): void {
  try {
    const json = JSON.stringify(settings);
    localStorage.setItem(STORAGE_KEY, json);
  } catch {
    // ignore storage errors
  }
}
