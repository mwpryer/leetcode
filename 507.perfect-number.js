/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 *
 * https://leetcode.com/problems/perfect-number/description/
 *
 * algorithms
 * Easy (37.65%)
 * Likes:    941
 * Dislikes: 1168
 * Total Accepted:    147.5K
 * Total Submissions: 389.6K
 * Testcase Example:  '28'
 *
 * A perfect number is a positive integer that is equal to the sum of its
 * positive divisors, excluding the number itself. A divisor of an integer x is
 * an integer that can divide x evenly.
 *
 * Given an integer n, return true if n is a perfect number, otherwise return
 * false.
 *
 *
 * Example 1:
 *
 *
 * Input: num = 28
 * Output: true
 * Explanation: 28 = 1 + 2 + 4 + 7 + 14
 * 1, 2, 4, 7, and 14 are all divisors of 28.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 7
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num <= 10^8
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let sum = 0
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i
  }
  return sum === num
}
// @lc code=end
