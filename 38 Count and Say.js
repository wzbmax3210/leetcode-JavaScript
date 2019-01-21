/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return '1'
  }
  let prevResult = countAndSay(n - 1) + '*'
  let sameFlag = prevResult.charAt(0)
  let sameCount = 1
  let result = ''
  for (let i = 1; i < prevResult.length; i++) {
    if (prevResult.charAt(i) !== sameFlag) {
      result += sameCount.toString() + sameFlag
      sameCount = 1
      sameFlag = prevResult.charAt(i)
    } else {
      sameCount++
    }
  }
  return result
};