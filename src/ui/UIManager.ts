import { HUD } from './HUD';
import { PauseMenu } from './PauseMenu';

export class UIManager {
  pauseMenu: PauseMenu;
  hud: HUD;

  constructor() {
    this.pauseMenu = new PauseMenu();
    this.hud = new HUD();
  }

  showPause() {
    this.pauseMenu.show();
    this.hud.hide();
  }

  hidePause() {
    this.pauseMenu.hide();
    this.hud.show();
  }

  togglePause() {
    if (this.pauseMenu.isVisible()) {
      this.hidePause();
    } else {
      this.showPause();
    }
  }
}
