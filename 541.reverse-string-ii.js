/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 *
 * https://leetcode.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (50.40%)
 * Likes:    1728
 * Dislikes: 3406
 * Total Accepted:    209.3K
 * Total Submissions: 415.3K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * Given a string s and an integer k, reverse the first k characters for every
 * 2k characters counting from the start of the string.
 *
 * If there are fewer than k characters left, reverse all of them. If there are
 * less than 2k but greater than or equal to k characters, then reverse the
 * first k characters and leave the other as original.
 *
 *
 * Example 1:
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 * Example 2:
 * Input: s = "abcd", k = 2
 * Output: "bacd"
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of only lowercase English letters.
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let res = ""
  let temp = ""
  for (let i = 0; i < s.length; i++) {
    if (Math.floor(i / k) % 2 === 0) {
      temp = s[i] + temp
      if (temp.length === k) {
        res += temp
        temp = ""
      }
    } else {
      res += s[i]
    }
  }
  res += temp
  return res
}
// @lc code=end
