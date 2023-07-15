/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (61.21%)
 * Likes:    3903
 * Dislikes: 305
 * Total Accepted:    696.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '3'
 *
 * Given an integer rowIndex, return the rowIndex^th (0-indexed) row of the
 * Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 * Example 2:
 * Input: rowIndex = 0
 * Output: [1]
 * Example 3:
 * Input: rowIndex = 1
 * Output: [1,1]
 *
 *
 * Constraints:
 *
 *
 * 0 <= rowIndex <= 33
 *
 *
 *
 * Follow up: Could you optimize your algorithm to use only O(rowIndex) extra
 * space?
 *
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex == 0) return [1]
  const prev = getRow(rowIndex - 1)
  const res = []
  for (let i = 0; i <= rowIndex; i++) {
    res.push(1)
    if (prev[i - 1] && prev[i]) {
      res[i] = prev[i - 1] + prev[i]
    }
  }
  return res
}
// @lc code=end
