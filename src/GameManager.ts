import { Display, FOV, Scheduler } from "rot-js/lib/index";
import Simple from "rot-js/lib/scheduler/simple";
import { Actor } from "./Actor";
import { Entity } from "./Entity";
import { Goblin } from "./Goblin";
import { MapManager } from "./MapManager";
import { Player } from "./Player";
import { Position } from "./Position";
import { timer } from "./Decorators";
import { TextAlignment, TextUtil } from "./TextUtil";

export class GameManager {

    private displayOptions;
    private display: Display;

    private mapManager: MapManager;

    private scheduler: Simple;

    private player: Player;

    private actors: Actor[];

    private floor: number;

    constructor() {
        this.displayOptions = {
            width: 80,
            height: 35,
            fontSize: 21,
            spacing: 1.0
        };

        this.actors = [];

        this.display = new Display(this.displayOptions);
        document.body.appendChild(this.display.getContainer());
        
        this.mapManager = new MapManager();
        this.mapManager.randomMap(this.displayOptions.width, this.displayOptions.height - 5);

        this.floor = 0;

        this.init();
        this.loop();
    }

    private resolveAction(proposedAction: Promise<any>): any {
        // Takes output from proposeAction() of Actors and does something with it
        // TODO:
        // - Update Actor interface to change action() to proposeAction()
        // - Change from current player action implementation to the new one 
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
        for (let key in this.mapManager.getMap()) {
            this.drawEntity(this.mapManager.getMap()[key]);
        }
    }


    /*
     *
     */
    private drawText(position: Position, text: string, width: number = this.displayOptions.width, alignment: TextAlignment = TextAlignment.Left) {
        switch(alignment) {
            case TextAlignment.Left: {
                this.display.drawText(position.getX(), position.getY(), text, width);
                break;
            } case TextAlignment.Center: {
                this.display.drawText(position.getX(), position.getY(), TextUtil.centerPad(text, width), width);
                break;
            } case TextAlignment.Right: {
                this.display.drawText(position.getX(), position.getY(), TextUtil.leftPad(text, width), width);
                break;
            } default: {
                this.display.drawText(position.getX(), position.getY(), text, width);
                break;
            }
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
        
        for (let i: number = 0; i < difficulty; i++) {
            let goblin: Goblin = new Goblin(this.mapManager.getRandomPlayablePosition());
            this.mapManager.setOccupied(goblin.position, true);
            this.actors.push(goblin);
        }

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
        this.drawText(new Position(0, 30), `Floor: ${this.floor}`, undefined, TextAlignment.Center);
        this.drawText(new Position(0, 31), `You are at ${this.player.getPosition().getX()}, ${this.player.getPosition().getY()}`);
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