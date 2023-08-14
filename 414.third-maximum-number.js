/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 *
 * https://leetcode.com/problems/third-maximum-number/description/
 *
 * algorithms
 * Easy (33.65%)
 * Likes:    2699
 * Dislikes: 2919
 * Total Accepted:    454.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[3,2,1]'
 *
 * Given an integer array nums, return the third distinct maximum number in
 * this array. If the third maximum does not exist, return the maximum
 * number.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,2,1]
 * Output: 1
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2.
 * The third distinct maximum is 1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2]
 * Output: 2
 * Explanation:
 * The first distinct maximum is 2.
 * The second distinct maximum is 1.
 * The third distinct maximum does not exist, so the maximum (2) is returned
 * instead.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [2,2,3,1]
 * Output: 1
 * Explanation:
 * The first distinct maximum is 3.
 * The second distinct maximum is 2 (both 2's are counted together since they
 * have the same value).
 * The third distinct maximum is 1.
 *
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
 * Follow up: Can you find an O(n) solution?
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max1 = -Infinity
  let max2 = -Infinity
  let max3 = -Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== max1 && nums[i] !== max2 && nums[i] !== max3) {
      if (nums[i] > max1) {
        max3 = max2
        max2 = max1
        max1 = nums[i]
      } else if (nums[i] > max2) {
        max3 = max2
        max2 = nums[i]
      } else if (nums[i] > max3) {
        max3 = nums[i]
      }
    }
  }
  if (max3 === -Infinity) {
    return max1
  } else {
    return max3
  }
}
// @lc code=end
