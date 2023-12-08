/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 *
 * https://leetcode.com/problems/add-to-array-form-of-integer/description/
 *
 * algorithms
 * Easy (46.01%)
 * Likes:    3330
 * Dislikes: 269
 * Total Accepted:    244.1K
 * Total Submissions: 531.2K
 * Testcase Example:  '[1,2,0,0]\n34'
 *
 * The array-form of an integer num is an array representing its digits in left
 * to right order.
 *
 *
 * For example, for num = 1321, the array form is [1,3,2,1].
 *
 *
 * Given num, the array-form of an integer, and an integer k, return the
 * array-form of the integer num + k.
 *
 *
 * Example 1:
 *
 *
 * Input: num = [1,2,0,0], k = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 *
 *
 * Example 2:
 *
 *
 * Input: num = [2,7,4], k = 181
 * Output: [4,5,5]
 * Explanation: 274 + 181 = 455
 *
 *
 * Example 3:
 *
 *
 * Input: num = [2,1,5], k = 806
 * Output: [1,0,2,1]
 * Explanation: 215 + 806 = 1021
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num.length <= 10^4
 * 0 <= num[i] <= 9
 * num does not contain any leading zeros except for the zero itself.
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let i = num.length - 1
  let carry = 0
  while (i >= 0) {
    const sum = num[i] + (k % 10) + carry
    num[i] = sum % 10
    carry = Math.floor(sum / 10)
    k = Math.floor(k / 10)
    i--
  }
  while (k > 0) {
    const sum = (k % 10) + carry
    num.unshift(sum % 10)
    carry = Math.floor(sum / 10)
    k = Math.floor(k / 10)
  }
  if (carry > 0) num.unshift(carry)
  return num
}
// @lc code=end
