export class Glyph {
    constructor(public char: string, public fgColor?: string, public bgColor?: string) {
        this.char = char;
        this.fgColor = fgColor;
        this.bgColor = bgColor;
    }
}