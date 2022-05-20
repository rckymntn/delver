export class Position {
    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
    }

    equals(position: Position): boolean {
        return (this.x === position.x && this.y === position.y);
    }
}