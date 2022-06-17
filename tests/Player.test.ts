import { KEYS } from "rot-js";
import { ActorType } from "../src/Actor";
import { Player } from "../src/Player";
import { Position } from "../src/Position";

test("glyph", () => {
    let player: Player = new Player(new Position(0, 0));
    expect(player.glyph.getChar()).toEqual("@");
    expect(player.glyph.getForegroundColor()).toEqual("goldenrod");
    expect(player.glyph.getBackgroundColor()).toEqual("black");
});

test("type", () => {
    let player: Player = new Player(new Position(0, 0));
    expect(player.type).toEqual(ActorType.Player);
});

test("position", () => {
    let player: Player = new Player(new Position(0, 0));
    expect(player.position).toEqual(new Position(0, 0));
});

test("keybinds", () => {
    let player: Player = new Player(new Position(0, 0));
    expect(player.keyBinds[KEYS.VK_W]).toEqual(0);
    expect(player.keyBinds[KEYS.VK_D]).toEqual(1);
    expect(player.keyBinds[KEYS.VK_S]).toEqual(2);
    expect(player.keyBinds[KEYS.VK_A]).toEqual(3);
});