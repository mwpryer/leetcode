/*
 * @lc app=leetcode id=1078 lang=javascript
 *
 * [1078] Occurrences After Bigram
 *
 * https://leetcode.com/problems/occurrences-after-bigram/description/
 *
 * algorithms
 * Easy (63.43%)
 * Likes:    468
 * Dislikes: 351
 * Total Accepted:    68.2K
 * Total Submissions: 107.4K
 * Testcase Example:  '"alice is a good girl she is a good student"\n"a"\n"good"'
 *
 * Given two strings first and second, consider occurrences in some text of the
 * form "first second third", where second comes immediately after first, and
 * third comes immediately after second.
 *
 * Return an array of all the words third for each occurrence of "first second
 * third".
 *
 *
 * Example 1:
 * Input: text = "alice is a good girl she is a good student", first = "a",
 * second = "good"
 * Output: ["girl","student"]
 * Example 2:
 * Input: text = "we will we will rock you", first = "we", second = "will"
 * Output: ["we","rock"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= text.length <= 1000
 * text consists of lowercase English letters and spaces.
 * All the words in text a separated by a single space.
 * 1 <= first.length, second.length <= 10
 * first and second consist of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const words = text.split(" ")
  const res = []
  for (let i = 0; i < words.length - 2; i++) {
    if (words[i] === first && words[i + 1] === second) {
      res.push(words[i + 2])
    }
  }
  return res
}
// @lc code=end
