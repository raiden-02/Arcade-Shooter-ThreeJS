import { Client, Room } from 'colyseus.js';

import { ConnectionState, PlayerState } from './NetworkTypes';

export class ColyseusNetworkManager {
  private client: Client;
  private room: Room | null = null;

  private connectionState: ConnectionState = ConnectionState.DISCONNECTED;

  // player id cached after join
  private playerId: string | null = null;

  constructor(private serverUrl: string = 'ws://localhost:3000') {
    this.client = new Client(this.serverUrl);
  }

  public async connectAndJoin(): Promise<boolean> {
    try {
      this.room = await this.client.joinOrCreate('arena');
      this.connectionState = ConnectionState.CONNECTED;
      this.playerId = this.room.sessionId;
      return true;
    } catch (err) {
      console.error('Failed to connect Colyseus:', err);
      this.connectionState = ConnectionState.ERROR;
      return false;
    }
  }

  public disconnect(): void {
    if (this.room) {
      this.room.leave();
      this.room = null;
    }
    this.connectionState = ConnectionState.DISCONNECTED;
  }

  public sendInput(input: {
    moveX: number;
    moveZ: number;
    yaw: number;
    fire: boolean;
  }): void {
    if (!this.room) return;
    this.room.send('input', input);
  }

  public onStateChange(callback: (players: Map<string, PlayerState>) => void): void {
    if (!this.room) return;
    this.room.state.players.onChange = player => {
      const map = new Map<string, PlayerState>();
      this.room!.state.players.forEach((value: any, key: string) => {
        map.set(key, {
          id: key,
          name: key,
          position: { x: value.x, y: value.y, z: value.z },
          rotation: { x: 0, y: value.yaw, z: 0 },
          health: value.hp,
          weapon: 'pistol',
          isAlive: value.alive,
        });
      });
      callback(map);
    } as any;
  }

  public getPlayerId(): string | null {
    return this.playerId;
  }
}

