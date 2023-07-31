/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (61.40%)
 * Likes:    14560
 * Dislikes: 369
 * Total Accepted:    2.4M
 * Total Submissions: 3.8M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you minimize the total number of operations done?
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let idx = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      // Save position of earliest zero
      if (idx === -1) idx = i
    } else {
      if (idx >= 0) {
        // Switch current value with earliest zero
        nums[idx] = nums[i]
        nums[i] = 0
        i = idx
        idx = -1
      }
    }
  }
  return nums
}
// @lc code=end
