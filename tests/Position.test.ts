import { Position } from "../src/Position";

test("construction of a new position", () => {
    let position = new Position(0, 0);
    expect(position.getX()).toEqual(0);
    expect(position.getY()).toEqual(0);
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