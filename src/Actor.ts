import { Entity } from "./Entity"
import { MapManager } from "./MapManager";

export interface Actor extends Entity {
    action(mapManager: MapManager);
}

export const enum ActorType {
    Player,
    Goblin,
    Bat
}