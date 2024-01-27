/*
 * @lc app=leetcode id=629 lang=javascript
 *
 * [629] K Inverse Pairs Array
 *
 * https://leetcode.com/problems/k-inverse-pairs-array/description/
 *
 * algorithms
 * Hard (42.58%)
 * Likes:    2114
 * Dislikes: 242
 * Total Accepted:    69.8K
 * Total Submissions: 156.8K
 * Testcase Example:  '3\n0'
 *
 * For an integer array nums, an inverse pair is a pair of integers [i, j]
 * where 0 <= i < j < nums.length and nums[i] > nums[j].
 *
 * Given two integers n and k, return the number of different arrays consist of
 * numbers from 1 to n such that there are exactly k inverse pairs. Since the
 * answer can be huge, return it modulo 10^9 + 7.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3, k = 0
 * Output: 1
 * Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3
 * has exactly 0 inverse pairs.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3, k = 1
 * Output: 2
 * Explanation: The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 1000
 * 0 <= k <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  const dp = new Array(n + 1).fill().map(() => new Array(k + 1).fill(0))
  for (let i = 1; i <= n; i++) {
    dp[i][0] = 1
    for (let j = 1; j <= k; j++) {
      let sum = 0
      for (let k = 0; k <= Math.min(j, i - 1); k++) {
        sum += dp[i - 1][j - k]
      }
      dp[i][j] = sum % (10 ** 9 + 7)
    }
  }
  return dp[n][k]
}
// @lc code=end
