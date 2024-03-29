/*
 * @lc app=leetcode id=1704 lang=javascript
 *
 * [1704] Determine if String Halves Are Alike
 *
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/description/
 *
 * algorithms
 * Easy (77.41%)
 * Likes:    1809
 * Dislikes: 85
 * Total Accepted:    211K
 * Total Submissions: 272.3K
 * Testcase Example:  '"book"'
 *
 * You are given a string s of even length. Split this string into two halves
 * of equal lengths, and let a be the first half and b be the second half.
 *
 * Two strings are alike if they have the same number of vowels ('a', 'e', 'i',
 * 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and
 * lowercase letters.
 *
 * Return true if a and b are alike. Otherwise, return false.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "book"
 * Output: true
 * Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel.
 * Therefore, they are alike.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "textbook"
 * Output: false
 * Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2.
 * Therefore, they are not alike.
 * Notice that the vowel o is counted twice.
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= s.length <= 1000
 * s.length is even.
 * s consists of uppercase and lowercase letters.
 *
 *
 */

// @lc code=start
const vowels = { a: true, e: true, i: true, o: true, u: true }
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let mid = s.length / 2
  let count = 0
  for (let i = 0; i < mid; i++) {
    if (vowels[s[i].toLowerCase()]) count++
    if (vowels[s[mid + i].toLowerCase()]) count--
  }
  return count === 0
}
// @lc code=end
