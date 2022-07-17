import { Position } from "../src/Position";

test("getX", () => {
    let position: Position = new Position(0, 0);
    expect(position.getX()).toEqual(0);
});

test("setX", () => {
    let position: Position = new Position(0, 0);
    position.setX(1);
    expect(position.getX()).toEqual(1);
});

test("getY", () => {
    let position: Position = new Position(0, 0);
    expect(position.getY()).toEqual(0);
});

test("setY", () => {
    let position: Position = new Position(0, 0);
    position.setY(1);
    expect(position.getY()).toEqual(1);
});

test("equal positions", () => {
    let position1: Position = new Position(0, 0);
    let position2: Position = new Position(0, 0);
    let expected: boolean = true;
    let actual: boolean = position1.equals(position2);
    expect(expected).toEqual(actual);
});

test("not equal positions", () => {
    let position1: Position = new Position(0, 0);
    let position2: Position = new Position(1, 1);
    let expected: boolean = false;
    let actual: boolean = position1.equals(position2);
    expect(expected).toEqual(actual);
});