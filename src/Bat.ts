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
        let randDirection: number = Math.floor(Math.random() * 4);
        console.log(randDirection);
        let curPosition: Position = this.getPosition();
        switch (randDirection) {
            case 0: {
                // North
                let newPosition: Position = new Position(curPosition.getX(), curPosition.getY() + 1)
                if (mapManager.getPassable(newPosition) && !mapManager.getOccupied(newPosition)) {
                    mapManager.setOccupied(this.position, false);
                    this.position = newPosition;
                    mapManager.setOccupied(this.position, true);
                }
                break;
            } case 1: {
                // East
                let newPosition: Position = new Position(curPosition.getX() + 1, curPosition.getY())
                if (mapManager.getPassable(newPosition) && !mapManager.getOccupied(newPosition)) {
                    mapManager.setOccupied(this.position, false);
                    this.position = newPosition;
                    mapManager.setOccupied(this.position, true);
                }
                break;
            } case 2: {
                // South
                let newPosition: Position = new Position(curPosition.getX(), curPosition.getY() - 1)
                if (mapManager.getPassable(newPosition) && !mapManager.getOccupied(newPosition)) {
                    mapManager.setOccupied(this.position, false);
                    this.position = newPosition;
                    mapManager.setOccupied(this.position, true);
                }
                break;
            } case 3: {
                // West
                let newPosition: Position = new Position(curPosition.getX() - 1, curPosition.getY())
                if (mapManager.getPassable(newPosition) && !mapManager.getOccupied(newPosition)) {
                    mapManager.setOccupied(this.position, false);
                    this.position = newPosition;
                    mapManager.setOccupied(this.position, true);
                }
                break;
            }
        }
        return;
    }
}