import { Display, FOV } from "rot-js/lib/index";
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


    /*
     *  Draw an Entity (actor, tile, prop, etc.) to Display 
     */
    private drawEntity(entity: Entity): void {
        this.display.draw(entity.getPosition().x, entity.getPosition().y, entity.glyph.char, entity.glyph.fgColor, entity.glyph.bgColor)
    }


    /*
     *  Draw the current map
     */
    private drawMap(): void {
        for (let key in this.mapManager.map) {
            this.drawEntity(this.mapManager.map[key]);
        }
    }


    /*
     *  Populate the map 
     */
    private populate(): void {
        
    }


    /*
     *  Refreshing the screen, redrawing everything 
     */
    private refresh(): void {
        this.display.clear();
        this.drawMap();
        for (let actor of this.actors) {
            this.drawEntity(actor);
        }
        this.drawEntity(this.player);
    }


    /*
     *  Initialize the game
     */
    private init(): void {
        this.refresh();
    }

    /*
     *  Main game loop 
     */
    private async loop(): Promise<any> {
        while (true) {
            await this.player.action(this.mapManager);
            this.refresh();
        }
    }
}