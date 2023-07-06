/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.47%)
 * Likes:    8227
 * Dislikes: 813
 * Total Accepted:    1.2M
 * Total Submissions: 2.2M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 *
 * Constraints:
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 *
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length < b.length) {
    a = "0".repeat(b.length - a.length) + a
  } else {
    b = "0".repeat(a.length - b.length) + b
  }

  let str = ""
  let carry = 0
  for (let i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry
    str = (sum % 2) + str
    if (sum >= 2) {
      carry = 1
    } else {
      carry = 0
    }
  }
  if (carry) str = "1" + str
  return str
}
// @lc code=end
