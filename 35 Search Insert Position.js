/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分法
 */
var searchInsert = function(nums, target) {
  let leftIndex = 0
  let rightIndex = nums.length - 1

  while (leftIndex <= rightIndex) {
    let midIndex = Math.trunc((leftIndex + rightIndex) / 2)
    if (target > nums[midIndex]) {
      leftIndex = midIndex + 1
    }
    if (target < nums[midIndex]) {
      rightIndex = midIndex - 1
    }
    if (target === nums[midIndex]) {
      return midIndex
    }
  }
  return leftIndex
};