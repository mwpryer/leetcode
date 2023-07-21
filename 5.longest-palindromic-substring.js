/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (32.48%)
 * Likes:    26175
 * Dislikes: 1544
 * Total Accepted:    2.5M
 * Total Submissions: 7.7M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
function isPalindrome(i, j, s) {
  for (let k = 0; k < (j - i) / 2; k++) {
    if (s[i + k] !== s[j - k]) return false
  }
  return true
}
var longestPalindrome = function (s) {
  let start = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(i, j, s) && j - i > end - start) {
        start = i
        end = j
      }
    }
  }
  return s.substring(start, end + 1)
}
// @lc code=end
