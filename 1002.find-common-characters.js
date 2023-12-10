/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 *
 * https://leetcode.com/problems/find-common-characters/description/
 *
 * algorithms
 * Easy (68.77%)
 * Likes:    3396
 * Dislikes: 278
 * Total Accepted:    199K
 * Total Submissions: 289.4K
 * Testcase Example:  '["bella","label","roller"]'
 *
 * Given a string array words, return an array of all characters that show up
 * in all strings within the words (including duplicates). You may return the
 * answer in any order.
 *
 *
 * Example 1:
 * Input: words = ["bella","label","roller"]
 * Output: ["e","l","l"]
 * Example 2:
 * Input: words = ["cool","lock","cook"]
 * Output: ["c","o"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] consists of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const res = []
  for (let i = 0; i < words[0].length; i++) {
    const ch = words[0][i]
    let common = true
    for (let j = 1; j < words.length; j++) {
      const idx = words[j].indexOf(ch)
      if (idx == -1) {
        common = false
      } else {
        words[j] = words[j].slice(0, idx) + words[j].slice(idx + 1)
      }
    }
    if (common) res.push(ch)
  }
  return res
}
// @lc code=end
