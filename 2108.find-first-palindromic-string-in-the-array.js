/*
 * @lc app=leetcode id=2108 lang=javascript
 *
 * [2108] Find First Palindromic String in the Array
 *
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
 *
 * algorithms
 * Easy (79.19%)
 * Likes:    1280
 * Dislikes: 43
 * Total Accepted:    177.9K
 * Total Submissions: 215.4K
 * Testcase Example:  '["abc","car","ada","racecar","cool"]'
 *
 * Given an array of strings words, return the first palindromic string in the
 * array. If there is no such string, return an empty string "".
 *
 * A string is palindromic if it reads the same forward and backward.
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["abc","car","ada","racecar","cool"]
 * Output: "ada"
 * Explanation: The first string that is palindromic is "ada".
 * Note that "racecar" is also palindromic, but it is not the first.
 *
 *
 * Example 2:
 *
 *
 * Input: words = ["notapalindrome","racecar"]
 * Output: "racecar"
 * Explanation: The first and only string that is palindromic is "racecar".
 *
 *
 * Example 3:
 *
 *
 * Input: words = ["def","ghi"]
 * Output: ""
 * Explanation: There are no palindromic strings, so the empty string is
 * returned.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] consists only of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  function isPalindrome(word) {
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - 1 - i]) return false
    }
    return true
  }
  for (const word of words) {
    if (isPalindrome(word)) return word
  }
  return ""
}
// @lc code=end
