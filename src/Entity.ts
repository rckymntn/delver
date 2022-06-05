import { Glyph } from "./Glyph";
import { Position } from "./Position";

export interface Entity {
    position: Position;
    glyph: Glyph;
    passable: boolean;

    getPosition(): Position;
    setPosition(posiiton: Position): void;
}