export class HUD {
  crosshair: HTMLDivElement;
  private hitMarker: HTMLDivElement;

  constructor() {
    this.crosshair = document.createElement('div');
    this.crosshair.id = 'crosshair';

    ['top', 'left', 'right', 'bottom'].forEach(side => {
      const line = document.createElement('span');
      line.className = `line ${side}`;
      this.crosshair.appendChild(line);
    });

    document.body.appendChild(this.crosshair);
    this.hitMarker = document.createElement('div');
    this.hitMarker.id = 'hit-marker';
    ['pos-diag', 'neg-diag'].forEach(dir => {
      const line = document.createElement('span');
      line.className = `hit-line ${dir}`;
      this.hitMarker.appendChild(line);
    });
    document.body.appendChild(this.hitMarker);
  }

  show() {
    this.crosshair.style.display = 'block';
  }

  hide() {
    this.crosshair.style.display = 'none';
  }
  showHitMarker(): void {
    console.log('Hit marker triggered');
    this.hitMarker.classList.remove('active');
    void this.hitMarker.offsetWidth;
    this.hitMarker.classList.add('active');
  }
}
