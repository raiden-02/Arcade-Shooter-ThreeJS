// src/main.ts
import './style.css';
import './ui/ui-system.css';

console.log('🎮 Cyber Runner - Starting...');
console.log('🔧 Imports loaded successfully');

// Add global error handler
window.addEventListener('error', event => {
  console.error('🚨 Global Error:', event.error);
  console.error('🚨 Error details:', event.filename, event.lineno, event.colno);
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', event => {
  console.error('🚨 Unhandled Promise Rejection:', event.reason);
});

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', async () => {
  console.log('🔧 DOM Ready - Starting initialization...');

  try {
    console.log('🔧 Step 1: Testing basic DOM manipulation...');

    // First test - can we create and show a simple element?
    const testDiv = document.createElement('div');
    testDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: red;
      color: white;
      padding: 20px;
      z-index: 9999;
      font-size: 20px;
    `;
    testDiv.textContent = 'TEST: If you see this, basic DOM works!';
    document.body.appendChild(testDiv);
    console.log('✅ Basic DOM test passed');

    // Remove test div after 2 seconds
    setTimeout(() => {
      testDiv.remove();
      console.log('🔧 Test div removed, proceeding with main menu...');

      // Now try to load our actual components
      initializeGame();
    }, 2000);
  } catch (error) {
    console.error('❌ Failed in DOM ready handler:', error);
    showError(
      'DOM initialization failed: ' + (error instanceof Error ? error.message : 'Unknown error'),
    );
  }
});

async function initializeGame() {
  try {
    console.log('🔧 Step 2: Importing game components...');

    // Dynamic imports to catch import errors
    const GameStateMachineModule = await import('./core/GameStateMachine');
    const { GameState, GameStateMachine } = GameStateMachineModule;
    console.log('✅ GameStateMachine imported');

    const SimpleMainMenuModule = await import('./ui/SimpleMainMenu');
    const { SimpleMainMenu } = SimpleMainMenuModule;
    console.log('✅ SimpleMainMenu imported');

    console.log('🔧 Step 3: Creating game components...');

    const fsm = new GameStateMachine();
    console.log('✅ GameStateMachine created');

    const mainMenu = new SimpleMainMenu(fsm);
    console.log('✅ SimpleMainMenu created');

    console.log('🔧 Step 4: Setting up state transitions...');

    // Set up state change handling
    fsm.onStateChange(async (prev: any, next: any) => {
      console.log(`Game state changed: ${prev} -> ${next}`);

      switch (next) {
        case GameState.MainMenu:
          console.log('Showing main menu...');
          mainMenu.show();
          break;

        case GameState.Playing:
          console.log('Starting game...');
          mainMenu.hide();
          // For now, just show a placeholder
          showGamePlaceholder();
          break;
      }
    });

    console.log('🔧 Step 5: Starting with main menu...');

    // Start with main menu
    fsm.transition(GameState.MainMenu);

    console.log('🔧 Step 6: Hiding loading screen...');

    // Hide loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }

    console.log('✅ Game initialization complete!');
  } catch (error) {
    console.error('❌ Failed to initialize game:', error);
    showError(
      'Game initialization failed: ' + (error instanceof Error ? error.message : 'Unknown error'),
    );
  }
}

function showGamePlaceholder() {
  const placeholder = document.createElement('div');
  placeholder.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    font-family: monospace;
  `;
  placeholder.textContent = 'GAME WOULD START HERE - Press ESC to return';
  document.body.appendChild(placeholder);
}

function showError(message: string) {
  console.error('🚨 Showing error to user:', message);

  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    const loadingContent = loadingScreen.querySelector('.loading-content');
    if (loadingContent) {
      loadingContent.innerHTML = `
        <div class="loading-title">ERROR</div>
        <div class="loading-text">Something went wrong</div>
        <div class="loading-progress" style="color: #ff4444;">${message}</div>
        <div style="margin-top: 1rem; font-size: 0.8rem; color: #888;">Check browser console for details</div>
      `;
    }
  }
}
