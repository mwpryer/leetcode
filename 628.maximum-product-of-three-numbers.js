/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 *
 * https://leetcode.com/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (45.48%)
 * Likes:    3944
 * Dislikes: 638
 * Total Accepted:    280.7K
 * Total Submissions: 618.3K
 * Testcase Example:  '[1,2,3]'
 *
 * Given an integer array nums, find three numbers whose product is maximum and
 * return the maximum product.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: 6
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: 24
 * Example 3:
 * Input: nums = [-1,-2,-3]
 * Output: -6
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 10^4
 * -1000 <= nums[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums = nums.sort((a, b) => b - a)
  return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2])
}
// @lc code=end
