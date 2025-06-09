export class HUD {
  crosshair: HTMLDivElement;

  constructor() {
    this.crosshair = document.createElement('div');
    this.crosshair.id = 'crosshair';

    ['top', 'left', 'right', 'bottom'].forEach((side) => {
      const line = document.createElement('span');
      line.className = `line ${side}`;
      this.crosshair.appendChild(line);
    });

    document.body.appendChild(this.crosshair);
  }

  show() {
    this.crosshair.style.display = 'block';
  }

  hide() {
    this.crosshair.style.display = 'none';
  }
}
