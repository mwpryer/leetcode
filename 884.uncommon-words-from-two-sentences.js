/*
 * @lc app=leetcode id=884 lang=javascript
 *
 * [884] Uncommon Words from Two Sentences
 *
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/description/
 *
 * algorithms
 * Easy (66.61%)
 * Likes:    1283
 * Dislikes: 164
 * Total Accepted:    127.5K
 * Total Submissions: 191.2K
 * Testcase Example:  '"this apple is sweet"\n"this apple is sour"'
 *
 * A sentence is a string of single-space separated words where each word
 * consists only of lowercase letters.
 *
 * A word is uncommon if it appears exactly once in one of the sentences, and
 * does not appear in the other sentence.
 *
 * Given two sentences s1 and s2, return a list of all the uncommon words. You
 * may return the answer in any order.
 *
 *
 * Example 1:
 * Input: s1 = "this apple is sweet", s2 = "this apple is sour"
 * Output: ["sweet","sour"]
 * Example 2:
 * Input: s1 = "apple apple", s2 = "banana"
 * Output: ["banana"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= s1.length, s2.length <= 200
 * s1 and s2 consist of lowercase English letters and spaces.
 * s1 and s2 do not have leading or trailing spaces.
 * All the words in s1 and s2 are separated by a single space.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const res = []
  const words1 = s1.split(" ")
  const words2 = s2.split(" ")
  const map = {}
  for (let i = 0; i < words1.length; i++) {
    if (!map[words1[i]]) map[words1[i]] = 0
    map[words1[i]]++
  }
  for (let i = 0; i < words2.length; i++) {
    if (!map[words2[i]]) map[words2[i]] = 0
    map[words2[i]]++
  }
  for (const key in map) {
    if (map[key] === 1) res.push(key)
  }
  return res
}
// @lc code=end
