/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 *
 * https://leetcode.com/problems/complement-of-base-10-integer/description/
 *
 * algorithms
 * Easy (60.81%)
 * Likes:    2294
 * Dislikes: 108
 * Total Accepted:    214.3K
 * Total Submissions: 352.5K
 * Testcase Example:  '5'
 *
 * The complement of an integer is the integer you get when you flip all the
 * 0's to 1's and all the 1's to 0's in its binary representation.
 *
 *
 * For example, The integer 5 is "101" in binary and its complement is "010"
 * which is the integer 2.
 *
 *
 * Given an integer n, return its complement.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 5
 * Output: 2
 * Explanation: 5 is "101" in binary, with complement "010" in binary, which is
 * 2 in base-10.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 7
 * Output: 0
 * Explanation: 7 is "111" in binary, with complement "000" in binary, which is
 * 0 in base-10.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 10
 * Output: 5
 * Explanation: 10 is "1010" in binary, with complement "0101" in binary, which
 * is 5 in base-10.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n < 10^9
 *
 *
 *
 * Note: This question is the same as 476:
 * https://leetcode.com/problems/number-complement/
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  if (n === 0) return 1
  let complement = 0
  let pow = 0
  while (n > 0) {
    // XOR least-significant bit with 1 to flip it
    complement += ((n & 1) ^ 1) << pow
    pow++
    // Logical right shift
    n >>= 1
  }
  return complement
}
// @lc code=end
