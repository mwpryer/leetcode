/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 *
 * https://leetcode.com/problems/longest-harmonious-subsequence/description/
 *
 * algorithms
 * Easy (53.82%)
 * Likes:    2015
 * Dislikes: 196
 * Total Accepted:    140.7K
 * Total Submissions: 261.1K
 * Testcase Example:  '[1,3,2,2,5,2,3,7]'
 *
 * We define a harmonious array as an array where the difference between its
 * maximum value and its minimum value is exactly 1.
 *
 * Given an integer array nums, return the length of its longest harmonious
 * subsequence among all its possible subsequences.
 *
 * A subsequence of array is a sequence that can be derived from the array by
 * deleting some or no elements without changing the order of the remaining
 * elements.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,2,2,5,2,3,7]
 * Output: 5
 * Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4]
 * Output: 2
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,1,1,1]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 2 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let counts = {}
  for (let i = 0; i < nums.length; i++) {
    if (!counts[nums[i]]) counts[nums[i]] = 0
    counts[nums[i]]++
  }
  let max = 0
  for (const key of Object.keys(counts)) {
    if (counts[key - 1] + counts[key] > max) max = counts[key - 1] + counts[key]
  }
  return max
}
// @lc code=end
