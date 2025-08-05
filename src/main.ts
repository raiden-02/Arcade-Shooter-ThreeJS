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
    fsm.onStateChange(
      async (
        prev: (typeof GameState)[keyof typeof GameState],
        next: (typeof GameState)[keyof typeof GameState],
      ) => {
        console.log(`Game state changed: ${prev} -> ${next}`);

        switch (next) {
          case GameState.MainMenu:
            console.log('Showing main menu...');
            mainMenu.show();
            break;

          case GameState.Playing:
            console.log('Starting game...');
            mainMenu.hide();
            // Load the actual game
            await startActualGame();
            break;
        }
      },
    );
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

async function startActualGame() {
  try {
    console.log('🎮 Starting actual game engine...');

    // Get the app container
    const appContainer = document.getElementById('app');
    if (!appContainer) {
      throw new Error('App container not found');
    }

    // Import game engine components
    const { ColyseusNetworkAdapter } = await import('./core/ColyseusNetworkAdapter');
    const { SinglePlayerEngine } = await import('./core/SinglePlayerEngine');
    const { DevLevel } = await import('./levels/DevLevel');

    console.log('✅ Game components imported');

    // Create network adapter for multiplayer support
    const networkAdapter = new ColyseusNetworkAdapter('ws://localhost:3000');

    // Initialize game engine (supports both single and multiplayer)
    const engine = new SinglePlayerEngine(appContainer, networkAdapter, true);

    console.log('✅ Game engine created');

    // Create level
    const level = new DevLevel();

    // Load and initialize the level
    await engine.loadScene(level);

    console.log('✅ Level loaded');

    // Start the engine
    engine.start();

    console.log('✅ Engine started');

    // Request pointer lock for FPS controls
    appContainer.requestPointerLock?.();

    // Make engine globally available for debugging
    (window as unknown as { engine: typeof engine }).engine = engine;

    // Add ESC key handler to return to main menu
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        console.log('ESC pressed - returning to main menu');
        document.exitPointerLock?.();
        engine.stop();
        // Clear the game container
        appContainer.innerHTML = '';
        // Go back to main menu
        window.location.reload(); // Simple way to return to menu
      }
    };

    document.addEventListener('keydown', handleEscKey);

    console.log('🎮 Game started successfully! Press ESC to return to menu.');
  } catch (error) {
    console.error('❌ Failed to start game:', error);
    showError(
      'Failed to start game: ' + (error instanceof Error ? error.message : 'Unknown error'),
    );
  }
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
