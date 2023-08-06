/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (58.65%)
 * Likes:    4322
 * Dislikes: 445
 * Total Accepted:    841.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '"a"\n"b"'
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 *
 *
 * Constraints:
 *
 *
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote and magazine consist of lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const dict = {}
  for (let i = 0; i < magazine.length; i++) {
    if (!dict[magazine[i]]) dict[magazine[i]] = 0
    dict[magazine[i]]++
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!dict[ransomNote[i]]) return false
    dict[ransomNote[i]]--
  }
  return true
}
// @lc code=end
