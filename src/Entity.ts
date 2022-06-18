import { Glyph } from "./Glyph";
import { Position } from "./Position";

export interface Entity {
    position: Position;
    glyph: Glyph;

    getPosition(): Position;
    setPosition(position: Position): void;
}