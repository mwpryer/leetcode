/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 *
 * https://leetcode.com/problems/number-complement/description/
 *
 * algorithms
 * Easy (67.48%)
 * Likes:    2539
 * Dislikes: 118
 * Total Accepted:    306.4K
 * Total Submissions: 454.1K
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
 * Given an integer num, return its complement.
 *
 *
 * Example 1:
 *
 *
 * Input: num = 5
 * Output: 2
 * Explanation: The binary representation of 5 is 101 (no leading zero bits),
 * and its complement is 010. So you need to output 2.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 1
 * Output: 0
 * Explanation: The binary representation of 1 is 1 (no leading zero bits), and
 * its complement is 0. So you need to output 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num < 2^31
 *
 *
 *
 * Note: This question is the same as 1009:
 * https://leetcode.com/problems/complement-of-base-10-integer/
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let complement = 0
  let pow = 0
  while (num > 0) {
    // XOR least-significant bit with 1 to flip it
    complement += ((num & 1) ^ 1) << pow
    pow++
    // Logical right shift
    num >>= 1
  }
  return complement
}
// @lc code=end
