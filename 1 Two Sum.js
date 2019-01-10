/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * description 使用hasOwnProperty比数组的indexOf快很多
 */
var twoSum = function(nums, target) {
  let numsObj = {}
  for (let i = 0,numsLength = nums.length; i < numsLength; i++) {
    let difference = target - nums[i]
    if (numsObj.hasOwnProperty(difference)) {
      return [numsObj[difference], i]
    } else {
      numsObj[nums[i]] = i
    }
  }
};