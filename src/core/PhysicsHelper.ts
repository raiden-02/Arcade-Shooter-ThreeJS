import * as RAPIER from '@dimforge/rapier3d';

import { CollisionGroups } from './CollisionGroups';

export class PhysicsHelper {
  public world: RAPIER.World;
  // Collect collision events (for AOE on environment impacts)
  public eventQueue: RAPIER.EventQueue;

  constructor() {
    const gravity = new RAPIER.Vector3(0, -9.81, 0);
    this.world = new RAPIER.World(gravity);
    // Enable auto-drain so events are cleared each step
    this.eventQueue = new RAPIER.EventQueue(true);
  }

  step(delta: number) {
    this.world.timestep = delta;
    // Step the physics world and capture all collision events
    this.world.step(this.eventQueue);
  }

  createFloorCollider(pos: RAPIER.Vector3, size: RAPIER.Vector3) {
    const bodyDesc = RAPIER.RigidBodyDesc.fixed();
    const body = this.world.createRigidBody(bodyDesc);

    const colliderDesc = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2)
      .setTranslation(pos.x, pos.y, pos.z)
      // Floor belongs to DEFAULT group; allow collisions with player, enemy, and projectiles
      .setCollisionGroups(
        (CollisionGroups.DEFAULT << 16) |
          CollisionGroups.PLAYER |
          CollisionGroups.ENEMY |
          CollisionGroups.PROJECTILE,
      )
      // Enable collision events so projectiles touching the floor will explode
      .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);

    this.world.createCollider(colliderDesc, body);
  }

  /**
   * Create a dynamic body for the player with a capsule collider.
   * The returned body is augmented with a `collider` property for lookup.
   */
  createPlayerBody(pos: RAPIER.Vector3) {
    const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(pos.x, pos.y, pos.z)
      .setLinearDamping(0.99);

    // Create the body and collider
    type BodyWithCollider = RAPIER.RigidBody & { _collider: RAPIER.Collider };
    const body = this.world.createRigidBody(bodyDesc) as BodyWithCollider;
    const colliderDesc = RAPIER.ColliderDesc.capsule(0.8, 0.4).setCollisionGroups(
      (CollisionGroups.PLAYER << 16) |
        CollisionGroups.DEFAULT |
        CollisionGroups.ENEMY |
        CollisionGroups.PROJECTILE,
    );
    body._collider = this.world.createCollider(colliderDesc, body);

    return body;
  }
  /**
   * Create a kinematic character controller with an optional skin width offset.
   * Use this to drive capsule colliders via computeColliderMovement each frame.
   * @param offset - small gap between collider and obstacles for numerical stability
   */
  public createCharacterController(offset: number = 0.1): RAPIER.KinematicCharacterController {
    return this.world.createCharacterController(offset);
  }
}
