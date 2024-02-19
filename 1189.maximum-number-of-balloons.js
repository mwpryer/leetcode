/*
 * @lc app=leetcode id=1189 lang=javascript
 *
 * [1189] Maximum Number of Balloons
 *
 * https://leetcode.com/problems/maximum-number-of-balloons/description/
 *
 * algorithms
 * Easy (59.99%)
 * Likes:    1658
 * Dislikes: 96
 * Total Accepted:    188.6K
 * Total Submissions: 314.6K
 * Testcase Example:  '"nlaebolko"'
 *
 * Given a string text, you want to use the characters of text to form as many
 * instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once. Return the maximum number
 * of instances that can be formed.
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: text = "nlaebolko"
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 *
 * Example 3:
 *
 *
 * Input: text = "leetcode"
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= text.length <= 10^4
 * text consists of lower case English letters only.
 *
 *
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let counts = new Map()
  for (const ch of text) {
    counts.set(ch, (counts.get(ch) || 0) + 1)
  }

  const balloon = { b: 1, a: 1, l: 2, o: 2, n: 1 }
  let min = text.length
  for (const [ch, count] of Object.entries(balloon)) {
    if (!counts.has(ch)) return 0
    min = Math.min(min, Math.floor(counts.get(ch) / count))
  }
  return min
}
// @lc code=end
