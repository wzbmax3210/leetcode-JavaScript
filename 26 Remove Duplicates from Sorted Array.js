/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0, j = 1, length = nums.length;
  if (length === 0) {
    return 0
  }
  for (; j < length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j]
    }
  }
  return i + 1
};