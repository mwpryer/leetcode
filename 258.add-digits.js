/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (65.74%)
 * Likes:    4322
 * Dislikes: 1889
 * Total Accepted:    670.2K
 * Total Submissions: 1M
 * Testcase Example:  '38'
 *
 * Given an integer num, repeatedly add all its digits until the result has
 * only one digit, and return it.
 *
 *
 * Example 1:
 *
 *
 * Input: num = 38
 * Output: 2
 * Explanation: The process is
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2
 * Since 2 has only one digit, return it.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 0
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= num <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you do it without any loop/recursion in O(1) runtime?
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let digits = num.toString().split("")
  let sum = digits.reduce((acc, cur) => acc + parseInt(cur), 0)
  while (sum > 9) {
    digits = sum.toString().split("")
    sum = digits.reduce((acc, cur) => acc + parseInt(cur), 0)
  }
  return sum
}
// @lc code=end
