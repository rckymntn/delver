import { Map, RNG } from "rot-js";
import Uniform from "rot-js/lib/map/uniform";
import { Floor } from "./Floor";
import { Position } from "./Position";
import { Tile, TileType } from "./Tile";
import { Wall } from "./Wall";

export class MapManager {
    
    map: { [key: string]: Tile };

    constructor() {
        this.map = {};
    }

    public getPassable(position: Position): boolean {
        return this.map[this.positionToKey(position)].getPassable();
    }

    public setPassable(position: Position, boolean: boolean): void {
        this.map[this.positionToKey(position)].setPassable(boolean);
    }

    public getOccupied(position: Position): boolean {
        return this.map[this.positionToKey(position)].getOccupied();
    }

    public setOccupied(position: Position, boolean: boolean): void {
        this.map[this.positionToKey(position)].setOccupied(boolean);
    }

    public positionToKey(position: Position): string {
        return `(${position.x}, ${position.y})`;
    }

    public getRandomPlayablePosition(): Position {
        let arr: Position[];
        for (let key in this.map) {
            if (this.map[key].type === TileType.Floor && this.map[key].getPassable() && !this.map[key].getOccupied()) {
                arr.push(this.keyToPosition(key));
            }
        }
        return arr[Math.floor(RNG.getUniform() * arr.length)];
    }

    public keyToPosition(key: string): Position {
        let splitKey: string[] = key.split(",");
        let x: number = Number(splitKey[0].replace("(", ""));
        let y: number = Number(splitKey[1].replace(")", ""));
        return new Position(x, y);
    }

    public diggerMap(x: number, y: number): void {
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

    public arenaMap(x: number, y: number) {
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

    public mazeMap(x: number, y: number) {
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

    public cellularMap(x: number, y: number, randomness: number = 0.3) {
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