/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 *
 * https://leetcode.com/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (63.28%)
 * Likes:    2136
 * Dislikes: 67
 * Total Accepted:    188.8K
 * Total Submissions: 297.9K
 * Testcase Example:  '"ab-cd"'
 *
 * Given a string s, reverse the string according to the following rules:
 *
 *
 * All the characters that are not English letters remain in the same
 * position.
 * All the English letters (lowercase or uppercase) should be reversed.
 *
 *
 * Return s after reversing it.
 *
 *
 * Example 1:
 * Input: s = "ab-cd"
 * Output: "dc-ba"
 * Example 2:
 * Input: s = "a-bC-dEf-ghIj"
 * Output: "j-Ih-gfE-dCba"
 * Example 3:
 * Input: s = "Test1ng-Leet=code-Q!"
 * Output: "Qedo1ct-eeLg=ntse-T!"
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 100
 * s consists of characters with ASCII values in the range [33, 122].
 * s does not contain '\"' or '\\'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const res = s.split("")
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (!/[a-zA-Z]/.test(s[i])) {
      i++
    } else if (!/[a-zA-Z]/.test(s[j])) {
      j--
    } else {
      let temp = res[i]
      res[i] = res[j]
      res[j] = temp
      i++
      j--
    }
  }
  return res.join("")
}
// @lc code=end
