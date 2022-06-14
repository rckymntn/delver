import { Glyph } from "./Glyph";
import { Position } from "./Position";
import { Tile, TileType } from "./Tile";

export class Floor implements Tile {

    glyph: Glyph;
    type: TileType;
    passable: boolean;
    occupied: boolean;

    constructor(public position: Position) {
        this.position = position;
        this.glyph = new Glyph(".", "lightgray", "black");
        this.type = TileType.Floor;
        this.passable = true;
        this.occupied = false;
    }

    getPosition(): Position {
        return this.position;
    }

    setPosition(posiiton: Position): void {
        this.position = posiiton;
    }

    getPassable(): boolean {
        return this.passable;
    }

    setPassable(bool: boolean): void {
        this.passable = bool;
    }

    getOccupied(): boolean {
        return this.occupied;
    }

    setOccupied(bool: boolean): void {
        this.occupied = bool;
    }

    getType(): TileType {
        return this.type;
    }
}