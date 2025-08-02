// src/main.ts
import { GameState } from './core/GameStateMachine';
import { ProductionUIManager } from './core/ProductionUIManager';
import { IGameEngine } from './interfaces/IGameEngine';
import { MainMenu } from './ui/MainMenu';
import './style.css';
import './ui/ui-system.css';

console.log('🎮 Cyber Runner - Initializing...');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log('🔧 Initializing UI systems...');

    // Create a simple mock engine object for the MainMenu
    const mockEngine = {
      transitionToState: (state: GameState) => {
        console.log(`Mock transition to state: ${state}`);
        // TODO: Implement actual state transitions when full engine is restored
        if (state === GameState.Playing) {
          console.log('🎮 Single Player mode would start here');
          alert('Single Player mode will be available when the full engine is restored!');
        }
      },
    } as Partial<IGameEngine>;

    // Create styled main menu with proper cyberpunk design
    const mainMenu = new MainMenu(mockEngine as IGameEngine);
    mainMenu.show();

    // Also create UI manager for other UI elements
    const uiManager = new ProductionUIManager();

    // Hide loading screen after initialization
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }, 1000);
    }

    // Make UI components globally available for debugging
    (
      window as unknown as {
        mainMenu: MainMenu;
        uiManager: ProductionUIManager;
      }
    ).mainMenu = mainMenu;
    (
      window as unknown as {
        mainMenu: MainMenu;
        uiManager: ProductionUIManager;
      }
    ).uiManager = uiManager;

    console.log('✅ UI systems initialized successfully!');
  } catch (error) {
    console.error('❌ Failed to initialize game:', error);

    // Show error message to user
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      const loadingContent = loadingScreen.querySelector('.loading-content');
      if (loadingContent) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        loadingContent.innerHTML = `
          <div class="loading-title">INITIALIZATION FAILED</div>
          <div class="loading-text">Please check the console for details</div>
          <div class="loading-progress" style="color: #ff4444;">Error: ${errorMessage}</div>
        `;
      }
    }
  }
});

// Handle page reload/close
window.addEventListener('beforeunload', () => {
  const mainMenu = (
    window as unknown as {
      mainMenu?: MainMenu;
      uiManager?: ProductionUIManager;
    }
  ).mainMenu;
  const uiManager = (
    window as unknown as {
      mainMenu?: MainMenu;
      uiManager?: ProductionUIManager;
    }
  ).uiManager;

  if (mainMenu) {
    mainMenu.hide();
  }
  if (uiManager) {
    uiManager.dispose();
  }
});
