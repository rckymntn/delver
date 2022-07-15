import { Floor } from "../src/Floor";
import { Position } from "../src/Position";
import { TileType } from "../src/Tile";

test("glyph", () => {
    let floor: Floor = new Floor(new Position(0, 0));
    expect(floor.glyph.getChar()).toEqual(".");
    expect(floor.glyph.getForegroundColor()).toEqual("lightgray");
    expect(floor.glyph.getBackgroundColor()).toEqual("black");
});

test("position", () => {
    let floor: Floor = new Floor(new Position(0, 0));
    expect(floor.getPosition()).toEqual(new Position(0, 0));
    floor.setPosition(new Position(1, 1));
    expect(floor.getPosition()).toEqual(new Position(1, 1));
});

test("get occupied", () => {
    let floor: Floor = new Floor(new Position(0, 0));
    expect(floor.getOccupied()).toEqual(false);
});

test("set occupied", () => {
    let floor: Floor = new Floor(new Position(0, 0));
    floor.setOccupied(true);
    expect(floor.getOccupied()).toEqual(true);
})

test("get passable", () => {
    let floor: Floor = new Floor(new Position(0, 0));
    expect(floor.getPassable()).toEqual(true);
});

test("set passable", () => {
    let floor: Floor = new Floor(new Position(0, 0));
    floor.setPassable(false);
    expect(floor.getPassable()).toEqual(false);
});

test("tiletype", () => {
    let floor: Floor = new Floor(new Position(0, 0));
    expect(floor.getType()).toEqual(TileType.Floor);
});