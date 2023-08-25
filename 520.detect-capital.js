/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 *
 * https://leetcode.com/problems/detect-capital/description/
 *
 * algorithms
 * Easy (56.84%)
 * Likes:    3278
 * Dislikes: 449
 * Total Accepted:    400.3K
 * Total Submissions: 704.9K
 * Testcase Example:  '"USA"'
 *
 * We define the usage of capitals in a word to be right when one of the
 * following cases holds:
 *
 *
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 *
 *
 * Given a string word, return true if the usage of capitals in it is right.
 *
 *
 * Example 1:
 * Input: word = "USA"
 * Output: true
 * Example 2:
 * Input: word = "FlaG"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= word.length <= 100
 * word consists of lowercase and uppercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return word === word.toUpperCase() || word.substring(1) === word.substring(1).toLowerCase()
}
// @lc code=end
