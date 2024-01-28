/*
 * @lc app=leetcode id=1074 lang=javascript
 *
 * [1074] Number of Submatrices That Sum to Target
 *
 * https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/description/
 *
 * algorithms
 * Hard (69.61%)
 * Likes:    3425
 * Dislikes: 89
 * Total Accepted:    121K
 * Total Submissions: 166.6K
 * Testcase Example:  '[[0,1,0],[1,1,1],[0,1,0]]\n0'
 *
 * Given a matrix and a target, return the number of non-empty submatrices that
 * sum to target.
 *
 * A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x
 * <= x2 and y1 <= y <= y2.
 *
 * Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if
 * they have some coordinate that is different: for example, if x1 != x1'.
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
 * Output: 4
 * Explanation: The four 1x1 submatrices that only contain 0.
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,-1],[-1,1]], target = 0
 * Output: 5
 * Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the
 * 2x2 submatrix.
 *
 *
 * Example 3:
 *
 *
 * Input: matrix = [[904]], target = 0
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= matrix.length <= 100
 * 1 <= matrix[0].length <= 100
 * -1000 <= matrix[i] <= 1000
 * -10^8 <= target <= 10^8
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  const rows = matrix.length
  const cols = matrix[0].length

  for (let row = 0; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      matrix[row][col] += matrix[row][col - 1]
    }
  }

  let count = 0
  for (let col1 = 0; col1 < cols; col1++) {
    for (let col2 = col1; col2 < cols; col2++) {
      const counts = new Map()
      counts.set(0, 1)

      let sum = 0
      for (let row = 0; row < rows; row++) {
        sum += matrix[row][col2] - (col1 > 0 ? matrix[row][col1 - 1] : 0)
        count += counts.get(sum - target) || 0
        counts.set(sum, (counts.get(sum) || 0) + 1)
      }
    }
  }
  return count
}
// @lc code=end
