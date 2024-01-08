/*
 * @lc app=leetcode id=1128 lang=javascript
 *
 * [1128] Number of Equivalent Domino Pairs
 *
 * https://leetcode.com/problems/number-of-equivalent-domino-pairs/description/
 *
 * algorithms
 * Easy (47.93%)
 * Likes:    658
 * Dislikes: 325
 * Total Accepted:    64.5K
 * Total Submissions: 134.7K
 * Testcase Example:  '[[1,2],[2,1],[3,4],[5,6]]'
 *
 * Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j]
 * = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) -
 * that is, one domino can be rotated to be equal to another domino.
 *
 * Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length,
 * and dominoes[i] is equivalent to dominoes[j].
 *
 *
 * Example 1:
 *
 *
 * Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= dominoes.length <= 4 * 10^4
 * dominoes[i].length == 2
 * 1 <= dominoes[i][j] <= 9
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const counts = {}
  for (const domino of dominoes) {
    const [a, b] = domino
    const key = a < b ? `${a}:${b}` : `${b}:${a}`
    if (!counts[key]) counts[key] = 0
    counts[key]++
  }
  let res = 0
  for (const count of Object.values(counts)) {
    res += (count * (count - 1)) / 2
  }
  return res
}
// @lc code=end
