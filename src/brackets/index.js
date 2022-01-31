/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let emptyArr = [];
  // if (str.length % 2 !== 0) {
  //   return "invalid";
  // }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[" || str[i] === "{" || str[i] === "(") {
      emptyArr.push(str[i]);
    } else if (
      ("[" === emptyArr[emptyArr.length - 1] && str[i] === "]") ||
      ("{" === emptyArr[emptyArr.length - 1] && str[i] === "}") ||
      ("(" === emptyArr[emptyArr.length - 1] && str[i] === ")")
    ) {
      emptyArr.pop();
    } else {
      return "invalid";
    }
  }
  return emptyArr.length ? "invalid" : "valid";
}

module.exports = isValid;
