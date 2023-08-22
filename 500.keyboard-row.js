/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 *
 * https://leetcode.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (69.79%)
 * Likes:    1425
 * Dislikes: 1094
 * Total Accepted:    195.6K
 * Total Submissions: 280.1K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * Given an array of strings words, return the words that can be typed using
 * letters of the alphabet on only one row of American keyboard like the image
 * below.
 *
 * In the American keyboard:
 *
 *
 * the first row consists of the characters "qwertyuiop",
 * the second row consists of the characters "asdfghjkl", and
 * the third row consists of the characters "zxcvbnm".
 *
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["Hello","Alaska","Dad","Peace"]
 * Output: ["Alaska","Dad"]
 *
 *
 * Example 2:
 *
 *
 * Input: words = ["omk"]
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: words = ["adsdf","sfd"]
 * Output: ["adsdf","sfd"]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 20
 * 1 <= words[i].length <= 100
 * words[i] consists of English letters (both lowercase and uppercase).
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const res = []
  const rows = [
    { q: true, w: true, e: true, r: true, t: true, y: true, u: true, i: true, o: true, p: true },
    { a: true, s: true, d: true, f: true, g: true, h: true, j: true, k: true, l: true },
    { z: true, x: true, c: true, v: true, b: true, n: true, m: true },
  ]
  for (const word of words) {
    for (const row of rows) {
      let valid = true
      for (const ch of word) {
        if (!row[ch.toLowerCase()]) valid = false
      }
      if (valid) res.push(word)
    }
  }
  return res
}
// @lc code=end
