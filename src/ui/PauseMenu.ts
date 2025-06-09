export class PauseMenu {
  container: HTMLDivElement;

  constructor() {
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
