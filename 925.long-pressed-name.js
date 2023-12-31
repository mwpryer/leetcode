/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 *
 * https://leetcode.com/problems/long-pressed-name/description/
 *
 * algorithms
 * Easy (32.56%)
 * Likes:    2342
 * Dislikes: 341
 * Total Accepted:    129.4K
 * Total Submissions: 397.5K
 * Testcase Example:  '"alex"\n"aaleex"'
 *
 * Your friend is typing his name into a keyboard. Sometimes, when typing a
 * character c, the key might get long pressed, and the character will be typed
 * 1 or more times.
 *
 * You examine the typed characters of the keyboard. Return True if it is
 * possible that it was your friends name, with some characters (possibly none)
 * being long pressed.
 *
 *
 * Example 1:
 *
 *
 * Input: name = "alex", typed = "aaleex"
 * Output: true
 * Explanation: 'a' and 'e' in 'alex' were long pressed.
 *
 *
 * Example 2:
 *
 *
 * Input: name = "saeed", typed = "ssaaedd"
 * Output: false
 * Explanation: 'e' must have been pressed twice, but it was not in the typed
 * output.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= name.length, typed.length <= 1000
 * name and typed consist of only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i = 0
  let j = 0
  while (i < name.length || j < typed.length) {
    if (name[i] === typed[j]) {
      i++
      j++
    } else {
      if (typed[j] !== typed[j - 1]) return false
      j++
    }
  }
  return true
}
// @lc code=end
