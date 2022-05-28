import { DIRS, KEYS } from "rot-js";
import { Actor, ActorType } from "./Actor";
import { Glyph } from "./Glyph";
import { Position } from "./Position";

export class Player implements Actor {
    
    glyph: Glyph;
    type: ActorType;
    isPassable: boolean;
    keyBinds: { [key: number]: number };
    
    constructor(public position: Position) {
        this.position = position;
        this.glyph = new Glyph("@", "goldenrod", "black");
        this.type = ActorType.Player;
        this.keyBinds = {};
        // Indexes for using rot.js DIRS[4] (four-directional)
        this.keyBinds[KEYS.VK_A] = 0;   // DIRS[4][0] = (-1, 0) 
        this.keyBinds[KEYS.VK_D] = 1;   // DIRS[4][1] = (1, 0) 
        this.keyBinds[KEYS.VK_W] = 2;   // DIRS[4][2] = (0, 1)
        this.keyBinds[KEYS.VK_S] = 3;   // DIRS[4][3] = (0, -1)
    }

    action(): Promise<any> {
        return;
    }
}