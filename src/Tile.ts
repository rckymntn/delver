import { Entity } from "./Entity";

/*
 *  A tile is a type of entity that is exclusive to terrain 
 */
export interface Tile extends Entity {
    occupied: boolean;
    passable: boolean;
    type: TileType;
    
    getOccupied(): boolean;
    setOccupied(bool: boolean): void;
    getPassable(): boolean;
    setPassable(bool: boolean): void;
    getType(): TileType;
}

export const enum TileType {
    Floor,
    Wall,
    Stair
}