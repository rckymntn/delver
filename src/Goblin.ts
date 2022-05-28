import { Actor, ActorType } from "./Actor";
import { Glyph } from "./Glyph";
import { Position } from "./Position";

export class Goblin implements Actor {
    
    glyph: Glyph;
    type: ActorType;
    isPassable: boolean;
    
    constructor(public position: Position) {
        this.position = position;
        this.glyph = new Glyph("G", "green", "black");
        this.type = ActorType.Goblin;
        this.isPassable = false;
    }

    action(): Promise<any> {
        return;
    }
}