import * as RAPIER from '@dimforge/rapier3d';

export class PhysicsHelper {
    public world: RAPIER.World;

    constructor() {
        const gravity = new RAPIER.Vector3(0, -9.81, 0);
        this.world = new RAPIER.World(gravity);
    }

    step(delta: number) {
        this.world.timestep = delta;
        this.world.step();
    }

    createFloorCollider(pos: RAPIER.Vector3, size: RAPIER.Vector3) {
        const bodyDesc = RAPIER.RigidBodyDesc.fixed();
        const body = this.world.createRigidBody(bodyDesc);

        const colliderDesc = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2)
            .setTranslation(pos.x, pos.y, pos.z);

        this.world.createCollider(colliderDesc, body);
    }

    createPlayerBody(pos: RAPIER.Vector3) {
        const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
            .setTranslation(pos.x, pos.y, pos.z)
            .setLinearDamping(0.99); // Slow down sliding a bit

        const body = this.world.createRigidBody(bodyDesc);
        const colliderDesc = RAPIER.ColliderDesc.capsule(0.8, 0.4);
        this.world.createCollider(colliderDesc, body);

        return body;
    }
}
