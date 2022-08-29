import { ActionBehaviors } from "./ActionBehaviors";
import { Actor, ActorType } from "./Actor";
import { Glyph } from "./Glyph";
import { MapManager } from "./MapManager";
import { Position } from "./Position";

export class Goblin implements Actor {
    
    glyph: Glyph;
    type: ActorType;
    
    constructor(public position: Position) {
        this.position = position;
        this.glyph = new Glyph("G", "green", "black");
        this.type = ActorType.Goblin;
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(position: Position): void {
        this.position = position;
    }

    /*
     *  TODO: A* pathfinding to the Player's location, regardless of distance 
     */
    public action(mapManager: MapManager): Promise<any> {
        ActionBehaviors.random(this, mapManager);
        return;
    }
}