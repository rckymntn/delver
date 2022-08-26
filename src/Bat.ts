import { ActionBehaviors } from "./ActionBehaviors";
import { Actor, ActorType } from "./Actor";
import { timer } from "./Decorators";
import { Glyph } from "./Glyph";
import { MapManager } from "./MapManager";
import { Position } from "./Position";

export class Bat implements Actor {
    
    glyph: Glyph;
    type: ActorType;
    
    constructor(public position: Position) {
        this.position = position;
        this.glyph = new Glyph("B", "red", "black");
        this.type = ActorType.Bat;
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(position: Position): void {
        this.position = position;
    }

    /*
     *  Bat action behavior is as follows:
     *  A bat will randomly choose a direction it wants to go.
     *  If it can go that direction, it will. 
     *  Otherwise, the bat will skip a turn.
     *  
     *  TODO: Make the bat target the player when within a certain distance of each other 
     */
    @timer
    public action(mapManager: MapManager): Promise<any> {
        ActionBehaviors.random(this, mapManager);
        return;
    }
}