/*
 *  Anything rendered on a map needs a glyph, even if invisible. 
 *  Glyphs are comprised of a character, their foreground color, and background color. 
 */
export class Glyph {
    constructor(private char: string, private fgColor: string = "white", private bgColor: string = "black") {
        this.char = char;
        this.fgColor = fgColor;
        this.bgColor = bgColor;
    }

    public getChar(): string {
        return this.char;
    }

    public setChar(char: string): void {
        this.char = char;
    }

    public getForegroundColor(): string {
        return this.fgColor;
    }

    public setForegroundColor(fgColor: string): void {
        this.fgColor = fgColor;
    }

    public getBackgroundColor(): string {
        return this.bgColor;
    }

    public setBackgroundColor(bgColor: string): void {
        this.bgColor = bgColor;
    }
}