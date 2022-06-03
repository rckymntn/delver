import { Display } from "rot-js/lib/index";
import { Actor, ActorType } from "./Actor";
import { Entity } from "./Entity";
import { Floor } from "./Floor";
import { Glyph } from "./Glyph";
import { Goblin } from "./Goblin";
import { MapManager } from "./MapManager";
import { Player } from "./Player";
import { Position } from "./Position";
import { Wall } from "./Wall";

export class GameManager {

    private displayOptions;
    private display: Display;

    private mapManager: MapManager;

    private player: Player;

    private actors: Actor[];

    constructor() {
        this.displayOptions = {
            width: 75,
            height: 30,
            fontSize: 21,
            spacing: 1.0
        };

        this.actors = [];

        this.display = new Display(this.displayOptions);
        document.body.appendChild(this.display.getContainer());
        
        this.mapManager = new MapManager();
        this.mapManager.cellularMap(this.displayOptions.width, this.displayOptions.height);

        this.player = new Player(new Position(this.displayOptions.width >> 1, this.displayOptions.height >> 1));
        this.mapManager.setOccupied(this.player.position, true);
        let goblin1: Goblin = new Goblin(new Position(5, 5));
        this.mapManager.setOccupied(goblin1.position, true);
        let goblin2: Goblin = new Goblin(new Position(this.player.position.x + 1, this.player.position.y));
        this.mapManager.setOccupied(goblin2.position, true);
        

        this.actors.push(this.player);
        this.actors.push(goblin1);
        this.actors.push(goblin2);

        this.init();
        this.loop();
    }

    private drawEntity(entity: Entity): void {
        this.display.draw(entity.getPosition().x, entity.getPosition().y, entity.glyph.char, entity.glyph.fgColor, entity.glyph.bgColor)
    }

    private drawMap(): void {
        for (let key in this.mapManager.map) {
            this.drawEntity(this.mapManager.map[key]);
        }
    }

    private refresh(): void {
        this.display.clear();
        this.drawMap();
        for (let actor of this.actors) {
            this.drawEntity(actor);
        }
        this.drawEntity(this.player);
    }

    private init(): void {
        this.refresh();
    }

    private async loop(): Promise<any> {
        while (true) {
            await this.player.action(this.mapManager);
            this.refresh();
        }
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