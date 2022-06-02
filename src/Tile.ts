import { Entity } from "./Entity";

export interface Tile extends Entity {
    occupied: boolean;
    
    getOccupied(): boolean;
    setOccupied(bool: boolean): void;
    getPassable(): boolean;
    setPassable(bool: boolean): void;
}

export const enum TileType {
    Floor,
    Wall
}