const numberToRoman = require("./numberToRoman");

const illegalStr = `unexpected input value`;

describe.each([
  [-5, illegalStr],
  [0, illegalStr],
  [3.14, illegalStr],
  [5000, illegalStr],
  [`aa`, illegalStr],
  [, illegalStr],
])(`transfer a illegal input into a string`, (romanNum, expected) => {
  test(`transfer ${romanNum} into Roman`, () => {
    expect(numberToRoman(romanNum)).toBe(expected);
  });
});

describe.each([
  [1, `I`],
  [2, `II`],
  [3, `III`],
  [4, `IV`],
  [5, `V`],
  [6, `VI`],
  [7, `VII`],
  [8, `VIII`],
  [9, `IX`],
  [10, `X`],
])(
  `transfer a received normal number into a Roman numeral, from 1 to 10`,
  (romanNum, expected) => {
    test(`transfer ${romanNum} into Roman`, () => {
      expect(numberToRoman(romanNum)).toBe(expected);
    });
  }
);

describe.each([
  [11, `XI`],
  [14, `XIV`],
  [15, `XV`],
  [20, `XX`],
])(
  `transfer a received normal number into a Roman numeral, from 11 to 20`,
  (romanNum, expected) => {
    test(`transfer ${romanNum} into Roman`, () => {
      expect(numberToRoman(romanNum)).toBe(expected);
    });
  }
);

describe.each([
  [40, `XL`],
  [49, `XLIX`],
  [50, `L`],
  [99, `XCIX`],
  [100, `C`],
])(
  `transfer a received normal number into a Roman numeral, from 21 to 100`,
  (romanNum, expected) => {
    test(`transfer ${romanNum} into Roman`, () => {
      expect(numberToRoman(romanNum)).toBe(expected);
    });
  }
);

describe.each([
  [101, `CI`],
  [499, `CDXCIX`],
  [500, `D`],
  [999, `CMXCIX`],
  [1494, `MCDXCIV`],
  [1999, `MCMXCIX`],
  [3999, `MMMCMXCIX`],
  [4999, `MMMMCMXCIX`],
])(
  `transfer a received normal number into a Roman numeral, from 100 to 4999`,
  (romanNum, expected) => {
    test(`transfer ${romanNum} into Roman`, () => {
      expect(numberToRoman(romanNum)).toBe(expected);
    });
  }
);
