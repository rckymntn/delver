export class TextUtil {
    /*
     *
     */
    public static centerPad(string: string, width: number, paddingChar: string = "\0"): string {
        let whitespace: number = Math.floor((width - string.length) / 2);
        if (string.length % 2 == 0) {
            return(paddingChar.repeat(whitespace) + string + paddingChar.repeat(whitespace));
        } else {
            return(paddingChar.repeat(whitespace + 1) + string + paddingChar.repeat(whitespace));
        }
    }

    /*
     *
     */
    public static leftPad(string: string, width: number, paddingChar: string = "\0"): string {
        let whitespace: number = width - string.length;
        return(paddingChar.repeat(whitespace) + string);
    }
}

export const enum TextAlignment {
    Left,
    Center,
    Right
}