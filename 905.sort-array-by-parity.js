/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 *
 * https://leetcode.com/problems/sort-array-by-parity/description/
 *
 * algorithms
 * Easy (76.25%)
 * Likes:    5203
 * Dislikes: 142
 * Total Accepted:    742.8K
 * Total Submissions: 974.2K
 * Testcase Example:  '[3,1,2,4]'
 *
 * Given an integer array nums, move all the even integers at the beginning of
 * the array followed by all the odd integers.
 *
 * Return any array that satisfies this condition.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [3,1,2,4]
 * Output: [2,4,3,1]
 * Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be
 * accepted.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0]
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 5000
 * 0 <= nums[i] <= 5000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    if (nums[i] % 2 > nums[j] % 2) [nums[i], nums[j]] = [nums[j], nums[i]]
    if (nums[i] % 2 === 0) i++
    if (nums[j] % 2 === 1) j--
  }
  return nums
}
// @lc code=end
