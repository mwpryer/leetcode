/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 *
 * https://leetcode.com/problems/relative-ranks/description/
 *
 * algorithms
 * Easy (61.66%)
 * Likes:    1182
 * Dislikes: 58
 * Total Accepted:    135.1K
 * Total Submissions: 218.6K
 * Testcase Example:  '[5,4,3,2,1]'
 *
 * You are given an integer array score of size n, where score[i] is the score
 * of the i^th athlete in a competition. All the scores are guaranteed to be
 * unique.
 *
 * The athletes are placed based on their scores, where the 1^st place athlete
 * has the highest score, the 2^nd place athlete has the 2^nd highest score,
 * and so on. The placement of each athlete determines their rank:
 *
 *
 * The 1^st place athlete's rank is "Gold Medal".
 * The 2^nd place athlete's rank is "Silver Medal".
 * The 3^rd place athlete's rank is "Bronze Medal".
 * For the 4^th place to the n^th place athlete, their rank is their placement
 * number (i.e., the x^th place athlete's rank is "x").
 *
 *
 * Return an array answer of size n where answer[i] is the rank of the i^th
 * athlete.
 *
 *
 * Example 1:
 *
 *
 * Input: score = [5,4,3,2,1]
 * Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
 * Explanation: The placements are [1^st, 2^nd, 3^rd, 4^th, 5^th].
 *
 * Example 2:
 *
 *
 * Input: score = [10,3,8,9,4]
 * Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
 * Explanation: The placements are [1^st, 5^th, 3^rd, 2^nd, 4^th].
 *
 *
 *
 *
 * Constraints:
 *
 *
 * n == score.length
 * 1 <= n <= 10^4
 * 0 <= score[i] <= 10^6
 * All the values in score are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
function merge(left, right) {
  const res = []
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      res.push(left[i])
      i++
    } else {
      res.push(right[j])
      j++
    }
  }
  while (i < left.length) {
    res.push(left[i])
    i++
  }
  while (j < right.length) {
    res.push(right[j])
    j++
  }
  return res
}
var findRelativeRanks = function (score) {
  const sorted = mergeSort(score)
  const map = {}
  for (let i = 0; i < sorted.length; i++) {
    map[sorted[i]] = i + 1
  }
  const res = []
  for (let i = 0; i < score.length; i++) {
    res[i] = map[score[i]].toString()
    if (map[score[i]] === 1) res[i] = "Gold Medal"
    if (map[score[i]] === 2) res[i] = "Silver Medal"
    if (map[score[i]] === 3) res[i] = "Bronze Medal"
  }
  return res
}
// @lc code=end
