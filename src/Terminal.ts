export class Terminal {
    
    private text: string[];
    
    constructor() {
        this.text = [];
    }

    private clear(): void {
        this.text = [];
    }
}