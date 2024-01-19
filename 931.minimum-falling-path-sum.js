/*
 * @lc app=leetcode id=931 lang=javascript
 *
 * [931] Minimum Falling Path Sum
 *
 * https://leetcode.com/problems/minimum-falling-path-sum/description/
 *
 * algorithms
 * Medium (64.86%)
 * Likes:    5551
 * Dislikes: 132
 * Total Accepted:    310.2K
 * Total Submissions: 477.9K
 * Testcase Example:  '[[2,1,3],[6,5,4],[7,8,9]]'
 *
 * Given an n x n array of integers matrix, return the minimum sum of any
 * falling path through matrix.
 *
 * A falling path starts at any element in the first row and chooses the
 * element in the next row that is either directly below or diagonally
 * left/right. Specifically, the next element from position (row, col) will be
 * (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
 * Output: 13
 * Explanation: There are two falling paths with a minimum sum as shown.
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[-19,57],[-40,-5]]
 * Output: -59
 * Explanation: The falling path with a minimum sum is shown.
 *
 *
 *
 * Constraints:
 *
 *
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 100
 * -100 <= matrix[i][j] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const mins = new Array(matrix.length).fill().map(() => new Array(matrix.length).fill(0))
  for (let i = 0; i < matrix.length; i++) {
    mins[0][i] = matrix[0][i]
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const prevs = [mins[i - 1][j]]
      if (j > 0) prevs.push(mins[i - 1][j - 1])
      if (j < matrix.length - 1) prevs.push(mins[i - 1][j + 1])
      mins[i][j] = matrix[i][j] + Math.min(...prevs)
    }
  }
  return Math.min(...mins[mins.length - 1])
}
// @lc code=end
