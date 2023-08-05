/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (50.54%)
 * Likes:    3768
 * Dislikes: 2564
 * Total Accepted:    568.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '"hello"'
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both
 * lower and upper cases, more than once.
 *
 *
 * Example 1:
 * Input: s = "hello"
 * Output: "holle"
 * Example 2:
 * Input: s = "leetcode"
 * Output: "leotcede"
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s consist of printable ASCII characters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let left = 0
  let right = s.length - 1
  s = s.split("")
  while (left < right) {
    if (!vowels.includes(s[left])) left++
    if (!vowels.includes(s[right])) right--
    if (vowels.includes(s[left]) && vowels.includes(s[right])) {
      const temp = s[left]
      s[left] = s[right]
      s[right] = temp
      left++
      right--
    }
  }
  return s.join("")
}
// @lc code=end
