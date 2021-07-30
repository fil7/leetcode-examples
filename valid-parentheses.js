/**
 * @param {string} s
 * @return {boolean}
 *
 * Runtime:64 ms, Memory Usage:	39.8 MB
 */
const isValid = function (s) {
  const stack = [];
  const closedSymbols = [')', '}', ']'];
  const brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const isCloseSymbol = (char) => closedSymbols.includes(char);

  for (const char of s) {
    if (isCloseSymbol(char)) {
      if (brackets[char] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
