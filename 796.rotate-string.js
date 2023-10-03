/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 *
 * https://leetcode.com/problems/rotate-string/description/
 *
 * algorithms
 * Easy (56.35%)
 * Likes:    3257
 * Dislikes: 124
 * Total Accepted:    246.3K
 * Total Submissions: 436.1K
 * Testcase Example:  '"abcde"\n"cdeab"'
 *
 * Given two strings s and goal, return true if and only if s can become goal
 * after some number of shifts on s.
 *
 * A shift on s consists of moving the leftmost character of s to the rightmost
 * position.
 *
 *
 * For example, if s = "abcde", then it will be "bcdea" after one shift.
 *
 *
 *
 * Example 1:
 * Input: s = "abcde", goal = "cdeab"
 * Output: true
 * Example 2:
 * Input: s = "abcde", goal = "abced"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, goal.length <= 100
 * s and goal consist of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false
  if (s === goal) return true
  for (let i = 0; i < s.length; i++) {
    s = s.slice(1) + s[0]
    if (s === goal) return true
  }
  return false
}
// @lc code=end
