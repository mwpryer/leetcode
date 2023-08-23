/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 *
 * https://leetcode.com/problems/base-7/description/
 *
 * algorithms
 * Easy (48.96%)
 * Likes:    725
 * Dislikes: 214
 * Total Accepted:    113.8K
 * Total Submissions: 232.2K
 * Testcase Example:  '100'
 *
 * Given an integer num, return a string of its base 7 representation.
 *
 *
 * Example 1:
 * Input: num = 100
 * Output: "202"
 * Example 2:
 * Input: num = -7
 * Output: "-10"
 *
 *
 * Constraints:
 *
 *
 * -10^7 <= num <= 10^7
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return "0"
  let res = ""
  let abs = Math.abs(num)
  while (abs > 0) {
    res = (abs % 7) + res
    abs = Math.floor(abs / 7)
  }
  return num < 0 ? "-" + res : res
}
// @lc code=end
