export class HUD {
  crosshair: HTMLDivElement;
  private hitMarker: HTMLDivElement;
  private lastSpreadPx: number = 0;

  constructor() {
    this.crosshair = document.createElement('div');
    this.crosshair.className = 'crosshair';

    ['top', 'left', 'right', 'bottom'].forEach(side => {
      const line = document.createElement('span');
      line.className = `crosshair-line ${side}`;
      this.crosshair.appendChild(line);
    });
    const dot = document.createElement('span');
    dot.className = 'crosshair-dot';
    dot.style.opacity = '0';
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
    this.hitMarker.classList.remove('active');
    void this.hitMarker.offsetWidth;
    this.hitMarker.classList.add('active');
  }

  /**
   * Update crosshair line positions based on dynamic bloom (gap in pixels).
   */
  public setSpread(gapPx: number): void {
    const top = this.crosshair.querySelector('.crosshair-line.top') as HTMLElement;
    const bottom = this.crosshair.querySelector('.crosshair-line.bottom') as HTMLElement;
    const left = this.crosshair.querySelector('.crosshair-line.left') as HTMLElement;
    const right = this.crosshair.querySelector('.crosshair-line.right') as HTMLElement;
    this.lastSpreadPx = gapPx;
    top.style.top = `${-gapPx}px`;
    bottom.style.bottom = `${-gapPx}px`;
    left.style.left = `${-gapPx}px`;
    right.style.right = `${-gapPx}px`;
  }

  /**
   * Toggle aim-down-sights crosshair mode.
   * Hides lines and shows central dot when ADS is active.
   */
  /**
   * Binary ADS toggle (0 or 1), calls setADSProgress internally.
   */
  public setADS(active: boolean): void {
    this.setADSProgress(active ? 1 : 0);
  }

  /**
   * Smoothly transition crosshair lines to center and fade in ADS dot.
   * @param progress 0=hip-fire, 1=ADS
   */
  public setADSProgress(progress: number): void {
    const lines = this.crosshair.querySelectorAll('.crosshair-line') as NodeListOf<HTMLElement>;
    lines.forEach(line => {
      const gap = this.lastSpreadPx * (1 - progress);
      if (line.classList.contains('top')) line.style.top = `${-gap}px`;
      if (line.classList.contains('bottom')) line.style.bottom = `${-gap}px`;
      if (line.classList.contains('left')) line.style.left = `${-gap}px`;
      if (line.classList.contains('right')) line.style.right = `${-gap}px`;
      line.style.opacity = `${1 - progress}`;
    });
    const dot = this.crosshair.querySelector('.crosshair-dot') as HTMLElement;
    dot.style.opacity = `${progress}`;
  }
}
