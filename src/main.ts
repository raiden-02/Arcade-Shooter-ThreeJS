// src/main.ts
import { GameApplication, GameConfig, GameMode } from './core/GameApplication';
import './style.css';
import './ui/ui-system.css';

console.log('🎮 Cyber Runner - Initializing...');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log('🔧 Initializing full game application...');

    // Get the app container
    const appContainer = document.getElementById('app');
    if (!appContainer) {
      throw new Error('App container not found');
    }

    // Create game application
    const gameApp = new GameApplication(appContainer);

    // Initialize with default single player configuration
    const defaultConfig: GameConfig = {
      mode: GameMode.SinglePlayer,
    };

    console.log('🚀 Initializing game systems...');
    await gameApp.initialize(defaultConfig);

    console.log('🎮 Starting game application...');
    gameApp.start();

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

    // Make game app globally available for debugging
    (window as unknown as { gameApp: GameApplication }).gameApp = gameApp;

    console.log('✅ Game application initialized successfully!');
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
  const gameApp = (window as unknown as { gameApp?: GameApplication }).gameApp;
  if (gameApp) {
    gameApp.stop();
  }
});
