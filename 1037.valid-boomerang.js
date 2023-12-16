/*
 * @lc app=leetcode id=1037 lang=javascript
 *
 * [1037] Valid Boomerang
 *
 * https://leetcode.com/problems/valid-boomerang/description/
 *
 * algorithms
 * Easy (36.86%)
 * Likes:    392
 * Dislikes: 512
 * Total Accepted:    47.5K
 * Total Submissions: 128.9K
 * Testcase Example:  '[[1,1],[2,3],[3,2]]'
 *
 * Given an array points where points[i] = [xi, yi] represents a point on the
 * X-Y plane, return true if these points are a boomerang.
 *
 * A boomerang is a set of three points that are all distinct and not in a
 * straight line.
 *
 *
 * Example 1:
 * Input: points = [[1,1],[2,3],[3,2]]
 * Output: true
 * Example 2:
 * Input: points = [[1,1],[2,2],[3,3]]
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * points.length == 3
 * points[i].length == 2
 * 0 <= xi, yi <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [a, b, c] = points
  return a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]) !== 0
}
// @lc code=end
