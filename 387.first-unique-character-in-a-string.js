/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (59.86%)
 * Likes:    8040
 * Dislikes: 259
 * Total Accepted:    1.4M
 * Total Submissions: 2.4M
 * Testcase Example:  '"leetcode"'
 *
 * Given a string s, find the first non-repeating character in it and return
 * its index. If it does not exist, return -1.
 *
 *
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const dict = {}
  for (let i = 0; i < s.length; i++) {
    if (!dict[s[i]]) dict[s[i]] = 0
    dict[s[i]]++
  }
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === 1) return i
  }
  return -1
}
// @lc code=end
