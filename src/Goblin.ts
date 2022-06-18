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

    getPosition(): Position {
        return this.position;
    }

    setPosition(posiiton: Position): void {
        this.position = posiiton;
    }

    action(mapManager: MapManager): Promise<any> {
        return;
    }
}