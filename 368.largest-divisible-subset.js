/*
 * @lc app=leetcode id=368 lang=javascript
 *
 * [368] Largest Divisible Subset
 *
 * https://leetcode.com/problems/largest-divisible-subset/description/
 *
 * algorithms
 * Medium (42.35%)
 * Likes:    5365
 * Dislikes: 235
 * Total Accepted:    229.2K
 * Total Submissions: 530.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct positive integers nums, return the largest subset
 * answer such that every pair (answer[i], answer[j]) of elements in this
 * subset satisfies:
 *
 *
 * answer[i] % answer[j] == 0, or
 * answer[j] % answer[i] == 0
 *
 *
 * If there are multiple solutions, return any of them.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3]
 * Output: [1,2]
 * Explanation: [1,3] is also accepted.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,4,8]
 * Output: [1,2,4,8]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 1000
 * 1 <= nums[i] <= 2 * 10^9
 * All the integers in nums are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b)
  const subsets = nums.map((num) => [num])
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && subsets[j].length + 1 > subsets[i].length) {
        subsets[i] = [...subsets[j], nums[i]]
      }
    }
  }
  return subsets.reduce((acc, cur) => (cur.length > acc.length ? cur : acc), [])
}
// @lc code=end
