import { Glyph } from "./Glyph";
import { Position } from "./Position";

/*
 *  An entity is anything rendered on the map. Tiles, props, actors, etc. 
 */
export interface Entity {
    position: Position;
    glyph: Glyph;

    getPosition(): Position;
    setPosition(position: Position): void;
}