/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 *
 * https://leetcode.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (43.71%)
 * Likes:    4587
 * Dislikes: 415
 * Total Accepted:    311.6K
 * Total Submissions: 712.8K
 * Testcase Example:  '"abab"'
 *
 * Given a string s, check if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abab"
 * Output: true
 * Explanation: It is the substring "ab" twice.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "aba"
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: s = "abcabcabcabc"
 * Output: true
 * Explanation: It is the substring "abc" four times or the substring "abcabc"
 * twice.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 1) return false
  let substring = ""
  for (let i = 0; i < s.length / 2; i++) {
    substring += s[i]
    let isRepeating = true
    for (let j = 0; j < s.length; j += substring.length) {
      if (substring !== s.slice(j, j + substring.length)) {
        isRepeating = false
        break
      }
    }
    if (isRepeating) return true
  }
  return false
}
// @lc code=end
