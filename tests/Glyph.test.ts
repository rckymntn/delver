import { Glyph } from "../src/Glyph";

test("getChar", () => {
    let glyph: Glyph = new Glyph("@", "white", "black");
    expect(glyph.getChar()).toEqual("@");
});

test("setChar", () => {
    let glyph: Glyph = new Glyph("@", "white", "black");
    glyph.setChar("#");
    expect(glyph.getChar()).toEqual("#");
});

test("getForegroundColor", () => {
    let glyph: Glyph = new Glyph("@", "white", "black");
    expect(glyph.getForegroundColor()).toEqual("white");
})

test("setForegroundColor", () => {
    let glyph: Glyph = new Glyph("@", "white", "black");
    glyph.setForegroundColor("red");
    expect(glyph.getForegroundColor()).toEqual("red");
});

test("getBackgroundColor", () => {
    let glyph: Glyph = new Glyph("@", "white", "black");
    expect(glyph.getBackgroundColor()).toEqual("black");
});

test("setBackgroundColor", () => {
    let glyph: Glyph = new Glyph("@", "white", "black");
    glyph.setBackgroundColor("yellow");
    expect(glyph.getBackgroundColor()).toEqual("yellow");
})