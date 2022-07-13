import { TextUtil } from "../src/TextUtil";

test("center pad, even string and even width", () => {
    let string: string = "abcdef";
    let width: number = 10;
    let expected: string = "\0\0abcdef\0\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
});

test("center pad, odd string and even width", () => {
    let string: string = "abcdefg";
    let width: number = 10;
    let expected: string = "\0\0abcdefg\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
});

test("center pad, even string and odd width", () => {
    let string: string = "abcdef";
    let width: number = 9;
    let expected: string = "\0\0abcdef\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
});

test("center pad, odd string and odd width", () => {
    let string: string = "abcdefg";
    let width: number = 9;
    let expected: string = "\0abcdefg\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
})