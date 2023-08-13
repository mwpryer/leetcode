/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 *
 * https://leetcode.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (53.98%)
 * Likes:    4910
 * Dislikes: 314
 * Total Accepted:    545.5K
 * Total Submissions: 1M
 * Testcase Example:  '"abccccdd"'
 *
 * Given a string s which consists of lowercase or uppercase letters, return
 * the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome
 * here.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose
 * length is 7.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "a"
 * Output: 1
 * Explanation: The longest palindrome that can be built is "a", whose length
 * is 1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 2000
 * s consists of lowercase and/or uppercase English letters only.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let res = 0
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) map[s[i]] = 0
    map[s[i]]++
    if (map[s[i]] % 2 === 0) {
      res += 2
      map[s[i]] = 0
    }
  }
  for (const key in map) {
    if (map[key] === 1) {
      res++
      break
    }
  }
  return res
}
// @lc code=end
