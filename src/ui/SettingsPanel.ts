import type { IGameEngine } from '../interfaces/IGameEngine';
import { SettingsService } from '../core/SettingsService';

export class SettingsPanel {
  private container: HTMLDivElement;
  private settingsService: SettingsService;
  private engine: IGameEngine;
  private isVisible: boolean = false;

  constructor(settingsService: SettingsService, engine: IGameEngine) {
    this.settingsService = settingsService;
    this.engine = engine;
    this.container = this.createSettingsPanel();

    // Add to DOM
    document.body.appendChild(this.container);
  }

  private createSettingsPanel(): HTMLDivElement {
    const panel = document.createElement('div');
    panel.className = 'settings-panel';
    panel.style.display = 'none';

    // Input settings
    const inputCfg = this.settingsService.getSettings().input;

    // Mouse Sensitivity
    const sensLabel = document.createElement('label');
    sensLabel.className = 'settings-label';
    sensLabel.innerText = 'Mouse Sensitivity: ';
    const sensSlider = document.createElement('input');
    sensSlider.type = 'range';
    sensSlider.className = 'settings-slider';
    sensSlider.min = '0.1';
    sensSlider.max = '5.0';
    sensSlider.step = '0.1';
    sensSlider.value = inputCfg.mouseSensitivity.toString();

    const sensValue = document.createElement('span');
    sensValue.className = 'settings-value';
    sensValue.innerText = inputCfg.mouseSensitivity.toString();

    sensSlider.oninput = () => {
      const newSens = parseFloat(sensSlider.value);
      sensValue.innerText = newSens.toFixed(1);
      this.engine.inputManager.setSensitivity(newSens);
      this.settingsService.updateSettings({ input: { mouseSensitivity: newSens } });
    };

    const sensContainer = document.createElement('div');
    sensContainer.className = 'settings-row';
    sensContainer.appendChild(sensLabel);
    sensContainer.appendChild(sensSlider);
    sensContainer.appendChild(sensValue);

    // Invert Y
    const invertLabel = document.createElement('label');
    invertLabel.className = 'settings-label';
    invertLabel.innerText = 'Invert Y-Axis: ';
    const invertCheck = document.createElement('input');
    invertCheck.type = 'checkbox';
    invertCheck.className = 'settings-checkbox';
    invertCheck.checked = inputCfg.invertY;
    invertCheck.onchange = () => {
      this.engine.inputManager.setInvertY(invertCheck.checked);
      this.settingsService.updateSettings({ input: { invertY: invertCheck.checked } });
    };

    const invertContainer = document.createElement('div');
    invertContainer.className = 'settings-row';
    invertContainer.appendChild(invertLabel);
    invertContainer.appendChild(invertCheck);

    // Graphics settings
    const graphicsCfg = this.settingsService.getSettings().graphics;

    // FOV
    const fovLabel = document.createElement('label');
    fovLabel.className = 'settings-label';
    fovLabel.innerText = 'Field of View: ';
    const fovSlider = document.createElement('input');
    fovSlider.type = 'range';
    fovSlider.className = 'settings-slider';
    fovSlider.min = '60';
    fovSlider.max = '120';
    fovSlider.step = '5';
    fovSlider.value = graphicsCfg.fov.toString();

    const fovValue = document.createElement('span');
    fovValue.className = 'settings-value';
    fovValue.innerText = graphicsCfg.fov.toString();

    fovSlider.oninput = () => {
      const newFov = parseInt(fovSlider.value);
      fovValue.innerText = newFov.toString();
      // FOV changes should be handled through the settings service
      // Camera access is not available through the interface
      this.settingsService.updateSettings({ graphics: { fov: newFov } });
    };

    const fovContainer = document.createElement('div');
    fovContainer.className = 'settings-row';
    fovContainer.appendChild(fovLabel);
    fovContainer.appendChild(fovSlider);
    fovContainer.appendChild(fovValue);

    // Resolution Scale
    const resLabel = document.createElement('label');
    resLabel.className = 'settings-label';
    resLabel.innerText = 'Resolution Scale: ';
    const resSlider = document.createElement('input');
    resSlider.type = 'range';
    resSlider.className = 'settings-slider';
    resSlider.min = '0.5';
    resSlider.max = '2.0';
    resSlider.step = '0.1';
    resSlider.value = graphicsCfg.resolutionScale.toString();

    const resValue = document.createElement('span');
    resValue.className = 'settings-value';
    resValue.innerText = graphicsCfg.resolutionScale.toFixed(1);

    resSlider.oninput = () => {
      const newScale = parseFloat(resSlider.value);
      resValue.innerText = newScale.toFixed(1);
      // Resolution scale changes should be handled through the settings service
      // Renderer access is not available through the interface
      this.settingsService.updateSettings({ graphics: { resolutionScale: newScale } });
    };

    const resContainer = document.createElement('div');
    resContainer.className = 'settings-row';
    resContainer.appendChild(resLabel);
    resContainer.appendChild(resSlider);
    resContainer.appendChild(resValue);

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'settings-close-btn';
    closeBtn.innerText = 'Close Settings';
    closeBtn.onclick = () => this.hide();

    // Assemble panel
    panel.innerHTML = '<h3 class="settings-title">Settings</h3>';
    panel.appendChild(sensContainer);
    panel.appendChild(invertContainer);
    panel.appendChild(fovContainer);
    panel.appendChild(resContainer);
    panel.appendChild(closeBtn);

    return panel;
  }

  public show(): void {
    this.container.style.display = 'block';
    this.isVisible = true;
  }

  public hide(): void {
    this.container.style.display = 'none';
    this.isVisible = false;
  }

  public toggle(): void {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  public getElement(): HTMLDivElement {
    return this.container;
  }

  public getIsVisible(): boolean {
    return this.isVisible;
  }
}
