/**
 * @param {number} x
 * @return {number}
 * 方法二慢很多
 */
var reverse = function(x) {
  let result = 0
  while (x) {
    result = result * 10 + x % 10
    x = Math.trunc(x / 10)
  }
  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
    return 0
  }

  return result
};

var reverse2 = function (x) {
  let result = parseInt(x.toString().split('').reverse().join(''))

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
    return 0
  }

  return result
}