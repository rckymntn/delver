import { Actor } from "./Actor";
import { Glyph } from "./Glyph";
import { Position } from "./Position";

export class Player implements Actor {
    
    position: Position;
    glyph: Glyph;
    isPassable: boolean;
    
    constructor() {

    }

    action(): Promise<any> {
        return;
    }
}