import { PlayerState } from './NetworkTypes';

/**
 * PlayerSync handles player state synchronization for multiplayer gameplay
 * - Serializes local player state for network transmission
 * - Interpolates remote player movement for smooth visuals
 * - Controls network update frequency
 */
export class PlayerSync {
  private updateRate: number = 20; // 20Hz update rate (50ms intervals)
  private lastUpdateTime: number = 0;
  private interpolationDelay: number = 100; // 100ms interpolation buffer

  // State snapshots for interpolation
  private remotePlayerSnapshots: Map<string, Array<{ state: PlayerState; timestamp: number }>> =
    new Map();

  constructor(updateRate: number = 20) {
    this.updateRate = updateRate;
  }

  /**
   * Serialize local player state for network transmission
   */
  public serializePlayerState(
    playerId: string,
    position: { x: number; y: number; z: number },
    rotation: { x: number; y: number; z: number },
    health: number,
    weapon: string,
    isAlive: boolean,
  ): PlayerState {
    return {
      id: playerId,
      name: `Player_${Math.floor(Math.random() * 10000)}`, // Will be replaced with actual name
      position,
      rotation,
      health,
      weapon,
      isAlive,
    };
  }

  /**
   * Check if it's time to send a network update
   */
  public shouldSendUpdate(): boolean {
    const now = Date.now();
    const timeSinceLastUpdate = now - this.lastUpdateTime;
    const updateInterval = 1000 / this.updateRate;

    if (timeSinceLastUpdate >= updateInterval) {
      this.lastUpdateTime = now;
      return true;
    }

    return false;
  }

  /**
   * Add a remote player state snapshot for interpolation
   */
  public addRemotePlayerSnapshot(playerId: string, state: PlayerState): void {
    const timestamp = Date.now();

    if (!this.remotePlayerSnapshots.has(playerId)) {
      this.remotePlayerSnapshots.set(playerId, []);
    }

    const snapshots = this.remotePlayerSnapshots.get(playerId)!;
    snapshots.push({ state, timestamp });

    // Keep only last 3 snapshots for interpolation
    if (snapshots.length > 3) {
      snapshots.shift();
    }
  }

  /**
   * Get interpolated state for a remote player
   */
  public getInterpolatedState(playerId: string): PlayerState | null {
    const snapshots = this.remotePlayerSnapshots.get(playerId);
    if (!snapshots || snapshots.length === 0) {
      return null;
    }

    // If we only have one snapshot, return it
    if (snapshots.length === 1) {
      return snapshots[0].state;
    }

    const now = Date.now() - this.interpolationDelay;

    // Find the two snapshots to interpolate between
    let olderSnapshot = snapshots[0];
    let newerSnapshot = snapshots[0];

    for (let i = 0; i < snapshots.length - 1; i++) {
      const current = snapshots[i];
      const next = snapshots[i + 1];

      if (current.timestamp <= now && next.timestamp >= now) {
        olderSnapshot = current;
        newerSnapshot = next;
        break;
      }
    }

    // If we're past all snapshots, use the newest
    if (now >= snapshots[snapshots.length - 1].timestamp) {
      return snapshots[snapshots.length - 1].state;
    }

    // Interpolate between the two snapshots
    const timeDiff = newerSnapshot.timestamp - olderSnapshot.timestamp;
    const progress = timeDiff > 0 ? (now - olderSnapshot.timestamp) / timeDiff : 0;

    // Clamp progress between 0 and 1
    const clampedProgress = Math.max(0, Math.min(1, progress));

    return this.interpolateStates(olderSnapshot.state, newerSnapshot.state, clampedProgress);
  }

  /**
   * Interpolate between two player states
   */
  private interpolateStates(older: PlayerState, newer: PlayerState, progress: number): PlayerState {
    return {
      id: newer.id,
      name: newer.name,
      position: {
        x: this.lerp(older.position.x, newer.position.x, progress),
        y: this.lerp(older.position.y, newer.position.y, progress),
        z: this.lerp(older.position.z, newer.position.z, progress),
      },
      rotation: {
        x: this.lerpAngle(older.rotation.x, newer.rotation.x, progress),
        y: this.lerpAngle(older.rotation.y, newer.rotation.y, progress),
        z: this.lerpAngle(older.rotation.z, newer.rotation.z, progress),
      },
      health: newer.health, // Don't interpolate health
      weapon: newer.weapon, // Don't interpolate weapon
      isAlive: newer.isAlive, // Don't interpolate boolean states
    };
  }

  /**
   * Linear interpolation
   */
  private lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }

  /**
   * Angular interpolation (handles wrapping around 2π)
   */
  private lerpAngle(a: number, b: number, t: number): number {
    const diff = b - a;
    const shortestAngle = ((diff + Math.PI) % (2 * Math.PI)) - Math.PI;
    return a + shortestAngle * t;
  }

  /**
   * Clean up old snapshots for a player
   */
  public removePlayer(playerId: string): void {
    this.remotePlayerSnapshots.delete(playerId);
  }

  /**
   * Clean up old snapshots (call periodically)
   */
  public cleanup(): void {
    const now = Date.now();
    const maxAge = 5000; // 5 seconds

    for (const [playerId, snapshots] of this.remotePlayerSnapshots) {
      // Remove old snapshots
      const validSnapshots = snapshots.filter(snapshot => now - snapshot.timestamp < maxAge);

      if (validSnapshots.length === 0) {
        this.remotePlayerSnapshots.delete(playerId);
      } else {
        this.remotePlayerSnapshots.set(playerId, validSnapshots);
      }
    }
  }

  /**
   * Get update rate in Hz
   */
  public getUpdateRate(): number {
    return this.updateRate;
  }

  /**
   * Set update rate in Hz
   */
  public setUpdateRate(rate: number): void {
    this.updateRate = Math.max(1, Math.min(60, rate)); // Clamp between 1-60 Hz
  }

  /**
   * Get interpolation delay in ms
   */
  public getInterpolationDelay(): number {
    return this.interpolationDelay;
  }

  /**
   * Set interpolation delay in ms
   */
  public setInterpolationDelay(delay: number): void {
    this.interpolationDelay = Math.max(50, Math.min(500, delay)); // Clamp between 50-500ms
  }
}
