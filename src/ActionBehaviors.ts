import { Actor } from "./Actor";
import { MapManager } from "./MapManager";
import { Position } from "./Position";

export class ActionBehaviors {
    
    public static random(actor: Actor, mapManager: MapManager) {
        let randDirection: number = Math.floor(Math.random() * 4);
        let curPosition: Position = actor.getPosition();
        switch(randDirection) {
            case 0: {
                // North
                let newPosition: Position = new Position(curPosition.getX(), curPosition.getY() + 1);
                if (mapManager.getPassable(newPosition) && !mapManager.getOccupied(newPosition)) {
                    mapManager.setOccupied(actor.position, false);
                    actor.position = newPosition;
                    mapManager.setOccupied(actor.position, true);
                }
                break;
            } case 1: {
                // East
                let newPosition: Position = new Position(curPosition.getX() + 1, curPosition.getY());
                if (mapManager.getPassable(newPosition) && !mapManager.getOccupied(newPosition)) {
                    mapManager.setOccupied(actor.position, false);
                    actor.position = newPosition;
                    mapManager.setOccupied(actor.position, true);
                }
                break;
            } case 2: {
                // South
                let newPosition: Position = new Position(curPosition.getX(), curPosition.getY() - 1);
                if (mapManager.getPassable(newPosition) && !mapManager.getOccupied(newPosition)) {
                    mapManager.setOccupied(actor.position, false);
                    actor.position = newPosition;
                    mapManager.setOccupied(actor.position, true);
                }
                break;
            } case 3: {
                // West
                let newPosition: Position = new Position(curPosition.getX() - 1, curPosition.getY());
                if (mapManager.getPassable(newPosition) && !mapManager.getOccupied(newPosition)) {
                    mapManager.setOccupied(actor.position, false);
                    actor.position = newPosition;
                    mapManager.setOccupied(actor.position, true);
                }
                break;
            }
        }
    }
}