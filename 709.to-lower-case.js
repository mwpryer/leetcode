/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 *
 * https://leetcode.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (82.63%)
 * Likes:    1709
 * Dislikes: 2715
 * Total Accepted:    453.2K
 * Total Submissions: 547.8K
 * Testcase Example:  '"Hello"'
 *
 * Given a string s, return the string after replacing every uppercase letter
 * with the same lowercase letter.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "Hello"
 * Output: "hello"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "here"
 * Output: "here"
 *
 *
 * Example 3:
 *
 *
 * Input: s = "LOVELY"
 * Output: "lovely"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 100
 * s consists of printable ASCII characters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let res = ""
  for (const ch of s) {
    let n = ch.charCodeAt(0)
    if (n >= 65 && n <= 90) n += 97 - 65
    res += String.fromCharCode(n)
  }
  return res
}
// @lc code=end
