export class TextUtil {
    /*
     *  Adds padding around a string to a maximum width to center justify the string 
     */
    public static centerPad(string: string, width: number, paddingChar: string = "\0"): string {
        let whitespace: number = width - string.length; // The total number of whitespace characters 
        if (whitespace % 2 == 0) {
            return(paddingChar.repeat(whitespace / 2) + string + paddingChar.repeat(whitespace / 2));
        } else {
            return(paddingChar.repeat((whitespace / 2) + 1) + string + paddingChar.repeat(whitespace / 2));
        }
    }

    /*
     *  Adds padding to the left of the string to a maximum width to right justify the string
     */
    public static leftPad(string: string, width: number, paddingChar: string = "\0"): string {
        let whitespace: number = width - string.length; // The total number of whitespace characters
        return(paddingChar.repeat(whitespace) + string);
    }
}

export const enum TextAlignment {
    Left,
    Center,
    Right
}