/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 *
 * https://leetcode.com/problems/most-common-word/description/
 *
 * algorithms
 * Easy (44.50%)
 * Likes:    1617
 * Dislikes: 2972
 * Total Accepted:    335K
 * Total Submissions: 753.1K
 * Testcase Example:  '"Bob hit a ball, the hit BALL flew far after it was hit."\n["hit"]'
 *
 * Given a string paragraph and a string array of the banned words banned,
 * return the most frequent word that is not banned. It is guaranteed there is
 * at least one word that is not banned, and that the answer is unique.
 *
 * The words in paragraph are case-insensitive and the answer should be
 * returned in lowercase.
 *
 *
 * Example 1:
 *
 *
 * Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was
 * hit.", banned = ["hit"]
 * Output: "ball"
 * Explanation:
 * "hit" occurs 3 times, but it is a banned word.
 * "ball" occurs twice (and no other word does), so it is the most frequent
 * non-banned word in the paragraph.
 * Note that words in the paragraph are not case sensitive,
 * that punctuation is ignored (even if adjacent to words, such as "ball,"),
 * and that "hit" isn't the answer even though it occurs more because it is
 * banned.
 *
 *
 * Example 2:
 *
 *
 * Input: paragraph = "a.", banned = []
 * Output: "a"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= paragraph.length <= 1000
 * paragraph consists of English letters, space ' ', or one of the symbols:
 * "!?',;.".
 * 0 <= banned.length <= 100
 * 1 <= banned[i].length <= 10
 * banned[i] consists of only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let res = ""
  let max = 0
  const counts = {}
  for (const word of paragraph.toLowerCase().split(/\W+/)) {
    if (!banned.includes(word)) {
      if (!counts[word]) counts[word] = 0
      counts[word]++
      if (counts[word] > max) {
        max = counts[word]
        res = word
      }
    }
  }
  return res
}
// @lc code=end
