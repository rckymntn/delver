import { Display, FOV, Scheduler } from "rot-js/lib/index";
import Simple from "rot-js/lib/scheduler/simple";
import { Actor } from "./Actor";
import { Entity } from "./Entity";
import { Goblin } from "./Goblin";
import { MapManager } from "./MapManager";
import { Player } from "./Player";
import { Position } from "./Position";
import { timer } from "./Decorators";

export class GameManager {

    private displayOptions;
    private display: Display;

    private mapManager: MapManager;

    private scheduler: Simple;

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
        this.mapManager.randomMap(this.displayOptions.width, this.displayOptions.height);

        this.init();
        this.loop();
    }

    /*
     *  Draw an Entity (actor, tile, prop, etc.) to Display 
     */
    private drawEntity(entity: Entity): void {
        this.display.draw(entity.getPosition().getX(), entity.getPosition().getY(), entity.glyph.getChar(), entity.glyph.getForegroundColor(), entity.glyph.getBackgroundColor())
    }

    /*
     *  Move an entity to a position and set/clear occupied state of new/old position 
     */
    private moveEntity(entity: Entity, position: Position): void {
        this.mapManager.setOccupied(entity.getPosition(), false);
        entity.setPosition(position);
        this.mapManager.setOccupied(position, true);
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
    private populate(difficulty: number = 0): void {
        this.player = new Player(new Position(this.displayOptions.width >> 1, this.displayOptions.height >> 1));
        this.mapManager.setOccupied(this.player.position, true);
        let goblin1: Goblin = new Goblin(new Position(5, 5));
        this.mapManager.setOccupied(goblin1.position, true);
        let goblin2: Goblin = new Goblin(new Position(this.player.position.getX() + 1, this.player.position.getY()));
        this.mapManager.setOccupied(goblin2.position, true);
        
        this.actors.push(this.player);
        this.actors.push(goblin1);
        this.actors.push(goblin2);
    }

    /*
     *  Initialize the game
     */
    private init(): void {
        this.populate();
        this.scheduler = new Scheduler.Simple();
        for (let actor of this.actors) {
            this.scheduler.add(actor, true);
        }
        // Initialize all game components before refreshing 
        this.refresh();
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
     *  Main game loop 
     */
    private async loop(): Promise<any> {
        while (true) {
            //for (let actor of this.actors) {
            //    await actor.action(this.mapManager);
            //}
            await this.player.action(this.mapManager);
            this.refresh();
        }
    }
}