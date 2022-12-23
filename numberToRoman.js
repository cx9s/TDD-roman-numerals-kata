// 1-I, 5-V, 10-X, 50-L, 100-C, 500-D, 1000-M;
// range 1 - 4999;
function numberToRoman(num) {
  if (!Number.isInteger(num) || !(num > 0 && num < 5000)) {
    return `unexpected input value`;
  }

  const romanCharacters = [
    { digit: 1000, char: `M` },
    { digit: 900, char: `CM` },
    { digit: 500, char: `D` },
    { digit: 400, char: `CD` },
    { digit: 100, char: `C` },
    { digit: 90, char: `XC` },
    { digit: 50, char: `L` },
    { digit: 40, char: `XL` },
    { digit: 10, char: `X` },
    { digit: 9, char: `IX` },
    { digit: 5, char: `V` },
    { digit: 4, char: `IV` },
    { digit: 1, char: `I` },
  ];
  let roman = "";

  romanCharacters.forEach((romancharacter) => {
    while (num >= romancharacter.digit) {
      roman += romancharacter.char;
      num -= romancharacter.digit;
    }
  });

  return roman;
}

module.exports = numberToRoman;
