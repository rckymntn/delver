import { Map, RNG } from "rot-js";
import { Floor } from "./Floor";
import { Position } from "./Position";
import { Tile, TileType } from "./Tile";
import { timer } from "./Decorators";
import { Wall } from "./Wall";
import { Stair } from "./Stair";

export class MapManager {
    
    private map: { [key: string]: Tile };

    constructor() {
        this.map = {};
    }

    public getMap() {
        return this.map;
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

    public getTileType(position: Position): TileType {
        return this.map[this.positionToKey(position)].type;
    }

    /*
     *  Get a random passable and non-occupied floor tile
     */
    public getRandomPlayablePosition(): Position {
        let arr: Position[] = [];
        for (let key in this.map) {
            if (this.map[key].type === TileType.Floor && this.map[key].getPassable() && !this.map[key].getOccupied()) {
                arr.push(this.keyToPosition(key));
            }
        }
        return arr[Math.floor(RNG.getUniform() * arr.length)];
    }

    /*
     *  Convert a position to a key of the form "(x, y)"
     */
    public positionToKey(position: Position): string {
        return `(${position.getX()}, ${position.getY()})`;
    }

    /*
     *  Convert a key of the form "(x, y)" to a position
     */
    public keyToPosition(key: string): Position {
        let splitKey: string[] = key.split(",");
        let x: number = Number(splitKey[0].replace("(", ""));
        let y: number = Number(splitKey[1].replace(")", ""));
        return new Position(x, y);
    }

    /*
     *  Generate a map of a random style (digger, arena, maze, cellular)
     */
    public randomMap(x: number, y: number): void {
        let numberOfMapTypes: number = 4;
        let map: number = Math.floor(Math.random() * numberOfMapTypes);
        try {
            switch (map) {
                case 0: {
                    this.diggerMap(x, y);
                    break;
                } case 1: {
                    this.arenaMap(x, y);
                    break;
                } case 2: {
                    this.mazeMap(x, y);
                    break;
                } case 3: {
                    this.cellularMap(x, y);
                    break;
                } default: {
                    this.arenaMap(x, y);
                    break;
                }
            }
        } catch {
            this.arenaMap(x, y);
        }
        let stairPosition = this.getRandomPlayablePosition();
        this.map[this.positionToKey(stairPosition)] = new Stair(stairPosition);
    }

    /*
     *  Create a new digger map 
     */
    @timer
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

    /*
     *  Create a new arena map 
     */
    @timer
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

    /*
     *  Create a new maze map
     */
    @timer
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

    /*
     *  Create a new cellular automata map
     */
    @timer
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