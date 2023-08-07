/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 *
 * https://leetcode.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (59.50%)
 * Likes:    4069
 * Dislikes: 435
 * Total Accepted:    526.4K
 * Total Submissions: 887.6K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * You are given two strings s and t.
 *
 * String t is generated by random shuffling string s and then add one more
 * letter at a random position.
 *
 * Return the letter that was added to t.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcd", t = "abcde"
 * Output: "e"
 * Explanation: 'e' is the letter that was added.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "", t = "y"
 * Output: "y"
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 1000
 * t.length == s.length + 1
 * s and t consist of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    sum = sum ^ s.charCodeAt(i) ^ t.charCodeAt(i)
  }
  sum = sum ^ t.charCodeAt(t.length - 1)
  return String.fromCharCode(sum)
}
// @lc code=end
