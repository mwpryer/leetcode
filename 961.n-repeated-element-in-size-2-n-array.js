/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 *
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/
 *
 * algorithms
 * Easy (76.32%)
 * Likes:    1298
 * Dislikes: 325
 * Total Accepted:    221.6K
 * Total Submissions: 290.3K
 * Testcase Example:  '[1,2,3,3]'
 *
 * You are given an integer array nums with the following properties:
 *
 *
 * nums.length == 2 * n.
 * nums contains n + 1 unique elements.
 * Exactly one element of nums is repeated n times.
 *
 *
 * Return the element that is repeated n times.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3,3]
 * Output: 3
 * Example 2:
 * Input: nums = [2,1,2,5,3,2]
 * Output: 2
 * Example 3:
 * Input: nums = [5,1,5,2,5,3,5,4]
 * Output: 5
 *
 *
 * Constraints:
 *
 *
 * 2 <= n <= 5000
 * nums.length == 2 * n
 * 0 <= nums[i] <= 10^4
 * nums contains n + 1 unique elements and one of them is repeated exactly n
 * times.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const seen = {}
  for (const num of nums) {
    if (seen[num]) {
      return num
    } else {
      seen[num] = true
    }
  }
}
// @lc code=end
