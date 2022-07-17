import { Position } from "../src/Position";
import { TileType } from "../src/Tile";
import { Wall } from "../src/Wall";


test("glyph", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    expect(wall.glyph.getChar()).toEqual("#");
    expect(wall.glyph.getForegroundColor()).toEqual("lightgray");
    expect(wall.glyph.getBackgroundColor()).toEqual("black");
});

test("position", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    expect(wall.getPosition()).toEqual(new Position(0, 0));
    wall.setPosition(new Position(1, 1));
    expect(wall.getPosition()).toEqual(new Position(1, 1));
});

test("get occupied", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    expect(wall.getOccupied()).toEqual(false);
});

test("setOccupied", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    wall.setOccupied(true);
    expect(wall.getOccupied()).toEqual(true);
});

test("get passable", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    expect(wall.getPassable()).toEqual(false);
});

test("setPassable", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    wall.setPassable(true);
    expect(wall.getPassable()).toEqual(true);
})

test("tiletype", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    expect(wall.getType()).toEqual(TileType.Wall);
});
