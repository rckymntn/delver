import { TextUtil } from "../src/TextUtil";

test("centerPad, even string and even width", () => {
    let string: string = "abcdef";
    let width: number = 10;
    let expected: string = "\0\0abcdef\0\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
});

test("centerPad, odd string and even width", () => {
    let string: string = "abcdefg";
    let width: number = 10;
    let expected: string = "\0\0abcdefg\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
});

test("centerPad, even string and odd width", () => {
    let string: string = "abcdef";
    let width: number = 9;
    let expected: string = "\0\0abcdef\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
});

test("centerPad, odd string and odd width", () => {
    let string: string = "abcdefg";
    let width: number = 9;
    let expected: string = "\0abcdefg\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
});

test("centerPad, empty string and even width", () => {
    let string: string = "";
    let width: number = 10;
    let expected: string = "\0\0\0\0\0\0\0\0\0\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
});

test("centerPad, empty string and odd width", () => {
    let string: string = "";
    let width: number = 9;
    let expected: string = "\0\0\0\0\0\0\0\0\0";
    let actual: string = TextUtil.centerPad(string, width);
    expect(expected).toEqual(actual);
});

test("leftPad, even string and even width", () => {
    let string: string = "abcdef";
    let width: number = 10;
    let expected: string = "\0\0\0\0abcdef";
    let actual: string = TextUtil.leftPad(string, width);
    expect(expected).toEqual(actual);
});

test("leftPad, odd string and even width", () => {
    let string: string = "abcdefg";
    let width: number = 10;
    let expected: string = "\0\0\0abcdefg";
    let actual: string = TextUtil.leftPad(string, width);
    expect(expected).toEqual(actual);
});

test("leftPad, even string and odd width", () => {
    let string: string = "abcdef";
    let width: number = 9;
    let expected: string = "\0\0\0abcdef";
    let actual: string = TextUtil.leftPad(string, width);
    expect(expected).toEqual(actual);
});

test("leftPad, odd string and odd width", () => {
    let string: string = "abcdefg";
    let width: number = 9;
    let expected: string = "\0\0abcdefg";
    let actual: string = TextUtil.leftPad(string, width);
    expect(expected).toEqual(actual);
});

test("leftPad, empty string and even width", () => {
    let string: string = "";
    let width: number = 10;
    let expected: string = "\0\0\0\0\0\0\0\0\0\0";
    let actual: string = TextUtil.leftPad(string, width);
    expect(expected).toEqual(actual);
});

test("leftPad, empty string and odd width", () => {
    let string: string = "";
    let width: number = 9;
    let expected: string = "\0\0\0\0\0\0\0\0\0";
    let actual: string = TextUtil.leftPad(string, width);
    expect(expected).toEqual(actual);
});