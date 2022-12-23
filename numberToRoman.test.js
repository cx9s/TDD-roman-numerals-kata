const numberToRoman = require("./numberToRoman");

describe.each([
  [1, "I"],
  [5, "V"],
])(`aaa`, (romanNum, expected) => {
  test(`transfer ${romanNum} into Roman`, () => {
    expect(numberToRoman(romanNum)).toBe(expected);
  });
});

test("transfer a illegal input into a string", () => {
  const result = `unexpected input value`;
  expect(numberToRoman(-5)).toBe(result);
  expect(numberToRoman(0)).toBe(result);
  expect(numberToRoman(3.14)).toBe(result);
  expect(numberToRoman(5000)).toBe(result);
  expect(numberToRoman(`aa`)).toBe(result);
  expect(numberToRoman()).toBe(result);
});
test("transfer a received normal number into a Roman numeral, from 1 to 10", () => {
  expect(numberToRoman(1)).toBe(`I`);
  expect(numberToRoman(2)).toBe(`II`);
  expect(numberToRoman(3)).toBe(`III`);
  expect(numberToRoman(4)).toBe(`IV`);
  expect(numberToRoman(5)).toBe(`V`);
  expect(numberToRoman(6)).toBe(`VI`);
  expect(numberToRoman(7)).toBe(`VII`);
  expect(numberToRoman(8)).toBe(`VIII`);
  expect(numberToRoman(9)).toBe(`IX`);
  expect(numberToRoman(10)).toBe(`X`);
});
test("transfer a received normal number into a Roman numeral, from 11 to 20", () => {
  expect(numberToRoman(11)).toBe(`XI`);
  expect(numberToRoman(14)).toBe(`XIV`);
  expect(numberToRoman(15)).toBe(`XV`);
  expect(numberToRoman(20)).toBe(`XX`);
});
test("transfer a received normal number into a Roman numeral, from 21 to 100", () => {
  expect(numberToRoman(21)).toBe(`XXI`);
  expect(numberToRoman(24)).toBe(`XXIV`);
  expect(numberToRoman(25)).toBe(`XXV`);
  expect(numberToRoman(40)).toBe(`XL`);
  expect(numberToRoman(48)).toBe(`XLVIII`);
  expect(numberToRoman(49)).toBe(`XLIX`);
  expect(numberToRoman(50)).toBe(`L`);
  expect(numberToRoman(73)).toBe(`LXXIII`);
  expect(numberToRoman(89)).toBe(`LXXXIX`);
  expect(numberToRoman(90)).toBe(`XC`);
  expect(numberToRoman(94)).toBe(`XCIV`);
  expect(numberToRoman(99)).toBe(`XCIX`);
  expect(numberToRoman(100)).toBe(`C`);
});
test("transfer a received normal number into a Roman numeral, from 100 to 4999", () => {
  expect(numberToRoman(101)).toBe(`CI`);
  expect(numberToRoman(499)).toBe(`CDXCIX`);
  expect(numberToRoman(500)).toBe(`D`);
  expect(numberToRoman(999)).toBe(`CMXCIX`);
  expect(numberToRoman(1999)).toBe(`MCMXCIX`);
  expect(numberToRoman(1494)).toBe(`MCDXCIV`);
  expect(numberToRoman(3999)).toBe(`MMMCMXCIX`);
  expect(numberToRoman(4999)).toBe(`MMMMCMXCIX`);
});
