import { Map, RNG } from "rot-js";
import { Floor } from "./Floor";
import { Position } from "./Position";
import { Tile, TileType } from "./Tile";
import { Wall } from "./Wall";

export class MapManager {
    
    map: { [key: string]: Tile };

    constructor() {
        this.map = {};
    }

    getPassable(position: Position): boolean {
        return this.map[this.positionToKey(position)].getPassable();
    }

    setPassable(posiiton: Position, boolean: boolean): void {
        this.map[this.positionToKey(posiiton)].setPassable(boolean);
    }

    getOccupied(position: Position): boolean {
        return this.map[this.positionToKey(position)].getOccupied();
    }

    setOccupied(posiiton: Position, boolean: boolean): void {
        this.map[this.positionToKey(posiiton)].setOccupied(boolean);
    }

    positionToKey(position: Position): string {
        return `(${position.x}, ${position.y})`;
    }

    keyToPosition(key: string): Position {
        let splitKey: string[] = key.split(",");
        let x: number = Number(splitKey[0].replace("(", ""));
        let y: number = Number(splitKey[1].replace(")", ""));
        return new Position(x, y);
    }

    resolveNewPosition(position: Position, dxdy: number[]): Position {
        return new Position(position.x + dxdy[0], position.y + dxdy[1]);
    }

    diggerMap(x: number, y: number): void {
        let digger = new Map.Digger(x, y);
        digger.create(this.diggerCallback.bind(this));
    }

    private diggerCallback(x: number, y: number, wall: number) {
        let position = new Position(x, y);
        if (wall) {
            this.map[this.positionToKey(position)] = new Wall(position);
            return;
        }
        this.map[this.positionToKey(position)] = new Floor(position);
    }

    arenaMap(x: number, y: number) {
        let arena = new Map.Arena(x, y);
        arena.create(this.arenaCallback.bind(this));
    }

    private arenaCallback(x: number, y: number, wall: number) {
        let position = new Position(x, y);
        if (wall) {
            this.map[this.positionToKey(position)] = new Wall(position);
            return;
        }
        this.map[this.positionToKey(position)] = new Floor(position);
    }

    mazeMap(x: number, y: number) {
        let maze = new Map.DividedMaze(x, y);
        maze.create(this.mazeCallback.bind(this));
    }

    private mazeCallback(x: number, y: number, wall: number) {
        let position = new Position(x, y);
        if (wall) {
            this.map[this.positionToKey(position)] = new Wall(position);
            return;
        }
        this.map[this.positionToKey(position)] = new Floor(position);
    }

    cellularMap(x: number, y: number, randomness: number = 0.5) {
        let cellular = new Map.Cellular(x, y);
        cellular.randomize(randomness);
        cellular.create(this.cellularCallback.bind(this));
    }

    private cellularCallback(x: number, y: number, wall: number) {
        let position = new Position(x, y);
        if (wall) {
            this.map[this.positionToKey(position)] = new Wall(position);
            return;
        }
        this.map[this.positionToKey(position)] = new Floor(position);
    }
}