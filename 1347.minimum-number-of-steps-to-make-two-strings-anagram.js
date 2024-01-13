/*
 * @lc app=leetcode id=1347 lang=javascript
 *
 * [1347] Minimum Number of Steps to Make Two Strings Anagram
 *
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/
 *
 * algorithms
 * Medium (78.27%)
 * Likes:    2050
 * Dislikes: 84
 * Total Accepted:    156.7K
 * Total Submissions: 198.5K
 * Testcase Example:  '"bab"\n"aba"'
 *
 * You are given two strings of the same length s and t. In one step you can
 * choose any character of t and replace it with another character.
 *
 * Return the minimum number of steps to make t an anagram of s.
 *
 * An Anagram of a string is a string that contains the same characters with a
 * different (or the same) ordering.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "bab", t = "aba"
 * Output: 1
 * Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram
 * of s.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "leetcode", t = "practice"
 * Output: 5
 * Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper
 * characters to make t anagram of s.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "anagram", t = "mangaar"
 * Output: 0
 * Explanation: "anagram" and "mangaar" are anagrams.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 5 * 10^4
 * s.length == t.length
 * s and t consist of lowercase English letters only.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const counts = new Map()
  for (const ch of s) {
    counts.set(ch, (counts.get(ch) || 0) + 1)
  }
  for (const ch of t) {
    counts.set(ch, (counts.get(ch) || 0) - 1)
  }
  let res = 0
  for (const [key, val] of counts) {
    res += Math.abs(val)
  }
  return res / 2
}
// @lc code=end
