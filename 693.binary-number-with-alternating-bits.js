/*
 * @lc app=leetcode id=693 lang=javascript
 *
 * [693] Binary Number with Alternating Bits
 *
 * https://leetcode.com/problems/binary-number-with-alternating-bits/description/
 *
 * algorithms
 * Easy (61.76%)
 * Likes:    1274
 * Dislikes: 110
 * Total Accepted:    120.8K
 * Total Submissions: 195.2K
 * Testcase Example:  '5'
 *
 * Given a positive integer, check whether it has alternating bits: namely, if
 * two adjacent bits will always have different values.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 5
 * Output: true
 * Explanation: The binary representation of 5 is: 101
 *
 *
 * Example 2:
 *
 *
 * Input: n = 7
 * Output: false
 * Explanation: The binary representation of 7 is: 111.
 *
 * Example 3:
 *
 *
 * Input: n = 11
 * Output: false
 * Explanation: The binary representation of 11 is: 1011.
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  const ones = n ^ (n >> 1)
  return (ones & (ones + 1)) === 0
}
// @lc code=end
