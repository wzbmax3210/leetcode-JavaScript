/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  let strsFirstArr = [...strs[0]]
  let strsFirstLength = strsFirstArr.length
  let result = ''
  for (let i = 0; i < strsFirstLength; i++) {
    if (strs.every(string => string[i] === strsFirstArr[i])) {
      result += strsFirstArr[i]
    } else {
      return result
    }
  }
  return result
};
