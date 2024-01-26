/*
 * @lc app=leetcode id=576 lang=javascript
 *
 * [576] Out of Boundary Paths
 *
 * https://leetcode.com/problems/out-of-boundary-paths/description/
 *
 * algorithms
 * Medium (44.23%)
 * Likes:    3276
 * Dislikes: 248
 * Total Accepted:    134K
 * Total Submissions: 297.7K
 * Testcase Example:  '2\n2\n2\n0\n0'
 *
 * There is an m x n grid with a ball. The ball is initially at the position
 * [startRow, startColumn]. You are allowed to move the ball to one of the four
 * adjacent cells in the grid (possibly out of the grid crossing the grid
 * boundary). You can apply at most maxMove moves to the ball.
 *
 * Given the five integers m, n, maxMove, startRow, startColumn, return the
 * number of paths to move the ball out of the grid boundary. Since the answer
 * can be very large, return it modulo 10^9 + 7.
 *
 *
 * Example 1:
 *
 *
 * Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
 * Output: 6
 *
 *
 * Example 2:
 *
 *
 * Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
 * Output: 12
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= m, n <= 50
 * 0 <= maxMove <= 50
 * 0 <= startRow < m
 * 0 <= startColumn < n
 *
 *
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const dp = new Array(2).fill().map(() => new Array(m).fill().map(() => new Array(n).fill(0)))
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  for (let k = 1; k <= maxMove; k++) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let sum = 0
        for (const [dx, dy] of dirs) {
          const x = i + dx
          const y = j + dy
          if (x < 0 || x >= m || y < 0 || y >= n) {
            sum++
          } else {
            sum += dp[(k - 1) % 2][x][y]
          }
        }
        dp[k % 2][i][j] = sum % (10 ** 9 + 7)
      }
    }
  }
  return dp[maxMove % 2][startRow][startColumn]
}
// @lc code=end
