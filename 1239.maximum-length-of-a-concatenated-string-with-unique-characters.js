/*
 * @lc app=leetcode id=1239 lang=javascript
 *
 * [1239] Maximum Length of a Concatenated String with Unique Characters
 *
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/
 *
 * algorithms
 * Medium (52.18%)
 * Likes:    3756
 * Dislikes: 265
 * Total Accepted:    201.7K
 * Total Submissions: 383.7K
 * Testcase Example:  '["un","iq","ue"]'
 *
 * You are given an array of strings arr. A string s is formed by the
 * concatenation of a subsequence of arr that has unique characters.
 *
 * Return the maximum possible length of s.
 *
 * A subsequence is an array that can be derived from another array by deleting
 * some or no elements without changing the order of the remaining elements.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = ["un","iq","ue"]
 * Output: 4
 * Explanation: All the valid concatenations are:
 * - ""
 * - "un"
 * - "iq"
 * - "ue"
 * - "uniq" ("un" + "iq")
 * - "ique" ("iq" + "ue")
 * Maximum length is 4.
 *
 *
 * Example 2:
 *
 *
 * Input: arr = ["cha","r","act","ers"]
 * Output: 6
 * Explanation: Possible longest valid concatenations are "chaers" ("cha" +
 * "ers") and "acters" ("act" + "ers").
 *
 *
 * Example 3:
 *
 *
 * Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
 * Output: 26
 * Explanation: The only string in arr has all 26 characters.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 16
 * 1 <= arr[i].length <= 26
 * arr[i] contains only lowercase English letters.
 *
 *
 */

// @lc code=start
function isOverlap(chars, str) {
  const seen = new Set()
  for (const ch of str) {
    if (chars.has(ch) || seen.has(ch)) return true
    seen.add(ch)
  }
  return false
}
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  const chars = new Set()
  function backtrack(i) {
    if (i === arr.length) return chars.size
    let length = 0
    if (!isOverlap(chars, arr[i])) {
      for (const c of arr[i]) {
        chars.add(c)
      }
      length = backtrack(i + 1)
      for (const c of arr[i]) {
        chars.delete(c)
      }
    }
    return Math.max(length, backtrack(i + 1))
  }
  return backtrack(0)
}
// @lc code=end
