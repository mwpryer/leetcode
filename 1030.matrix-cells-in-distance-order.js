/*
 * @lc app=leetcode id=1030 lang=javascript
 *
 * [1030] Matrix Cells in Distance Order
 *
 * https://leetcode.com/problems/matrix-cells-in-distance-order/description/
 *
 * algorithms
 * Easy (70.37%)
 * Likes:    713
 * Dislikes: 308
 * Total Accepted:    54.9K
 * Total Submissions: 78K
 * Testcase Example:  '1\n2\n0\n0'
 *
 * You are given four integers row, cols, rCenter, and cCenter. There is a rows
 * x cols matrix and you are on the cell with the coordinates (rCenter,
 * cCenter).
 *
 * Return the coordinates of all cells in the matrix, sorted by their distance
 * from (rCenter, cCenter) from the smallest distance to the largest distance.
 * You may return the answer in any order that satisfies this condition.
 *
 * The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 -
 * c2|.
 *
 *
 * Example 1:
 *
 *
 * Input: rows = 1, cols = 2, rCenter = 0, cCenter = 0
 * Output: [[0,0],[0,1]]
 * Explanation: The distances from (0, 0) to other cells are: [0,1]
 *
 *
 * Example 2:
 *
 *
 * Input: rows = 2, cols = 2, rCenter = 0, cCenter = 1
 * Output: [[0,1],[0,0],[1,1],[1,0]]
 * Explanation: The distances from (0, 1) to other cells are: [0,1,1,2]
 * The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
 *
 *
 * Example 3:
 *
 *
 * Input: rows = 2, cols = 3, rCenter = 1, cCenter = 2
 * Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
 * Explanation: The distances from (1, 2) to other cells are: [0,1,1,2,2,3]
 * There are other answers that would also be accepted as correct, such as
 * [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= rows, cols <= 100
 * 0 <= rCenter < rows
 * 0 <= cCenter < cols
 *
 *
 */

// @lc code=start
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const map = {}
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const dist = Math.abs(i - rCenter) + Math.abs(j - cCenter)
      if (!map[dist]) map[dist] = []
      map[dist].push([i, j])
    }
  }
  const res = []
  for (let i = 0; i <= rows + cols - 2; i++) {
    if (map[i]) res.push(...map[i])
  }
  return res
}
// @lc code=end
