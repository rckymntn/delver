import { Position } from "./Position";

export class Terminal {
    
    private text: string[];
    
    constructor(private position: Position, private width: number, private height: number) {
        this.text = [];
    }

    public appendText(text: string): void {
        this.text.splice(0, 0, text);
        if (this.text.length > this.height) {
            this.text.splice(this.height, this.width - this.height);
        }
    }

    public drawText(): void {
        // ...
    }

    public clear(): void {
        this.text = [];
    }
}