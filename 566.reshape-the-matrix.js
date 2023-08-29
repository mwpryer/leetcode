/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 *
 * https://leetcode.com/problems/reshape-the-matrix/description/
 *
 * algorithms
 * Easy (62.97%)
 * Likes:    3347
 * Dislikes: 390
 * Total Accepted:    356.3K
 * Total Submissions: 565.8K
 * Testcase Example:  '[[1,2],[3,4]]\n1\n4'
 *
 * In MATLAB, there is a handy function called reshape which can reshape an m x
 * n matrix into a new one with a different size r x c keeping its original
 * data.
 *
 * You are given an m x n matrix mat and two integers r and c representing the
 * number of rows and the number of columns of the wanted reshaped matrix.
 *
 * The reshaped matrix should be filled with all the elements of the original
 * matrix in the same row-traversing order as they were.
 *
 * If the reshape operation with given parameters is possible and legal, output
 * the new reshaped matrix; Otherwise, output the original matrix.
 *
 *
 * Example 1:
 *
 *
 * Input: mat = [[1,2],[3,4]], r = 1, c = 4
 * Output: [[1,2,3,4]]
 *
 *
 * Example 2:
 *
 *
 * Input: mat = [[1,2],[3,4]], r = 2, c = 4
 * Output: [[1,2],[3,4]]
 *
 *
 *
 * Constraints:
 *
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 100
 * -1000 <= mat[i][j] <= 1000
 * 1 <= r, c <= 300
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat
  const res = []
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if ((i * mat[0].length + j) % c === 0) res.push([])
      res[res.length - 1].push(mat[i][j])
    }
  }
  return res
}
// @lc code=end
