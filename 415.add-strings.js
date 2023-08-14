/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (52.07%)
 * Likes:    4640
 * Dislikes: 676
 * Total Accepted:    587.8K
 * Total Submissions: 1.1M
 * Testcase Example:  '"11"\n"123"'
 *
 * Given two non-negative integers, num1 and num2 represented as string, return
 * the sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling
 * large integers (such as BigInteger). You must also not convert the inputs to
 * integers directly.
 *
 *
 * Example 1:
 *
 *
 * Input: num1 = "11", num2 = "123"
 * Output: "134"
 *
 *
 * Example 2:
 *
 *
 * Input: num1 = "456", num2 = "77"
 * Output: "533"
 *
 *
 * Example 3:
 *
 *
 * Input: num1 = "0", num2 = "0"
 * Output: "0"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num1.length, num2.length <= 10^4
 * num1 and num2 consist of only digits.
 * num1 and num2 don't have any leading zeros except for the zero itself.
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = ""
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  while (i >= 0 || j >= 0) {
    let sum = carry + parseInt(num1[i] ?? 0) + parseInt(num2[j] ?? 0)
    if (sum > 9) {
      sum -= 10
      carry = 1
    } else {
      carry = 0
    }
    res = sum + res
    i--
    j--
  }
  if (carry > 0) res = 1 + res
  return res
}
// @lc code=end
