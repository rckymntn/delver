import { Entity } from "./Entity"

export interface Actor extends Entity {
    action(): Promise<any>;
}