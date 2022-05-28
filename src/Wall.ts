import { Glyph } from "./Glyph";
import { Position } from "./Position";
import { Prop, PropType } from "./Prop"

export class Wall implements Prop {

    glyph: Glyph;
    type: PropType;
    isPassable: boolean;

    constructor(public position: Position) {
        this.position = position;
        this.glyph = new Glyph("#", "lightgray", "black");
        this.type = PropType.Wall;
        this.isPassable = false;
    }
}