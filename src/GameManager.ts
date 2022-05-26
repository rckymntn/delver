import { Display } from "rot-js/lib/index";
import { Actor } from "./Actor";
import { Entity } from "./Entity";
import { Glyph } from "./Glyph";
import { Goblin } from "./Goblin";
import { Player } from "./Player";
import { Position } from "./Position";

export class GameManager {

    private displayOptions;
    private display: Display;

    private player: Player;

    constructor() {
        this.displayOptions = {
            width: 75,
            height: 30,
            fontSize: 16,
            spacing: 1.0
        };
        this.display = new Display(this.displayOptions);
        document.body.appendChild(this.display.getContainer());
        this.tempMapGen(this.display, this.displayOptions);
        this.player = new Player(new Position(this.displayOptions.width >> 1, this.displayOptions.height >> 1));
        this.drawEntity(this.player, this.display);
    }

    tempMapGen(display: Display, displayOptions) {
        for (let x = 0; x < displayOptions.width; x++) {
            for (let y = 0; y < displayOptions.height; y++) {
                if (!x || !y || x + 1 == displayOptions.width || y + 1 == displayOptions.height) {
                    display.draw(x, y, "#", "lightgray", "black");
                } else {
                    display.draw(x, y, ".", "lightgray", "black");
                }
            }
        }
    }

    drawPlayer(player: Player, display: Display) {
        display.draw(player.position.x, player.position.y, player.glyph.char, player.glyph.fgColor, player.glyph.bgColor);
    }

    drawActor(actor: Actor, display: Display) {
        display.draw(actor.position.x, actor.position.y, actor.glyph.char, actor.glyph.fgColor, actor.glyph.bgColor);
    }

    drawEntity(entity: Entity, display: Display) {
        display.draw(entity.position.x, entity.position.y, entity.glyph.char, entity.glyph.fgColor, entity.glyph.bgColor)
    }

    /*
     *  Temporary sanity check
     */
    sanityCheck() {
        let options = {
            width: 75,
            height: 30,
            fontSize: 16,
            spacing: 1.0
        };
        let display = new Display(options);
        document.body.appendChild(display.getContainer());
        for (let x = 0; x < options.width; x++) {
            for (let y = 0; y < options.height; y++) {
                if (!x || !y || x + 1 == options.width || y + 1 == options.height) {
                    display.draw(x, y, "#", "lightgray", "black");
                } else {
                    display.draw(x, y, ".", "lightgray", "black");
                }
            }
        }
        let player: Player = new Player(new Position(options.width >> 1, options.height >> 1));
        display.draw(player.position.x, player.position.y, player.glyph.char, player.glyph.fgColor, player.glyph.bgColor);
        let goblin: Goblin = new Goblin(new Position(5, 5));
        display.draw(goblin.position.x, goblin.position.y, goblin.glyph.char, goblin.glyph.fgColor, goblin.glyph.bgColor);
    }
}