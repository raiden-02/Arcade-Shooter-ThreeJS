import type { Engine } from '../core/Engine';
import { SettingsService } from '../core/SettingsService';

export class PauseMenu {
  container: HTMLDivElement;

  constructor(settingsService?: SettingsService, engine?: Engine) {
    this.container = document.createElement('div');
    this.container.id = 'pause-menu';

    const resumeBtn = document.createElement('button');
    resumeBtn.innerText = 'Resume';
    resumeBtn.onclick = () => document.dispatchEvent(new Event('unpause'));

    const reloadBtn = document.createElement('button');
    reloadBtn.innerText = 'Restart';
    reloadBtn.onclick = () => location.reload();

    this.container.append(resumeBtn, reloadBtn);
    document.body.appendChild(this.container);

    // If a SettingsService and engine are provided, build settings UI
    if (settingsService && engine) {
      const settingsBtn = document.createElement('button');
      settingsBtn.innerText = 'Settings';
      settingsBtn.onclick = () => {
        const panelEl = this.container.querySelector('#settings-panel') as HTMLElement;
        panelEl.style.display = panelEl.style.display === 'none' ? 'flex' : 'none';
      };

      // Build settings panel (input & graphics controls)
      const panel = document.createElement('div');
      panel.id = 'settings-panel';
      panel.style.display = 'none';
      panel.style.flexDirection = 'column';
      panel.style.gap = '8px';
      panel.style.marginTop = '12px';

      // Input settings
      const inputCfg = settingsService.getSettings().input;
      const sensLabel = document.createElement('label');
      sensLabel.innerText = 'Mouse Sensitivity: ';
      const sensSlider = document.createElement('input');
      sensSlider.type = 'range';
      sensSlider.id = 'sens-slider';
      sensSlider.min = '0.1';
      sensSlider.max = '5.0';
      sensSlider.step = '0.1';
      sensSlider.value = inputCfg.mouseSensitivity.toString();
      sensLabel.appendChild(sensSlider);
      panel.appendChild(sensLabel);

      const invertLabel = document.createElement('label');
      const invertCheck = document.createElement('input');
      invertCheck.type = 'checkbox';
      invertCheck.id = 'invertY-check';
      invertCheck.checked = inputCfg.invertY;
      invertLabel.appendChild(invertCheck);
      invertLabel.appendChild(document.createTextNode(' Invert Y'));
      panel.appendChild(invertLabel);

      // Graphics settings
      const gfxCfg = settingsService.getSettings().graphics;
      const resLabel = document.createElement('label');
      resLabel.innerText = 'Resolution Scale: ';
      const resSlider = document.createElement('input');
      resSlider.type = 'range';
      resSlider.id = 'res-slider';
      resSlider.min = '0.5';
      resSlider.max = '2.0';
      resSlider.step = '0.1';
      resSlider.value = gfxCfg.resolutionScale.toString();
      resLabel.appendChild(resSlider);
      panel.appendChild(resLabel);

      const fullLabel = document.createElement('label');
      const fullCheck = document.createElement('input');
      fullCheck.type = 'checkbox';
      fullCheck.id = 'fullscreen-check';
      fullCheck.checked = gfxCfg.fullscreen;
      fullLabel.appendChild(fullCheck);
      fullLabel.appendChild(document.createTextNode(' Fullscreen'));
      panel.appendChild(fullLabel);

      const vsyncLabel = document.createElement('label');
      const vsyncCheck = document.createElement('input');
      vsyncCheck.type = 'checkbox';
      vsyncCheck.id = 'vsync-check';
      vsyncCheck.checked = gfxCfg.vsync;
      vsyncLabel.appendChild(vsyncCheck);
      vsyncLabel.appendChild(document.createTextNode(' VSync'));
      panel.appendChild(vsyncLabel);

      const fovLabel = document.createElement('label');
      fovLabel.innerText = 'FOV: ';
      const fovSlider = document.createElement('input');
      fovSlider.type = 'range';
      fovSlider.id = 'fov-slider';
      fovSlider.min = '60';
      fovSlider.max = '120';
      fovSlider.step = '1';
      fovSlider.value = gfxCfg.fov.toString();
      fovLabel.appendChild(fovSlider);
      panel.appendChild(fovLabel);

      // Apply settings button
      const applyBtn = document.createElement('button');
      applyBtn.id = 'apply-settings';
      applyBtn.innerText = 'Apply Settings';
      applyBtn.onclick = () => {
        const newSettings = settingsService.getSettings();
        newSettings.input.mouseSensitivity = parseFloat(sensSlider.value);
        newSettings.input.invertY = invertCheck.checked;
        newSettings.graphics.resolutionScale = parseFloat(resSlider.value);
        newSettings.graphics.fullscreen = fullCheck.checked;
        newSettings.graphics.vsync = vsyncCheck.checked;
        newSettings.graphics.fov = parseInt(fovSlider.value, 10);
        settingsService.applySettings(newSettings);
        engine.input.setSensitivity(newSettings.input.mouseSensitivity);
        engine.input.setInvertY(newSettings.input.invertY);
        engine.renderer.setPixelRatio(
          window.devicePixelRatio * newSettings.graphics.resolutionScale,
        );
        if (newSettings.graphics.fullscreen) document.documentElement.requestFullscreen();
        else if (document.fullscreenElement) document.exitFullscreen();
        engine.camera.fov = newSettings.graphics.fov;
        engine.camera.updateProjectionMatrix();
      };
      panel.appendChild(applyBtn);

      // Re-append settings button and panel
      this.container.append(settingsBtn, panel);
    }
  }

  show() {
    this.container.style.display = 'flex';
  }

  hide() {
    this.container.style.display = 'none';
  }

  isVisible(): boolean {
    return this.container.style.display !== 'none';
  }
}
