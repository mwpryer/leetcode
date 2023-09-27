/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 *
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/
 *
 * algorithms
 * Easy (47.81%)
 * Likes:    1114
 * Dislikes: 867
 * Total Accepted:    218.4K
 * Total Submissions: 456.5K
 * Testcase Example:  '[3,6,1,0]'
 *
 * You are given an integer array nums where the largest integer is unique.
 *
 * Determine whether the largest element in the array is at least twice as much
 * as every other number in the array. If it is, return the index of the
 * largest element, or return -1 otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,6,1,0]
 * Output: 1
 * Explanation: 6 is the largest integer.
 * For every other number in the array x, 6 is at least twice as big as x.
 * The index of value 6 is 1, so we return 1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4]
 * Output: -1
 * Explanation: 4 is less than twice the value of 3, so we return -1.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 50
 * 0 <= nums[i] <= 100
 * The largest element in nums is unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max1 = nums[0]
  let idx = 0
  let max2 = -Infinity
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1
      max1 = nums[i]
      idx = i
    } else if (nums[i] > max2) {
      max2 = nums[i]
    }
  }
  return max1 >= max2 * 2 ? idx : -1
}
// @lc code=end
