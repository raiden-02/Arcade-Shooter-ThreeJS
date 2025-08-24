import { Schema, MapSchema, ArraySchema, type as colyseusType } from '@colyseus/schema';
import { Room, Client } from 'colyseus';

class PlayerState extends Schema {
  @colyseusType('string') id: string = '';
  @colyseusType('number') x: number = 0;
  @colyseusType('number') y: number = 2;
  @colyseusType('number') z: number = 0;
  @colyseusType('number') yaw: number = 0;
  @colyseusType('number') hp: number = 100;
  @colyseusType('boolean') alive: boolean = true;
}

class ProjectileState extends Schema {
  @colyseusType('string') id: string = '';
  @colyseusType('number') x: number = 0;
  @colyseusType('number') y: number = 0;
  @colyseusType('number') z: number = 0;
  @colyseusType('number') dirX: number = 0;
  @colyseusType('number') dirY: number = 0;
  @colyseusType('number') dirZ: number = 0;
  @colyseusType('string') ownerId: string = '';
  @colyseusType('number') spawnTick: number = 0;
}

class State extends Schema {
  @colyseusType({ map: PlayerState }) players = new MapSchema<PlayerState>();
  @colyseusType([ProjectileState]) projectiles = new ArraySchema<ProjectileState>();
  @colyseusType('number') tick: number = 0;
}

// basic constants
const TICK_RATE = 20; // Hz
const PROJECTILE_SPEED = 30; // units/s
const PROJECTILE_LIFETIME = 2000; // ms

interface InputMessage {
  moveX: number;
  moveZ: number;
  yaw: number;
  fire: boolean;
}

export class GameRoom extends Room<State> {
  // per-client input buffer
  private inputs: Map<string, InputMessage> = new Map();

  onCreate(): void {
    this.setState(new State());

    // Handle client input message
    this.onMessage('input', (client, data: InputMessage) => {
      this.inputs.set(client.sessionId, data);
    });

    // Fixed update loop
    this.setSimulationInterval(() => this.update(), 1000 / TICK_RATE);
  }

  onJoin(client: Client): void {
    const player = new PlayerState();
    player.id = client.sessionId;
    this.state.players.set(client.sessionId, player);
    this.inputs.set(client.sessionId, { moveX: 0, moveZ: 0, yaw: 0, fire: false });
  }

  onLeave(client: Client): void {
    this.state.players.delete(client.sessionId);
    this.inputs.delete(client.sessionId);
  }

  private update(): void {
    const dt = 1 / TICK_RATE;
    this.state.tick += 1;

    // move players and process firing
    this.state.players.forEach((player, sessionId) => {
      const input = this.inputs.get(sessionId);
      if (!input) return;

      // simple movement (no physics) – forward on local Z
      const speed = 5;
      player.x += input.moveX * speed * dt;
      player.z += input.moveZ * speed * dt;
      player.yaw = input.yaw;

      if (input.fire && player.alive && player.hp > 0) {
        this.spawnProjectile(player);
      }
    });

    // advance projectiles & check lifetime
    for (let i = this.state.projectiles.length - 1; i >= 0; i--) {
      const proj = this.state.projectiles[i];
      proj.x += proj.dirX * PROJECTILE_SPEED * dt;
      proj.y += proj.dirY * PROJECTILE_SPEED * dt;
      proj.z += proj.dirZ * PROJECTILE_SPEED * dt;

      // simple lifetime expiry using tick field overload (dirY as createTime) -> We'll store createTime in dirY placeholder? Instead easier: attach timestampMap.
      // For brevity, remove after > PROJECTILE_LIFETIME distance or ticks.
      const lifeTicks = PROJECTILE_LIFETIME / (1000 / TICK_RATE);
      if (this.state.tick - proj.spawnTick > lifeTicks) {
        this.state.projectiles.splice(i, 1);
      } else {
        // Collision vs players (sphere distance < 1)
        this.state.players.forEach(player => {
          if (player.id === proj.ownerId || !player.alive) return;
          const dx = player.x - proj.x;
          const dy = player.y - proj.y;
          const dz = player.z - proj.z;
          const distSq = dx * dx + dy * dy + dz * dz;
          if (distSq < 1) {
            // hit!
            player.hp = Math.max(0, player.hp - 20);
            if (player.hp === 0) player.alive = false;
            this.state.projectiles.splice(i, 1);
          }
        });
      }
    }
  }

  private spawnProjectile(player: PlayerState): void {
    const proj = new ProjectileState();
    proj.id = `${player.id}_${Date.now()}`;
    proj.x = player.x;
    proj.y = player.y + 1.4;
    proj.z = player.z;

    // forward vector from yaw (2D)
    proj.dirX = -Math.sin(player.yaw);
    proj.dirY = 0;
    proj.dirZ = -Math.cos(player.yaw);
    proj.ownerId = player.id;
    proj.spawnTick = this.state.tick; // store spawn tick for lifetime

    this.state.projectiles.push(proj);
  }
}
