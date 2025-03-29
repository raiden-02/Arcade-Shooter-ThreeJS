export class HUD {
  crosshair: HTMLDivElement;

  constructor() {
    this.crosshair = document.createElement('div');
    this.crosshair.id = 'crosshair';
    this.crosshair.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            width: 4px;
            height: 4px;
            background: white;
            transform: translate(-50%, -50%);
            z-index: 500;
            pointer-events: none;
        `;

    document.body.appendChild(this.crosshair);
  }

  show() {
    this.crosshair.style.display = 'block';
  }

  hide() {
    this.crosshair.style.display = 'none';
  }
}
