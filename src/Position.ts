/*
 *  For anything to be rendered on the map, it needs as position.
 *  Positions are stored as an x, y coordinate. 
 */
export class Position {
    constructor(private x: number, private y: number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public setY(y: number) {
        this.y = y;
    }
    
    public equals(position: Position): boolean {
        return (this.getX() === position.getX() && this.getY() === position.getY());
    }
}