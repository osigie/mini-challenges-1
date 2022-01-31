/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

function romanToDecimal (roman) {
  result = 0
  let symbolsEl = {
      "I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000
    };

  for(let i = 0; i < roman.length; i++){
    const current = roman[i];
    const currentValue = symbolsEl[current];
    const next = roman[i + 1];
    const nextValue = symbolsEl[next];

    if (currentValue < nextValue ){
      result -= (currentValue);
  } else {
      result += (currentValue);
  }

  }
return result;
 }
 //romanToDecimal("MXXX")

module.exports = romanToDecimal;
