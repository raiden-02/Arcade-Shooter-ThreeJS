// /src/main.ts
import './style.css';
import { Engine } from './core/Engine';
import { DevLevel } from './levels/DevLevel';

// Initialize engine and load initial scene
const engine = new Engine();
const level = new DevLevel(engine);
engine.changeScene(level);
engine.start();
