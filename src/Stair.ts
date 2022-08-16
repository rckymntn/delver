import { Glyph } from "./Glyph";
import { Position } from "./Position";
import { Tile, TileType } from "./Tile";


export class Stair implements Tile {

    glyph: Glyph;
    type: TileType;
    passable: boolean;
    occupied: boolean;

    constructor(public position: Position) {
        this.position = position;
        this.glyph = new Glyph(">", "lightgray", "black");
        this.type = TileType.Stair;
        this.passable = true;
        this.occupied = false;
    }

    public getPosition(): Position {
        return this.position;
    }

    public setPosition(position: Position): void {
        this.position = position;
    }

    public getPassable(): boolean {
        return this.passable;
    }

    public setPassable(bool: boolean): void {
        this.passable = bool;
    }

    public getOccupied(): boolean {
        return this.occupied;
    }

    public setOccupied(bool: boolean): void {
        this.occupied = bool;
    }

    public getType(): TileType {
        return this.type;
    }

}