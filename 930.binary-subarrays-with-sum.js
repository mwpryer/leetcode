/*
 * @lc app=leetcode id=930 lang=javascript
 *
 * [930] Binary Subarrays With Sum
 *
 * https://leetcode.com/problems/binary-subarrays-with-sum/description/
 *
 * algorithms
 * Medium (58.94%)
 * Likes:    3178
 * Dislikes: 89
 * Total Accepted:    137.6K
 * Total Submissions: 233.6K
 * Testcase Example:  '[1,0,1,0,1]\n2'
 *
 * Given a binary array nums and an integer goal, return the number of
 * non-empty subarrays with a sum goal.
 *
 * A subarray is a contiguous part of the array.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,0,1,0,1], goal = 2
 * Output: 4
 * Explanation: The 4 subarrays are bolded and underlined below:
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,0,0,0,0], goal = 0
 * Output: 15
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 3 * 10^4
 * nums[i] is either 0 or 1.
 * 0 <= goal <= nums.length
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let count = 0
  let sum = 0
  const prefixSums = new Map()
  prefixSums.set(0, 1)

  for (const num of nums) {
    sum += num
    if (prefixSums.has(sum - goal)) count += prefixSums.get(sum - goal)
    prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1)
  }

  return count
}
// @lc code=end
