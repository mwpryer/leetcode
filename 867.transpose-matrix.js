/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 *
 * https://leetcode.com/problems/transpose-matrix/description/
 *
 * algorithms
 * Easy (65.64%)
 * Likes:    3076
 * Dislikes: 427
 * Total Accepted:    270.1K
 * Total Submissions: 410.1K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a 2D integer array matrix, return the transpose of matrix.
 *
 * The transpose of a matrix is the matrix flipped over its main diagonal,
 * switching the matrix's row and column indices.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6]]
 * Output: [[1,4],[2,5],[3,6]]
 *
 *
 *
 * Constraints:
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 1000
 * 1 <= m * n <= 10^5
 * -10^9 <= matrix[i][j] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const rows = new Array(matrix[0].length).fill().map(() => [])
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      rows[j].push(matrix[i][j])
    }
  }
  return rows
}
// @lc code=end
