import { MapManager } from "../src/MapManager";
import { Position } from "../src/Position";

test("positionToKey: zero x, zero y", () => {
    let mapManager = new MapManager();
    let position: Position = new Position(0, 0);
    let expected: string = "(0, 0)";
    let actual: string = mapManager.positionToKey(position);
    expect(actual).toEqual(expected);
});

test("positionToKey: positive x, positive y", () => {
    let mapManager = new MapManager();
    let position: Position = new Position(1, 1);
    let expected: string = "(1, 1)";
    let actual: string = mapManager.positionToKey(position);
    expect(actual).toEqual(expected);
});

test("positionToKey: negative x, negative y", () => {
    let mapManager = new MapManager();
    let position: Position = new Position(-1, -1);
    let expected: string = "(-1, -1)";
    let actual: string = mapManager.positionToKey(position);
    expect(actual).toEqual(expected);
});

test("keyToPosition: zero x, zero y", () => {
    let mapManager = new MapManager();
    let key: string = "(0, 0)";
    let expected: Position = new Position(0, 0);
    let actual: Position = mapManager.keyToPosition(key);
    expect(actual).toEqual(expected);
});

test("keyToPosition: positive x, positive y", () => {
    let mapManager = new MapManager();
    let key: string = "(1, 1)";
    let expected: Position = new Position(1, 1);
    let actual: Position = mapManager.keyToPosition(key);
    expect(actual).toEqual(expected);
});

test("keyToPosition: negative x, negative y", () => {
    let mapManager = new MapManager();
    let key: string = "(-1, -1)";
    let expected: Position = new Position(-1, -1);
    let actual: Position = mapManager.keyToPosition(key);
    expect(actual).toEqual(expected);
});

test("positionToKey keyToPosition", () => {
    let mapManager = new MapManager();
    let firstPosition: Position = new Position(-1, -1);
    let firstKey = mapManager.positionToKey(firstPosition);
    let firstKeyExpected = "(-1, -1)";
    expect(firstKey).toEqual(firstKeyExpected);
    let secondPosition = mapManager.keyToPosition(firstKey);
    let secondPositionExpected = new Position(-1, -1);
    expect(secondPosition).toEqual(secondPositionExpected);
    expect(secondPosition).toEqual(firstPosition);
});

test("getRandomPlayablePosition", () => {
    let mapManager: MapManager = new MapManager();
    mapManager.cellularMap(5, 5);
    let position: Position = mapManager.getRandomPlayablePosition();
    expect(mapManager.getPassable(position)).toEqual(true);
    expect(mapManager.getOccupied(position)).toEqual(false);
})