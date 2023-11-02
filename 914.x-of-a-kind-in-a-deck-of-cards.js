/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 *
 * https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/
 *
 * algorithms
 * Easy (30.27%)
 * Likes:    1749
 * Dislikes: 467
 * Total Accepted:    112.5K
 * Total Submissions: 371.7K
 * Testcase Example:  '[1,2,3,4,4,3,2,1]'
 *
 * You are given an integer array deck where deck[i] represents the number
 * written on the i^th card.
 *
 * Partition the cards into one or more groups such that:
 *
 *
 * Each group has exactly x cards where x > 1, and
 * All the cards in one group have the same integer written on them.
 *
 *
 * Return true if such partition is possible, or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: deck = [1,2,3,4,4,3,2,1]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
 *
 *
 * Example 2:
 *
 *
 * Input: deck = [1,1,1,2,2,2,3,3]
 * Output: false
 * Explanation: No possible partition.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= deck.length <= 10^4
 * 0 <= deck[i] < 10^4
 *
 *
 */

// @lc code=start
function gcd(a, b) {
  if (b === 0) return a
  return gcd(b, a % b)
}
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  const map = {}
  for (const card of deck) {
    if (!map[card]) map[card] = 0
    map[card]++
  }
  const vals = Object.values(map)
  let res = vals[0]
  for (let i = 1; i < vals.length; i++) {
    res = gcd(res, vals[i])
  }
  return res > 1
}
// @lc code=end
