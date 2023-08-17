/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 *
 * https://leetcode.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (75.12%)
 * Likes:    3668
 * Dislikes: 212
 * Total Accepted:    536.9K
 * Total Submissions: 714.6K
 * Testcase Example:  '1\n4'
 *
 * The Hamming distance between two integers is the number of positions at
 * which the corresponding bits are different.
 *
 * Given two integers x and y, return the Hamming distance between them.
 *
 *
 * Example 1:
 *
 *
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * The above arrows point to positions where the corresponding bits are
 * different.
 *
 *
 * Example 2:
 *
 *
 * Input: x = 3, y = 1
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= x, y <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let count = 0
  while (x || y) {
    if ((x & 1) !== (y & 1)) count++
    x = x >> 1
    y = y >> 1
  }
  return count
}
// @lc code=end
