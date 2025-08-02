// src/ui/screens/PauseScreen.ts
import { IGameEngine } from '../../interfaces/IGameEngine';
import { GameState } from '../../core/GameStateMachine';
import { SettingsService } from '../../core/SettingsService';
import { UIScreen } from '../core/UIScreen';

/**
 * Pause menu screen.
 */
export class PauseScreen extends UIScreen {
  private engine: IGameEngine;
  private settingsService: SettingsService;

  constructor(engine: IGameEngine, settingsService: SettingsService) {
    super('pause-menu', GameState.Paused, 'pause-screen');
    this.engine = engine;
    this.settingsService = settingsService;

    // Re-setup the screen now that we have the dependencies
    this.setupScreen();
  }

  protected setupScreen(): void {
    // Guard against being called before dependencies are set
    if (!this.engine || !this.settingsService) {
      return;
    }

    this.element.innerHTML = `
      <div class="pause-menu-container">
        <div class="pause-menu-header">
          <h2>GAME PAUSED</h2>
        </div>
        
        <nav class="pause-menu-nav">
          <button id="resume-btn" class="menu-btn primary">RESUME</button>
          <button id="settings-btn" class="menu-btn">SETTINGS</button>
          <button id="restart-btn" class="menu-btn">RESTART</button>
          <button id="main-menu-btn" class="menu-btn">MAIN MENU</button>
        </nav>
        
        <!-- Settings panel (initially hidden) -->
        <div id="settings-panel" class="settings-panel" style="display: none;">
          <h3>Settings</h3>
          <!-- Settings content will be populated dynamically -->
        </div>
      </div>
    `;

    this.setupEventListeners();
    this.setupSettingsPanel();
  }

  protected setupEventListeners(): void {
    super.setupEventListeners();

    // Resume button
    const resumeBtn = this.element.querySelector('#resume-btn') as HTMLButtonElement;
    resumeBtn?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('ui:resumeGame'));
    });

    // Settings button
    const settingsBtn = this.element.querySelector('#settings-btn') as HTMLButtonElement;
    settingsBtn?.addEventListener('click', () => {
      this.toggleSettings();
    });

    // Restart button
    const restartBtn = this.element.querySelector('#restart-btn') as HTMLButtonElement;
    restartBtn?.addEventListener('click', () => {
      if (confirm('Are you sure you want to restart the level?')) {
        location.reload();
      }
    });

    // Main menu button
    const mainMenuBtn = this.element.querySelector('#main-menu-btn') as HTMLButtonElement;
    mainMenuBtn?.addEventListener('click', () => {
      if (confirm('Return to main menu? (Progress will be lost)')) {
        document.dispatchEvent(new CustomEvent('ui:showMainMenu'));
      }
    });
  }

  public onEnter(): void {
    console.log('Entering Pause Menu');
    // Show cursor
    document.body.style.cursor = 'default';
  }

  public onExit(): void {
    console.log('Exiting Pause Menu');
    // Hide cursor
    document.body.style.cursor = 'none';
  }

  public onKeyDown(event: KeyboardEvent): boolean {
    switch (event.code) {
      case 'Escape':
        // Resume game on Escape
        document.dispatchEvent(new CustomEvent('ui:resumeGame'));
        return true;
    }
    return false;
  }

  private toggleSettings(): void {
    const settingsPanel = this.element.querySelector('#settings-panel') as HTMLElement;
    if (settingsPanel) {
      const isVisible = settingsPanel.style.display !== 'none';
      settingsPanel.style.display = isVisible ? 'none' : 'block';
    }
  }

  private setupSettingsPanel(): void {
    const settingsPanel = this.element.querySelector('#settings-panel') as HTMLElement;
    if (!settingsPanel) return;

    const settings = this.settingsService.getSettings();

    settingsPanel.innerHTML = `
    <h3>Settings</h3>
    <div class="settings-grid">
      <!-- Input Settings -->
      <div class="settings-section">
        <h4>Input</h4>
        <label>
          Mouse Sensitivity: <span id="sens-value">${settings.input.mouseSensitivity}</span>
          <input type="range" id="sens-slider" min="0.1" max="5.0" step="0.1" value="${settings.input.mouseSensitivity}">
        </label>
        <label>
          <input type="checkbox" id="invert-y" ${settings.input.invertY ? 'checked' : ''}>
          Invert Y-Axis
        </label>
      </div>
      
      <!-- Graphics Settings -->
      <div class="settings-section">
        <h4>Graphics</h4>
        <label>
          Resolution Scale: <span id="res-value">${settings.graphics.resolutionScale}</span>
          <input type="range" id="res-slider" min="0.5" max="2.0" step="0.1" value="${settings.graphics.resolutionScale}">
        </label>
        <label>
          FOV: <span id="fov-value">${settings.graphics.fov}</span>
          <input type="range" id="fov-slider" min="60" max="120" step="1" value="${settings.graphics.fov}">
        </label>
        <label>
          <input type="checkbox" id="fullscreen" ${settings.graphics.fullscreen ? 'checked' : ''}>
          Fullscreen
        </label>
        <label>
          <input type="checkbox" id="vsync" ${settings.graphics.vsync ? 'checked' : ''}>
          VSync
        </label>
      </div>
    </div>
    
    <div class="settings-actions">
      <button id="apply-settings" class="menu-btn">Apply Settings</button>
      <button id="reset-settings" class="menu-btn">Reset to Defaults</button>
    </div>
  `;

    // Add event listeners for settings
    this.setupSettingsEventListeners();
  }

  private setupSettingsEventListeners(): void {
    // Sensitivity slider
    const sensSlider = this.element.querySelector('#sens-slider') as HTMLInputElement;
    const sensValue = this.element.querySelector('#sens-value');
    sensSlider?.addEventListener('input', () => {
      if (sensValue) sensValue.textContent = sensSlider.value;
    });

    // Resolution slider
    const resSlider = this.element.querySelector('#res-slider') as HTMLInputElement;
    const resValue = this.element.querySelector('#res-value');
    resSlider?.addEventListener('input', () => {
      if (resValue) resValue.textContent = resSlider.value;
    });

    // FOV slider
    const fovSlider = this.element.querySelector('#fov-slider') as HTMLInputElement;
    const fovValue = this.element.querySelector('#fov-value');
    fovSlider?.addEventListener('input', () => {
      if (fovValue) fovValue.textContent = fovSlider.value;
    });

    // Apply settings button
    const applyBtn = this.element.querySelector('#apply-settings') as HTMLButtonElement;
    applyBtn?.addEventListener('click', () => {
      this.applySettings();
    });

    // Reset settings button
    const resetBtn = this.element.querySelector('#reset-settings') as HTMLButtonElement;
    resetBtn?.addEventListener('click', () => {
      if (confirm('Reset all settings to defaults?')) {
        this.resetSettings();
      }
    });
  }

  private applySettings(): void {
    const settings = this.settingsService.getSettings();

    // Get values from UI
    const sensSlider = this.element.querySelector('#sens-slider') as HTMLInputElement;
    const invertYCheck = this.element.querySelector('#invert-y') as HTMLInputElement;
    const resSlider = this.element.querySelector('#res-slider') as HTMLInputElement;
    const fovSlider = this.element.querySelector('#fov-slider') as HTMLInputElement;
    const fullscreenCheck = this.element.querySelector('#fullscreen') as HTMLInputElement;
    const vsyncCheck = this.element.querySelector('#vsync') as HTMLInputElement;

    // Update settings
    if (sensSlider) settings.input.mouseSensitivity = parseFloat(sensSlider.value);
    if (invertYCheck) settings.input.invertY = invertYCheck.checked;
    if (resSlider) settings.graphics.resolutionScale = parseFloat(resSlider.value);
    if (fovSlider) settings.graphics.fov = parseInt(fovSlider.value, 10);
    if (fullscreenCheck) settings.graphics.fullscreen = fullscreenCheck.checked;
    if (vsyncCheck) settings.graphics.vsync = vsyncCheck.checked;

    // Apply settings through services
    this.settingsService.applySettings(settings);

    // Apply engine-specific settings through interface methods
    this.engine.inputManager.setSensitivity(settings.input.mouseSensitivity);
    this.engine.inputManager.setInvertY(settings.input.invertY);

    // Note: Renderer and camera settings should be handled through the settings service
    // These low-level properties are not exposed through the interface

    if (settings.graphics.fullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }

    // Note: FOV changes should be handled through the settings service
    // Camera access is not available through the interface

    console.log('Settings applied');
  }

  private resetSettings(): void {
    // Reset to default settings - for now just log this action
    // TODO: Implement resetToDefaults method in SettingsService
    console.log('Reset settings to defaults (not implemented yet)');

    // Refresh the settings panel with current values
    this.setupSettingsPanel();
  }
}
