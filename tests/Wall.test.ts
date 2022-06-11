import { Position } from "../src/Position";
import { TileType } from "../src/Tile";
import { Wall } from "../src/Wall";


test("glyph", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    expect(wall.glyph.char).toEqual("#");
    expect(wall.glyph.fgColor).toEqual("lightgray");
    expect(wall.glyph.bgColor).toEqual("black");
});

test("position", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    expect(wall.getPosition()).toEqual(new Position(0, 0));
    wall.setPosition(new Position(1, 1));
    expect(wall.getPosition()).toEqual(new Position(1, 1));
});

test("occupied", () => {
    let wall: Wall = new Wall(new Position(0, 0));
    expect(wall.getOccupied()).toEqual(false);
    wall.setOccupied(true);
    expect(wall.getOccupied()).toEqual(true);
});

