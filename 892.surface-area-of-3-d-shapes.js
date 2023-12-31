/*
 * @lc app=leetcode id=892 lang=javascript
 *
 * [892] Surface Area of 3D Shapes
 *
 * https://leetcode.com/problems/surface-area-of-3d-shapes/description/
 *
 * algorithms
 * Easy (64.93%)
 * Likes:    527
 * Dislikes: 724
 * Total Accepted:    36.9K
 * Total Submissions: 56.8K
 * Testcase Example:  '[[1,2],[3,4]]'
 *
 * You are given an n x n grid where you have placed some 1 x 1 x 1 cubes. Each
 * value v = grid[i][j] represents a tower of v cubes placed on top of cell (i,
 * j).
 *
 * After placing these cubes, you have decided to glue any directly adjacent
 * cubes to each other, forming several irregular 3D shapes.
 *
 * Return the total surface area of the resulting shapes.
 *
 * Note: The bottom face of each shape counts toward its surface area.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[1,2],[3,4]]
 * Output: 34
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: 32
 *
 *
 * Example 3:
 *
 *
 * Input: grid = [[2,2,2],[2,1,2],[2,2,2]]
 * Output: 46
 *
 *
 *
 * Constraints:
 *
 *
 * n == grid.length == grid[i].length
 * 1 <= n <= 50
 * 0 <= grid[i][j] <= 50
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 0) {
        res += grid[i][j] * 4 + 2
        if (i > 0) res -= Math.min(grid[i][j], grid[i - 1][j]) * 2
        if (j > 0) res -= Math.min(grid[i][j], grid[i][j - 1]) * 2
      }
    }
  }
  return res
}
// @lc code=end
