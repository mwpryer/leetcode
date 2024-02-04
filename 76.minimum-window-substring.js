/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 *
 * https://leetcode.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (41.72%)
 * Likes:    17049
 * Dislikes: 693
 * Total Accepted:    1.2M
 * Total Submissions: 2.9M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * Given two strings s and t of lengths m and n respectively, return the
 * minimum window substring of s such that every character in t (including
 * duplicates) is included in the window. If there is no such substring, return
 * the empty string "".
 *
 * The testcases will be generated such that the answer is unique.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C'
 * from string t.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 *
 *
 *
 * Constraints:
 *
 *
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 10^5
 * s and t consist of uppercase and lowercase English letters.
 *
 *
 *
 * Follow up: Could you find an algorithm that runs in O(m + n) time?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let res = [-1, -1]

  const counts = new Map()
  let need = 0
  for (const ch of t) {
    if (!counts.has(ch)) {
      counts.set(ch, 0)
      need++
    }
    counts.set(ch, counts.get(ch) + 1)
  }

  const window = new Map()
  let have = 0
  let l = 0
  for (let r = 0; r < s.length; r++) {
    // Expand window right
    window.set(s[r], (window.get(s[r]) || 0) + 1)
    if (window.get(s[r]) === counts.get(s[r])) have++

    while (have === need) {
      // Update result
      if (res[0] === -1 || r - l + 1 < res[1] - res[0] + 1) res = [l, r]

      // Shrink window left
      window.set(s[l], window.get(s[l]) - 1)
      if (window.get(s[l]) < counts.get(s[l])) have--
      l += 1
    }
  }

  if (res[0] === -1) return ""
  return s.slice(res[0], res[1] + 1)
}
// @lc code=end
