/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 *
 * https://leetcode.com/problems/maximum-average-subarray-i/description/
 *
 * algorithms
 * Easy (43.36%)
 * Likes:    2910
 * Dislikes: 238
 * Total Accepted:    277.4K
 * Total Submissions: 642.3K
 * Testcase Example:  '[1,12,-5,-6,50,3]\n4'
 *
 * You are given an integer array nums consisting of n elements, and an integer
 * k.
 *
 * Find a contiguous subarray whose length is equal to k that has the maximum
 * average value and return this value. Any answer with a calculation error
 * less than 10^-5 will be accepted.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,12,-5,-6,50,3], k = 4
 * Output: 12.75000
 * Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [5], k = 1
 * Output: 5.00000
 *
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= k <= n <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let max = sum
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]
    max = Math.max(max, sum)
  }
  return max / k
}
// @lc code=end
