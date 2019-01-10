/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  let reverseX = 0, xTmp = x
  while(xTmp > 0) {
    reverseX = reverseX * 10 + xTmp % 10
    xTmp = Math.trunc(xTmp / 10)
  }
  return reverseX === x
};