/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 *
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
 *
 * algorithms
 * Easy (85.82%)
 * Likes:    2682
 * Dislikes: 922
 * Total Accepted:    288.8K
 * Total Submissions: 336.4K
 * Testcase Example:  '"RLRRLLRLRL"'
 *
 * Balanced strings are those that have an equal quantity of 'L' and 'R'
 * characters.
 *
 * Given a balanced string s, split it into some number of substrings such
 * that:
 *
 *
 * Each substring is balanced.
 *
 *
 * Return the maximum number of balanced strings you can obtain.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "RLRRLLRLRL"
 * Output: 4
 * Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring
 * contains same number of 'L' and 'R'.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "RLRRRLLRLL"
 * Output: 2
 * Explanation: s can be split into "RL", "RRRLLRLL", each substring contains
 * same number of 'L' and 'R'.
 * Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the
 * 2^nd and 5^th substrings are not balanced.
 *
 * Example 3:
 *
 *
 * Input: s = "LLLLRRRR"
 * Output: 1
 * Explanation: s can be split into "LLLLRRRR".
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= s.length <= 1000
 * s[i] is either 'L' or 'R'.
 * s is a balanced string.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let rs = 0
  let ls = 0
  let count = 0
  for (let ch of s) {
    if (ch === "R") rs++
    if (ch === "L") ls++
    if (rs === ls) count++
  }
  return count
}
// @lc code=end
