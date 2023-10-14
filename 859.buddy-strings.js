/*
 * @lc app=leetcode id=859 lang=javascript
 *
 * [859] Buddy Strings
 *
 * https://leetcode.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (32.87%)
 * Likes:    3045
 * Dislikes: 1735
 * Total Accepted:    223.8K
 * Total Submissions: 680.8K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * Given two strings s and goal, return true if you can swap two letters in s
 * so the result is equal to goal, otherwise, return false.
 *
 * Swapping letters is defined as taking two indices i and j (0-indexed) such
 * that i != j and swapping the characters at s[i] and s[j].
 *
 *
 * For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ab", goal = "ba"
 * Output: true
 * Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is
 * equal to goal.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "ab", goal = "ab"
 * Output: false
 * Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b',
 * which results in "ba" != goal.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "aa", goal = "aa"
 * Output: true
 * Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is
 * equal to goal.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, goal.length <= 2 * 10^4
 * s and goal consist of lowercase letters.
 *
 *
 */

// @lc code=start
function swap(s, i, j) {
  let arr = s.split("")
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr.join("")
}
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false
  const idxs = []
  let seen = {}
  let uniques = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      idxs.push(i)
      if (idxs.length > 2) return false
    }
    if (!seen[s[i]]) {
      seen[s[i]] = true
      uniques++
    }
  }
  if (idxs.length === 0) return uniques < s.length
  return idxs.length === 2 && s[idxs[0]] === goal[idxs[1]] && s[idxs[1]] === goal[idxs[0]]
}
// @lc code=end
