/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0, r = nums.length - 1;
  while (r - l > 1) {
    let mid = Math.trunc((r - l) / 2) + l;
    if (nums[mid] >= target) r = mid;
    else l = mid;
  }
  if (nums[r] < target) return r + 1;
  if (nums[l] < target) return l + 1;
  return l;
};