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
    const dot = document.createElement('span');
    dot.className = 'ads-dot';
    dot.style.display = 'none';
    this.crosshair.appendChild(dot);

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

  /**
   * Update crosshair line positions based on dynamic bloom (gap in pixels).
   */
  public setSpread(gapPx: number): void {
    const top = this.crosshair.querySelector('.line.top') as HTMLElement;
    const bottom = this.crosshair.querySelector('.line.bottom') as HTMLElement;
    const left = this.crosshair.querySelector('.line.left') as HTMLElement;
    const right = this.crosshair.querySelector('.line.right') as HTMLElement;
    top.style.top = `${-gapPx}px`;
    bottom.style.bottom = `${-gapPx}px`;
    left.style.left = `${-gapPx}px`;
    right.style.right = `${-gapPx}px`;
  }

  /**
   * Toggle aim-down-sights crosshair mode.
   * Hides lines and shows central dot when ADS is active.
   */
  public setADS(active: boolean): void {
    const lines = this.crosshair.querySelectorAll('.line');
    lines.forEach(el => ((el as HTMLElement).style.display = active ? 'none' : 'block'));
    const dot = this.crosshair.querySelector('.ads-dot') as HTMLElement;
    dot.style.display = active ? 'block' : 'none';
  }
}
