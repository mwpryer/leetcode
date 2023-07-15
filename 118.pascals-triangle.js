/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (71.47%)
 * Likes:    10528
 * Dislikes: 339
 * Total Accepted:    1.3M
 * Total Submissions: 1.8M
 * Testcase Example:  '5'
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= numRows <= 30
 *
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = []
  for (let i = 0; i < numRows; i++) {
    const curr = [1]
    for (let j = 0; j < i; j++) {
      curr.push(1)
      if (res[i - 1][j - 1] && res[i - 1][j]) {
        curr[j] = res[i - 1][j - 1] + res[i - 1][j]
      }
    }
    res.push(curr)
  }
  return res
}
// @lc code=end
