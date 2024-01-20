/*
 * @lc app=leetcode id=907 lang=javascript
 *
 * [907] Sum of Subarray Minimums
 *
 * https://leetcode.com/problems/sum-of-subarray-minimums/description/
 *
 * algorithms
 * Medium (35.17%)
 * Likes:    7273
 * Dislikes: 500
 * Total Accepted:    190.5K
 * Total Submissions: 533.1K
 * Testcase Example:  '[3,1,2,4]'
 *
 * Given an array of integers arr, find the sum of min(b), where b ranges over
 * every (contiguous) subarray of arr. Since the answer may be large, return
 * the answer modulo 10^9 + 7.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [3,1,2,4]
 * Output: 17
 * Explanation:
 * Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4],
 * [3,1,2,4].
 * Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
 * Sum is 17.
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [11,81,94,43,3]
 * Output: 444
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 3 * 10^4
 * 1 <= arr[i] <= 3 * 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let sum = 0
  arr.push(0)
  const stack = [-1]
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] < arr[stack[stack.length - 1]]) {
      mid = stack.pop()
      const left = mid - stack[stack.length - 1]
      const right = i - mid
      sum += arr[mid] * left * right
    }
    stack.push(i)
  }
  return sum % (10 ** 9 + 7)
}
// @lc code=end
