/*
 * @lc app=leetcode id=1232 lang=javascript
 *
 * [1232] Check If It Is a Straight Line
 *
 * https://leetcode.com/problems/check-if-it-is-a-straight-line/description/
 *
 * algorithms
 * Easy (39.60%)
 * Likes:    2556
 * Dislikes: 277
 * Total Accepted:    251K
 * Total Submissions: 634K
 * Testcase Example:  '[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]'
 *
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y]
 * represents the coordinate of a point. Check if these points make a straight
 * line in the XY plane.
 *
 *
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 *
 *
 * Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates contains no duplicate point.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let [x0, y0] = coordinates[0]
  let [x1, y1] = coordinates[1]
  const dx = x1 - x0
  const dy = y1 - y0
  for (let i = 2; i < coordinates.length; i++) {
    let [x0, y0] = coordinates[i - 1]
    let [x1, y1] = coordinates[i]
    if (dx * (y1 - y0) !== dy * (x1 - x0)) return false
  }
  return true
}
// @lc code=end
