/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 *
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
 *
 * algorithms
 * Easy (47.00%)
 * Likes:    1221
 * Dislikes: 202
 * Total Accepted:    126.4K
 * Total Submissions: 267.8K
 * Testcase Example:  '26'
 *
 * Given an integer num, return a string representing its hexadecimal
 * representation. For negative integers, two’s complement method is used.
 *
 * All the letters in the answer string should be lowercase characters, and
 * there should not be any leading zeros in the answer except for the zero
 * itself.
 *
 * Note: You are not allowed to use any built-in library method to directly
 * solve this problem.
 *
 *
 * Example 1:
 * Input: num = 26
 * Output: "1a"
 * Example 2:
 * Input: num = -1
 * Output: "ffffffff"
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= num <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const vals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
  if (num == 0) return "0"
  if (num < 0) num += Math.pow(2, 32)
  let res = ""
  while (num > 0) {
    const digit = num % 16
    res = vals[digit] + res
    num = Math.floor(num / 16)
  }
  return res
}
// @lc code=end
