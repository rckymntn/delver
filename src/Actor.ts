import { Entity } from "./Entity"
import { MapManager } from "./MapManager";

/*
 *  An actor is a type of entity that has some dynamic element to it (action method)
 */ 
export interface Actor extends Entity {
    action(mapManager: MapManager);
}

export const enum ActorType {
    Player,
    Goblin,
    Bat
}