/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 *
 * https://leetcode.com/problems/contiguous-array/description/
 *
 * algorithms
 * Medium (46.89%)
 * Likes:    7322
 * Dislikes: 322
 * Total Accepted:    367.4K
 * Total Submissions: 773.8K
 * Testcase Example:  '[0,1]'
 *
 * Given a binary array nums, return the maximum length of a contiguous
 * subarray with an equal number of 0 and 1.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with an equal number
 * of 0 and 1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal
 * number of 0 and 1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * nums[i] is either 0 or 1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let max = 0
  let sum = 0
  const sums = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) sum--
    if (nums[i] === 1) sum++
    if (sum === 0) max = i + 1
    if (sums.has(sum)) {
      max = Math.max(max, i - sums.get(sum))
    } else {
      sums.set(sum, i)
    }
  }
  return max
}
// @lc code=end
