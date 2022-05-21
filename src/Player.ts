import { Actor } from "./Actor";
import { Glyph } from "./Glyph";
import { Position } from "./Position";

export class Player implements Actor {
    
    
    constructor(public position: Position, public glyph: Glyph) {

    }

    action(): Promise<any> {
        return;
    }
}