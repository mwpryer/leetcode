/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 *
 * https://leetcode.com/problems/n-th-tribonacci-number/description/
 *
 * algorithms
 * Easy (63.48%)
 * Likes:    3979
 * Dislikes: 173
 * Total Accepted:    586.3K
 * Total Submissions: 923.7K
 * Testcase Example:  '4'
 *
 * The Tribonacci sequence Tn is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given n, return the value of Tn.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4
 * Output: 4
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 *
 *
 * Example 2:
 *
 *
 * Input: n = 25
 * Output: 1389537
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 37
 * The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31
 * - 1.
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const sequence = [0, 1, 1]
  sequence[0] = 0
  sequence[1] = 1
  sequence[2] = 1
  for (let i = 3; i <= n; i++) {
    sequence[i % 3] = sequence[0] + sequence[1] + sequence[2]
  }
  return sequence[n % 3]
}
// @lc code=end
