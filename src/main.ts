// src/main.ts
import { ProductionUIManager } from './core/ProductionUIManager';
import './style.css';
import './ui/ui-system.css';

console.log('🎮 Cyber Runner - Initializing...');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log('🔧 Initializing basic UI...');

    // Create UI manager for now
    const uiManager = new ProductionUIManager();

    // Show main menu
    uiManager.showMainMenu();

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

    // Make UI manager globally available for debugging
    (window as unknown as { uiManager: ProductionUIManager }).uiManager = uiManager;

    console.log('✅ Basic UI initialized successfully!');
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
  const uiManager = (window as unknown as { uiManager?: ProductionUIManager }).uiManager;
  if (uiManager) {
    uiManager.dispose();
  }
});
