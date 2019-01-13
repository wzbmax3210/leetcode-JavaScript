/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let leftMap = {
    '(': '(',
    '[': '[',
    '{': '{'
  }
  let rightMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  let sArr = [...s]
  for (let i = 0, length = sArr.length; i < length; i++) {
    if (leftMap.hasOwnProperty(sArr[i])) {
      stack.push(sArr[i])
    }
    if (rightMap.hasOwnProperty(sArr[i])) {
      let popStr = stack.pop(sArr[i])
      if (popStr !== rightMap[sArr[i]]) {
        return false
      }
    }
  }
  return stack.length === 0
};
