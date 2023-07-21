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
var longestPalindrome = function (s) {
  let start = 0
  let end = 0
  // Dynamic programming table for length of palindrome in range [i, j]
  const dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0))
  for (let i = 0; i < s.length; i++) {
    // Base case, one character forms palindrome
    dp[i][i] = 1
    // Base case, two characters form palindrome if equal
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 2
      start = i
      end = i + 1
    }
  }
  // Handle substrings larger than 2 characters
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i < s.length; i++) {
      if (j < i + 2) continue
      // Check if extended substring is also palindrome
      if (s[i] === s[j] && dp[i + 1][j - 1] > 0) {
        dp[i][j] = j - i + 1
        if (dp[i][j] > end - start) {
          start = i
          end = j
        }
      }
    }
  }
  return s.substring(start, end + 1)
}
// @lc code=end
