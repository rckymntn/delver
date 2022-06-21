import { DIRS, KEYS } from "rot-js";
import { Actor, ActorType } from "./Actor";
import { Glyph } from "./Glyph";
import { MapManager } from "./MapManager";
import { Position } from "./Position";

export class Player implements Actor {
    
    glyph: Glyph;
    type: ActorType;
    keyBinds: { [key: number]: number };
    
    // Note to self: Player's starting position needs to be marked as occupied at spawn 
    constructor(public position: Position) {
        this.position = position;
        this.glyph = new Glyph("@", "goldenrod", "black");
        this.type = ActorType.Player;
        this.keyBinds = {};
        // Indexes for using rot.js DIRS[4] (four-directional)
        // TODO: Refactor keybinds to not use rot.js DIRS and KeyboardEvent.code
        // Use keyCode or key instead 
        this.keyBinds[KEYS.VK_W] = 0;   // DIRS[4][2] = (0, 1)
        this.keyBinds[KEYS.VK_D] = 1;   // DIRS[4][1] = (1, 0) 
        this.keyBinds[KEYS.VK_S] = 2;   // DIRS[4][3] = (0, -1)
        this.keyBinds[KEYS.VK_A] = 3;   // DIRS[4][0] = (-1, 0) 
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(position: Position): void {
        this.position = position;
    }

    public async action(mapManager: MapManager): Promise<any> {
        //await new Promise((resolve) => setTimeout(resolve, 100));
        let key: KeyboardEvent = await new Promise((resolve) => {
            window.addEventListener("keydown", resolve, { once: true });
        });
        if (key.keyCode in this.keyBinds) {
            let dxdy = DIRS[4][this.keyBinds[key.keyCode]];
            let newPosition = new Position(this.position.getX() + dxdy[0], this.position.getY() + dxdy[1]);
            if (mapManager.getPassable(newPosition) && !mapManager.getOccupied(newPosition)) {
                mapManager.setOccupied(this.position, false);
                this.position = newPosition;
                mapManager.setOccupied(this.position, true);
            } else if (mapManager.getOccupied(newPosition)) {
                console.log(`Position ${newPosition.getX()}, ${newPosition.getY()} occupied.`);
            }
        }
    }

    /*
     * // Second pass at implementing player movement
     * // Player action returns a position 
     * // Position is then handled by GameManager to check if new position is occupied or passable and acts accordingly 
     *
     *async action(mapManager: MapManager): Promise<any> {
     *    //await new Promise((resolve) => setTimeout(resolve, 100));
     *    let key: KeyboardEvent = await new Promise((resolve) => {
     *        window.addEventListener("keydown", resolve, { once: true });
     *    });
     *    if (key.keyCode in this.keyBinds) {
     *        let dxdy = DIRS[4][this.keyBinds[key.keyCode]];
     *        let newPosition = new Position(this.position.x + dxdy[0], this.position.y + dxdy[1]);
     *        return newPosition;
     *    }
     *}
     */
}