/*
 * @lc app=leetcode id=2485 lang=javascript
 *
 * [2485] Find the Pivot Integer
 *
 * https://leetcode.com/problems/find-the-pivot-integer/description/
 *
 * algorithms
 * Easy (79.98%)
 * Likes:    777
 * Dislikes: 19
 * Total Accepted:    89.8K
 * Total Submissions: 109K
 * Testcase Example:  '8'
 *
 * Given a positive integer n, find the pivot integer x such that:
 *
 *
 * The sum of all elements between 1 and x inclusively equals the sum of all
 * elements between x and n inclusively.
 *
 *
 * Return the pivot integer x. If no such integer exists, return -1. It is
 * guaranteed that there will be at most one pivot index for the given
 * input.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 8
 * Output: 6
 * Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8
 * = 21.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: 1
 * Explanation: 1 is the pivot integer since: 1 = 1.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 4
 * Output: -1
 * Explanation: It can be proved that no such integer exist.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  const total = (n * (n + 1)) / 2
  for (let x = 1; x <= n; x++) {
    const left = (x * (x + 1)) / 2
    const right = total - ((x - 1) * x) / 2
    if (left === right) return x
  }
  return -1
}
// @lc code=end
