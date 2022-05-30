import { Position } from "./Position";

export class MapManager {
    
    constructor() {

    }

    generateMap() {

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

    public resolveNewPosition(position: Position, dxdy: number[]): Position {
        return new Position(position.x + dxdy[0], position.y + dxdy[1]);
    }

    isPassable(): boolean {
        return false;
    }
}