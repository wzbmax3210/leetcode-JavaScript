/**
 * @param {string} s
 * @return {number}
 * 方法二较简洁
 */
var romanToInt = function(s) {
  let result = 0
  s = [...s]
  for (let i = 0,sLength = s.length; i < sLength; i++) {
    switch (s[i]) {
      case 'I':
        result += 1
        break
      case 'V':
        if (i > 0 && s[i - 1] === 'I') {
          result += 3
        } else {
          result += 5
        }
        break
      case 'X':
        if (i > 0 && s[i - 1] === 'I') {
          result += 8
        } else {
          result += 10
        }
        break
      case 'L':
        if (i > 0 && s[i - 1] === 'X') {
          result += 30
        } else {
          result += 50
        }
        break
      case 'C':
        if (i > 0 && s[i - 1] === 'X') {
          result += 80
        } else {
          result += 100
        }
        break
      case 'D':
        if (i > 0 && s[i - 1] === 'C') {
          result += 300
        } else {
          result += 500
        }
        break
      case 'M':
        if (i > 0 && s[i - 1] === 'C') {
          result += 800
        } else {
          result += 1000
        }
        break
    }
  }

  return result > 0 && result < 4000 ? result : false
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function(s) {
  let result = 0
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let sArr = [...s]
  sArr.forEach((value, key) => {
    if (map[sArr[key + 1]] > map[value]) {
      result -= map[value]
    } else {
      result += map[value]
    }
  })
  return result > 0 && result < 4000 ? result : false
};