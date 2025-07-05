// src/ui/core/UIComponent.ts

/**
 * Simple event emitter for UI components.
 */
class SimpleEventEmitter {
  private listeners: Map<string, ((...args: unknown[]) => void)[]> = new Map();

  public on(event: string, listener: (...args: unknown[]) => void): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(listener);
  }

  public emit(event: string, ...args: unknown[]): void {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach(listener => listener(...args));
    }
  }

  public removeAllListeners(event?: string): void {
    if (event) {
      this.listeners.delete(event);
    } else {
      this.listeners.clear();
    }
  }
}

/**
 * Base class for all UI components in the game.
 * Provides common functionality like visibility, transitions, and event handling.
 */
export abstract class UIComponent extends SimpleEventEmitter {
  protected element: HTMLElement;
  protected isVisible: boolean = false;
  protected isTransitioning: boolean = false;
  protected transitionDuration: number = 300;

  constructor(tagName: string = 'div', className?: string) {
    super();
    this.element = document.createElement(tagName);
    if (className) {
      this.element.className = className;
    }
    this.element.style.display = 'none';
    this.setupEventListeners();
  }

  /**
   * Setup component-specific event listeners.
   * Override in subclasses to add custom event handling.
   */
  protected setupEventListeners(): void {
    // Override in subclasses
  }

  /**
   * Get the DOM element for this component.
   */
  public getElement(): HTMLElement {
    return this.element;
  }

  /**
   * Show the component with optional transition.
   */
  public async show(animate: boolean = true): Promise<void> {
    if (this.isVisible || this.isTransitioning) return;

    this.isTransitioning = true;
    this.element.style.display = 'block';

    if (animate) {
      await this.animateIn();
    }

    this.isVisible = true;
    this.isTransitioning = false;
    this.emit('shown');
  }

  /**
   * Hide the component with optional transition.
   */
  public async hide(animate: boolean = true): Promise<void> {
    if (!this.isVisible || this.isTransitioning) return;

    this.isTransitioning = true;

    if (animate) {
      await this.animateOut();
    }

    this.element.style.display = 'none';
    this.isVisible = false;
    this.isTransitioning = false;
    this.emit('hidden');
  }

  /**
   * Toggle visibility of the component.
   */
  public async toggle(animate: boolean = true): Promise<void> {
    if (this.isVisible) {
      await this.hide(animate);
    } else {
      await this.show(animate);
    }
  }

  /**
   * Check if component is currently visible.
   */
  public getVisible(): boolean {
    return this.isVisible;
  }

  /**
   * Check if component is currently transitioning.
   */
  public getTransitioning(): boolean {
    return this.isTransitioning;
  }

  /**
   * Animation for showing the component.
   * Override in subclasses for custom animations.
   */
  protected async animateIn(): Promise<void> {
    return new Promise(resolve => {
      this.element.style.opacity = '0';
      this.element.style.transform = 'scale(0.95)';

      // Force reflow
      void this.element.offsetHeight;

      this.element.style.transition = `opacity ${this.transitionDuration}ms ease, transform ${this.transitionDuration}ms ease`;
      this.element.style.opacity = '1';
      this.element.style.transform = 'scale(1)';

      setTimeout(() => {
        this.element.style.transition = '';
        resolve();
      }, this.transitionDuration);
    });
  }

  /**
   * Animation for hiding the component.
   * Override in subclasses for custom animations.
   */
  protected async animateOut(): Promise<void> {
    return new Promise(resolve => {
      this.element.style.transition = `opacity ${this.transitionDuration}ms ease, transform ${this.transitionDuration}ms ease`;
      this.element.style.opacity = '0';
      this.element.style.transform = 'scale(0.95)';

      setTimeout(() => {
        this.element.style.transition = '';
        resolve();
      }, this.transitionDuration);
    });
  }

  /**
   * Update component state.
   * Override in subclasses for custom update logic.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(_deltaTime: number): void {
    // Override in subclasses
  }

  /**
   * Clean up component resources.
   */
  public destroy(): void {
    this.element.remove();
    this.removeAllListeners();
  }

  /**
   * Set component's CSS class.
   */
  public setClass(className: string): void {
    this.element.className = className;
  }

  /**
   * Add CSS class to component.
   */
  public addClass(className: string): void {
    this.element.classList.add(className);
  }

  /**
   * Remove CSS class from component.
   */
  public removeClass(className: string): void {
    this.element.classList.remove(className);
  }

  /**
   * Set component's inner HTML.
   */
  public setHTML(html: string): void {
    this.element.innerHTML = html;
  }

  /**
   * Set component's text content.
   */
  public setText(text: string): void {
    this.element.textContent = text;
  }
}
