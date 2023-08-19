/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 *
 * https://leetcode.com/problems/max-consecutive-ones/description/
 *
 * algorithms
 * Easy (57.32%)
 * Likes:    4950
 * Dislikes: 440
 * Total Accepted:    938.9K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,1,0,1,1,1]'
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in
 * the array.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive
 * 1s. The maximum number of consecutive 1s is 3.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,0,1,1,0,1]
 * Output: 2
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
var findMaxConsecutiveOnes = function (nums) {
  let max = 0
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      k++
      if (k > max) max = k
    } else {
      k = 0
    }
  }
  return max
}
// @lc code=end
