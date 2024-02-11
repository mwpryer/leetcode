/*
 * @lc app=leetcode id=1463 lang=javascript
 *
 * [1463] Cherry Pickup II
 *
 * https://leetcode.com/problems/cherry-pickup-ii/description/
 *
 * algorithms
 * Hard (69.48%)
 * Likes:    3623
 * Dislikes: 39
 * Total Accepted:    116.4K
 * Total Submissions: 164.6K
 * Testcase Example:  '[[3,1,1],[2,5,1],[1,5,5],[2,1,1]]'
 *
 * You are given a rows x cols matrix grid representing a field of cherries
 * where grid[i][j] represents the number of cherries that you can collect from
 * the (i, j) cell.
 *
 * You have two robots that can collect cherries for you:
 *
 *
 * Robot #1 is located at the top-left corner (0, 0), and
 * Robot #2 is located at the top-right corner (0, cols - 1).
 *
 *
 * Return the maximum number of cherries collection using both robots by
 * following the rules below:
 *
 *
 * From a cell (i, j), robots can move to cell (i + 1, j - 1), (i + 1, j), or
 * (i + 1, j + 1).
 * When any robot passes through a cell, It picks up all cherries, and the cell
 * becomes an empty cell.
 * When both robots stay in the same cell, only one takes the cherries.
 * Both robots cannot move outside of the grid at any moment.
 * Both robots should reach the bottom row in grid.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
 * Output: 24
 * Explanation: Path of robot #1 and #2 are described in color green and blue
 * respectively.
 * Cherries taken by Robot #1, (3 + 2 + 5 + 2) = 12.
 * Cherries taken by Robot #2, (1 + 5 + 5 + 1) = 12.
 * Total of cherries: 12 + 12 = 24.
 *
 *
 * Example 2:
 *
 *
 * Input: grid =
 * [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]
 * Output: 28
 * Explanation: Path of robot #1 and #2 are described in color green and blue
 * respectively.
 * Cherries taken by Robot #1, (1 + 9 + 5 + 2) = 17.
 * Cherries taken by Robot #2, (1 + 3 + 4 + 3) = 11.
 * Total of cherries: 17 + 11 = 28.
 *
 *
 *
 * Constraints:
 *
 *
 * rows == grid.length
 * cols == grid[i].length
 * 2 <= rows, cols <= 70
 * 0 <= grid[i][j] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const rows = grid.length
  const cols = grid[0].length
  const dp = new Array(rows).fill().map(() => new Array(cols).fill().map(() => new Array(cols).fill(-1)))

  for (let col1 = 0; col1 < cols; col1++) {
    for (let col2 = 0; col2 < cols; col2++) {
      dp[rows - 1][col1][col2] = grid[rows - 1][col1] + (col1 !== col2 ? grid[rows - 1][col2] : 0)
    }
  }

  for (let row = rows - 2; row >= 0; row--) {
    for (let col1 = 0; col1 < cols; col1++) {
      for (let col2 = 0; col2 < cols; col2++) {
        let max = 0
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (col1 + i < 0 || col1 + i >= cols || col2 + j < 0 || col2 + j >= cols) continue
            const next = dp[row + 1][col1 + i][col2 + j]
            max = Math.max(max, next + grid[row][col1] + (col1 !== col2 ? grid[row][col2] : 0))
          }
        }
        dp[row][col1][col2] = max
      }
    }
  }

  return dp[0][0][cols - 1]
}
// @lc code=end
