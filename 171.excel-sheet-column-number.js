/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (62.40%)
 * Likes:    4328
 * Dislikes: 340
 * Total Accepted:    612.3K
 * Total Submissions: 980.2K
 * Testcase Example:  '"A"'
 *
 * Given a string columnTitle that represents the column title as appears in an
 * Excel sheet, return its corresponding column number.
 *
 * For example:
 *
 *
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * ...
 *
 *
 *
 * Example 1:
 *
 *
 * Input: columnTitle = "A"
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: columnTitle = "AB"
 * Output: 28
 *
 *
 * Example 3:
 *
 *
 * Input: columnTitle = "ZY"
 * Output: 701
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= columnTitle.length <= 7
 * columnTitle consists only of uppercase English letters.
 * columnTitle is in the range ["A", "FXSHRXW"].
 *
 *
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let res = 0
  for (let i = 0; i < columnTitle.length; i++) {
    const char = columnTitle[columnTitle.length - 1 - i]
    const idx = alphabet.findIndex((el) => el === char)
    res += 26 ** i * (idx + 1)
  }
  return res
}
// @lc code=end
