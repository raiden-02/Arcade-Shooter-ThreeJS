import { Schema, MapSchema, ArraySchema, type } from '@colyseus/schema';
import { Room, Client } from 'colyseus';

// Type definitions for room options and join options
interface GameRoomOptions {
  gameMode?: string;
  maxPlayers?: number;
  tickRate?: number;
}

interface PlayerJoinOptions {
  playerName?: string;
  teamId?: string;
}

// Schema definitions (section 3.1 of architecture document)
class PlayerState extends Schema {
  @type('string') id: string = '';
  @type('string') name: string = '';
  @type('number') x: number = 0;
  @type('number') y: number = 2;
  @type('number') z: number = 0;
  @type('number') yaw: number = 0;
  @type('number') pitch: number = 0;
  @type('number') hp: number = 100;
  @type('number') maxHp: number = 100;
  @type('boolean') alive: boolean = true;
  @type('string') weapon: string = 'pistol';
  @type('number') kills: number = 0;
  @type('number') deaths: number = 0;
}

class ProjectileState extends Schema {
  @type('string') id: string = '';
  @type('number') x: number = 0;
  @type('number') y: number = 0;
  @type('number') z: number = 0;
  @type('number') dirX: number = 0;
  @type('number') dirY: number = 0;
  @type('number') dirZ: number = 0;
  @type('string') ownerId: string = '';
  @type('string') weaponType: string = 'pistol';
  @type('number') damage: number = 20;
  @type('number') speed: number = 30;
}

class EnemyState extends Schema {
  @type('string') id: string = '';
  @type('number') x: number = 0;
  @type('number') y: number = 2;
  @type('number') z: number = 0;
  @type('number') rotX: number = 0;
  @type('number') rotY: number = 0;
  @type('number') rotZ: number = 0;
  @type('number') rotW: number = 1;
  @type('number') hp: number = 100;
  @type('number') maxHp: number = 100;
  @type('boolean') alive: boolean = true;
}

class HitEvent extends Schema {
  @type('string') type: string = 'hit';
  @type('string') victimId: string = '';
  @type('string') attackerId: string = '';
  @type('number') damage: number = 0;
  @type('string') weaponType: string = '';
  @type('number') timestamp: number = 0;
}

class GameState extends Schema {
  @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
  @type([ProjectileState]) projectiles = new ArraySchema<ProjectileState>();
  @type({ map: EnemyState }) enemies = new MapSchema<EnemyState>();
  @type([HitEvent]) events = new ArraySchema<HitEvent>();
  @type('number') tick: number = 0;
  @type('string') gameMode: string = 'deathmatch';
  @type('boolean') gameActive: boolean = true;
}

// Input message structure (section 2.3 of architecture)
interface InputMessage {
  seq: number;
  dt: number;
  moveX: number;
  moveZ: number;
  lookYaw: number;
  lookPitch: number;
  buttons: number; // Bitfield: 1 = fire, 2 = reload, etc.
  timestamp: number;
}

// Game constants (section 2.7 security checklist)
const TICK_RATE = 20; // Hz (section 2.6)
const MAX_SPEED = 10; // units/s (anti-cheat)
const INPUT_THROTTLE = 60; // Hz max
const PROJECTILE_SPEED = 30; // units/s
const PROJECTILE_LIFETIME = 2000; // ms
const PLAYER_RADIUS = 0.4;
const PROJECTILE_RADIUS = 0.1;

interface ProjectileData {
  id: string;
  spawnTick: number;
  lastPosition: { x: number; y: number; z: number };
}

export class GameRoom extends Room<GameState> {
  // Input management
  private inputs: Map<string, InputMessage> = new Map();
  private lastInputTime: Map<string, number> = new Map();

  // Projectile tracking
  private projectileData: Map<string, ProjectileData> = new Map();

  // Player spawn points
  private spawnPoints = [
    { x: 0, y: 2, z: 0 },
    { x: 10, y: 2, z: 0 },
    { x: -10, y: 2, z: 0 },
    { x: 0, y: 2, z: 10 },
    { x: 0, y: 2, z: -10 },
  ];

  onCreate(options: GameRoomOptions): void {
    this.setState(new GameState());

    // Set room metadata
    this.state.gameMode = options.gameMode || 'deathmatch';
    this.maxClients = options.maxPlayers || 8;

    console.log(
      `🎮 GameRoom created: ${this.roomId}, mode: ${this.state.gameMode}, max: ${this.maxClients}`,
    );

    // Handle client input messages with validation (section 2.7)
    this.onMessage('input', (client, data: InputMessage) => {
      if (!this.validateInput(client.sessionId, data)) {
        console.warn(`⚠️ Invalid input from ${client.sessionId}`);
        return;
      }

      this.inputs.set(client.sessionId, data);
      this.lastInputTime.set(client.sessionId, Date.now());
    });

    // Handle player respawn requests
    this.onMessage('respawn', client => {
      const player = this.state.players.get(client.sessionId);
      if (player && !player.alive) {
        this.respawnPlayer(player);
      }
    });

    // Start fixed update loop (section 2.6 - 20 Hz)
    this.setSimulationInterval(() => this.update(), 1000 / TICK_RATE);

    // Spawn some enemies for testing
    this.spawnEnemies(3);
  }

  onJoin(client: Client, options: PlayerJoinOptions): void {
    console.log(`👤 Player ${client.sessionId} joined`);

    // Validate client session
    if (!client.sessionId) {
      console.error('❌ Invalid client session ID');
      return;
    }

    const player = new PlayerState();
    
    // Ensure all properties are properly initialized
    player.id = String(client.sessionId);
    player.name = String(options.playerName || `Player_${client.sessionId.substr(-6)}`);
    player.hp = Number(100);
    player.maxHp = Number(100);
    player.alive = Boolean(true);
    player.weapon = String('pistol');
    player.kills = Number(0);
    player.deaths = Number(0);
    player.yaw = Number(0);
    player.pitch = Number(0);

    // Set spawn position with validation
    const spawnIndex = this.state.players.size % this.spawnPoints.length;
    const spawn = this.spawnPoints[spawnIndex];
    player.x = Number(spawn.x) || 0;
    player.y = Number(spawn.y) || 2;
    player.z = Number(spawn.z) || 0;

    // Validate player before adding to state
    if (player.id && player.name && typeof player.x === 'number' && typeof player.y === 'number' && typeof player.z === 'number') {
      this.state.players.set(client.sessionId, player);
      this.inputs.set(client.sessionId, {
        seq: 0,
        dt: 0,
        moveX: 0,
        moveZ: 0,
        lookYaw: 0,
        lookPitch: 0,
        buttons: 0,
        timestamp: Date.now(),
      });

      console.log(`✨ Player ${player.name} spawned at (${player.x}, ${player.y}, ${player.z})`);
    } else {
      console.error('❌ Failed to create valid player state:', player);
    }
  }

  onLeave(client: Client): void {
    console.log(`👋 Player ${client.sessionId} left`);
    this.state.players.delete(client.sessionId);
    this.inputs.delete(client.sessionId);
    this.lastInputTime.delete(client.sessionId);
  }

  // Security validation (section 2.7)
  private validateInput(sessionId: string, input: InputMessage): boolean {
    // Rate limiting (section 2.7.2)
    const lastTime = this.lastInputTime.get(sessionId) || 0;
    const now = Date.now();
    const minInterval = 1000 / INPUT_THROTTLE;

    if (now - lastTime < minInterval) {
      return false;
    }

    // Movement speed check (section 2.7.1)
    const moveLength = Math.sqrt(input.moveX * input.moveX + input.moveZ * input.moveZ);
    if (moveLength * input.dt > MAX_SPEED * input.dt) {
      return false;
    }

    // Basic sanity checks
    if (input.dt < 0 || input.dt > 1) return false;
    if (Math.abs(input.lookYaw) > Math.PI * 2) return false;
    if (Math.abs(input.lookPitch) > Math.PI) return false;

    return true;
  }

  // Fixed update loop (section 2.4 - Entity lifecycle)
  private update(): void {
    const dt = 1 / TICK_RATE;
    this.state.tick += 1;

    // Clear events from previous tick
    this.state.events.clear();

    // Process player inputs
    this.state.players.forEach((player, sessionId) => {
      if (!player.alive) return;

      const input = this.inputs.get(sessionId);
      if (!input) return;

      // Apply movement
      const speed = 5;
      const newX = player.x + input.moveX * speed * dt;
      const newZ = player.z + input.moveZ * speed * dt;

      // Basic bounds checking
      player.x = Math.max(-50, Math.min(50, newX));
      player.z = Math.max(-50, Math.min(50, newZ));

      // Update look direction
      player.yaw = input.lookYaw;
      player.pitch = input.lookPitch;

      // Process firing (section 2.4.1 - Server spawns projectiles)
      if (input.buttons & 1 && player.hp > 0) {
        this.spawnProjectile(player);
      }
    });

    // Update projectiles (section 2.4.3)
    this.updateProjectiles(dt);

    // Update enemies (basic AI)
    this.updateEnemies(dt);

    // Clean up old events (keep for 1 second)
    const eventTimeout = 1000;
    for (let i = this.state.events.length - 1; i >= 0; i--) {
      const event = this.state.events[i];
      if (Date.now() - event.timestamp > eventTimeout) {
        this.state.events.splice(i, 1);
      }
    }
  }

  private updateProjectiles(dt: number): void {
    for (let i = this.state.projectiles.length - 1; i >= 0; i--) {
      const proj = this.state.projectiles[i];
      const projData = this.projectileData.get(proj.id);

      if (!projData) {
        this.state.projectiles.splice(i, 1);
        continue;
      }

      // Move projectile
      proj.x += proj.dirX * proj.speed * dt;
      proj.y += proj.dirY * proj.speed * dt;
      proj.z += proj.dirZ * proj.speed * dt;

      // Check lifetime
      const lifeTicks = PROJECTILE_LIFETIME / (1000 / TICK_RATE);
      if (this.state.tick - projData.spawnTick > lifeTicks) {
        this.state.projectiles.splice(i, 1);
        this.projectileData.delete(proj.id);
        continue;
      }

      // Check collisions with players (section 2.4.3)
      let hit = false;
      this.state.players.forEach(player => {
        if (player.id === proj.ownerId || !player.alive || hit) return;

        const dx = player.x - proj.x;
        const dy = player.y - proj.y;
        const dz = player.z - proj.z;
        const distSq = dx * dx + dy * dy + dz * dz;
        const hitRadius = PLAYER_RADIUS + PROJECTILE_RADIUS;

        if (distSq < hitRadius * hitRadius) {
          this.damagePlayer(player, proj);
          hit = true;
        }
      });

      // Check collisions with enemies
      this.state.enemies.forEach(enemy => {
        if (!enemy.alive || hit) return;

        const dx = enemy.x - proj.x;
        const dy = enemy.y - proj.y;
        const dz = enemy.z - proj.z;
        const distSq = dx * dx + dy * dy + dz * dz;
        const hitRadius = PLAYER_RADIUS + PROJECTILE_RADIUS;

        if (distSq < hitRadius * hitRadius) {
          this.damageEnemy(enemy, proj);
          hit = true;
        }
      });

      if (hit) {
        this.state.projectiles.splice(i, 1);
        this.projectileData.delete(proj.id);
      }
    }
  }

  private updateEnemies(dt: number): void {
    this.state.enemies.forEach(enemy => {
      if (!enemy.alive) return;

      // Simple AI: move towards nearest player
      const nearestPlayer = this.findNearestPlayer(enemy);

      if (nearestPlayer && this.getDistance(enemy, nearestPlayer) > 2) {
        const dx = nearestPlayer.x - enemy.x;
        const dz = nearestPlayer.z - enemy.z;
        const len = Math.sqrt(dx * dx + dz * dz);
        if (len > 0) {
          const speed = 2;
          enemy.x += (dx / len) * speed * dt;
          enemy.z += (dz / len) * speed * dt;
        }
      }
    });
  }

  private findNearestPlayer(enemy: EnemyState): PlayerState | null {
    let nearestPlayer: PlayerState | null = null;
    let nearestDist = Infinity;

    this.state.players.forEach((player: PlayerState) => {
      if (!player.alive) return;
      const dist = this.getDistance(enemy, player);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestPlayer = player;
      }
    });

    return nearestPlayer;
  }

  private getDistance(a: { x: number; z: number }, b: { x: number; z: number }): number {
    const dx = a.x - b.x;
    const dz = a.z - b.z;
    return Math.sqrt(dx * dx + dz * dz);
  }

  // Authoritative projectile spawning (section 2.4.2)
  private spawnProjectile(player: PlayerState): void {
    // Validate player state before creating projectile
    if (!player || !player.id || typeof player.x !== 'number' || typeof player.y !== 'number' || typeof player.z !== 'number') {
      console.error('❌ Invalid player state for projectile spawn:', player);
      return;
    }

    const proj = new ProjectileState();
    
    // Ensure all properties are properly initialized
    proj.id = `${player.id}_${this.state.tick}` || `unknown_${Date.now()}`;
    proj.x = Number(player.x) || 0;
    proj.y = Number(player.y + 1.4) || 2; // Eye height
    proj.z = Number(player.z) || 0;

    // Calculate direction from yaw and pitch with fallbacks
    const yaw = Number(player.yaw) || 0;
    const pitch = Number(player.pitch) || 0;
    
    proj.dirX = Number(-Math.sin(yaw) * Math.cos(pitch)) || 0;
    proj.dirY = Number(-Math.sin(pitch)) || 0;
    proj.dirZ = Number(-Math.cos(yaw) * Math.cos(pitch)) || -1;

    proj.ownerId = String(player.id) || 'unknown';
    proj.weaponType = String(player.weapon) || 'pistol';
    proj.damage = Number(this.getWeaponDamage(player.weapon)) || 20;
    proj.speed = Number(PROJECTILE_SPEED) || 30;

    // Validate all properties before adding
    if (proj.id && typeof proj.x === 'number' && typeof proj.y === 'number' && typeof proj.z === 'number') {
      this.state.projectiles.push(proj);

      // Store projectile metadata
      this.projectileData.set(proj.id, {
        id: proj.id,
        spawnTick: this.state.tick,
        lastPosition: { x: proj.x, y: proj.y, z: proj.z },
      });

      console.log(`🔫 Player ${player.name} fired ${player.weapon}`);
    } else {
      console.error('❌ Failed to create valid projectile:', proj);
    }
  }

  // Authoritative damage system (section 2.4.3)
  private damagePlayer(player: PlayerState, projectile: ProjectileState): void {
    // Validate inputs
    if (!player || !projectile || typeof projectile.damage !== 'number') {
      console.error('❌ Invalid damage parameters:', { player: !!player, projectile: !!projectile });
      return;
    }

    player.hp = Math.max(0, player.hp - projectile.damage);

    // Create hit event (section 2.4.3) with proper validation
    const hitEvent = new HitEvent();
    hitEvent.type = String('player_hit');
    hitEvent.victimId = String(player.id) || 'unknown';
    hitEvent.attackerId = String(projectile.ownerId) || 'unknown';
    hitEvent.damage = Number(projectile.damage) || 0;
    hitEvent.weaponType = String(projectile.weaponType) || 'unknown';
    hitEvent.timestamp = Number(Date.now());
    
    // Only add event if all properties are valid
    if (hitEvent.type && hitEvent.victimId && hitEvent.attackerId && typeof hitEvent.damage === 'number' && typeof hitEvent.timestamp === 'number') {
      this.state.events.push(hitEvent);
    } else {
      console.error('❌ Failed to create valid hit event:', hitEvent);
    }

    if (player.hp <= 0 && player.alive) {
      player.alive = false;
      player.deaths++;

      // Award kill to attacker
      const attacker = this.state.players.get(projectile.ownerId);
      if (attacker) {
        attacker.kills++;
      }

      console.log(`💀 Player ${player.name} was killed by ${attacker?.name || 'unknown'}`);

      // Schedule respawn
      this.clock.setTimeout(() => {
        this.respawnPlayer(player);
      }, 3000);
    }
  }

  private damageEnemy(enemy: EnemyState, projectile: ProjectileState): void {
    enemy.hp = Math.max(0, enemy.hp - projectile.damage);

    // Create hit event
    const hitEvent = new HitEvent();
    hitEvent.type = 'enemy_hit';
    hitEvent.victimId = enemy.id;
    hitEvent.attackerId = projectile.ownerId;
    hitEvent.damage = projectile.damage;
    hitEvent.weaponType = projectile.weaponType;
    hitEvent.timestamp = Date.now();
    this.state.events.push(hitEvent);

    if (enemy.hp <= 0 && enemy.alive) {
      enemy.alive = false;

      // Award kill to attacker
      const attacker = this.state.players.get(projectile.ownerId);
      if (attacker) {
        attacker.kills++;
      }

      console.log(`🤖 Enemy ${enemy.id} was killed by ${attacker?.name || 'unknown'}`);
    }
  }

  private respawnPlayer(player: PlayerState): void {
    const spawnIndex = Math.floor(Math.random() * this.spawnPoints.length);
    const spawn = this.spawnPoints[spawnIndex];

    player.x = spawn.x;
    player.y = spawn.y;
    player.z = spawn.z;
    player.hp = player.maxHp;
    player.alive = true;

    console.log(`🔄 Player ${player.name} respawned at (${player.x}, ${player.y}, ${player.z})`);
  }

  private spawnEnemies(count: number): void {
    for (let i = 0; i < count; i++) {
      const enemy = new EnemyState();
      enemy.id = `enemy_${i}`;
      enemy.x = (Math.random() - 0.5) * 40;
      enemy.y = 2;
      enemy.z = (Math.random() - 0.5) * 40;
      enemy.hp = 100;
      enemy.maxHp = 100;
      enemy.alive = true;

      this.state.enemies.set(enemy.id, enemy);
    }

    console.log(`🤖 Spawned ${count} enemies`);
  }

  private getWeaponDamage(weaponType: string): number {
    switch (weaponType) {
      case 'pistol':
        return 20;
      case 'rifle':
        return 35;
      case 'sniper':
        return 80;
      default:
        return 20;
    }
  }
}
