import { Actor, ActorType } from "./Actor";
import { Glyph } from "./Glyph";
import { Position } from "./Position";

export class Player implements Actor {
    
    glyph: Glyph;
    type: ActorType;
    isPassable: boolean;
    
    constructor(public position: Position) {
        this.position = position;
        this.glyph = new Glyph("@", "goldenrod", "black");
        this.type = ActorType.Player;
    }

    action(): Promise<any> {
        return;
    }
}