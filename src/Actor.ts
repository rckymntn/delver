import { Entity } from "./Entity"

export interface Actor extends Entity {
    action(): Promise<any>;
}

export const enum ActorType {
    Player,
    Goblin
}