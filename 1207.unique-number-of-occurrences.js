/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 *
 * https://leetcode.com/problems/unique-number-of-occurrences/description/
 *
 * algorithms
 * Easy (74.63%)
 * Likes:    4504
 * Dislikes: 110
 * Total Accepted:    423.3K
 * Total Submissions: 562.8K
 * Testcase Example:  '[1,2,2,1,1,3]'
 *
 * Given an array of integers arr, return true if the number of occurrences of
 * each value in the array is unique or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two
 * values have the same number of occurrences.
 *
 * Example 2:
 *
 *
 * Input: arr = [1,2]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 1000
 * -1000 <= arr[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const counts = new Map()
  for (const num of arr) {
    counts.set(num, (counts.get(num) || 0) + 1)
  }
  const uniques = new Set()
  for (const count of counts.values()) {
    if (uniques.has(count)) return false
    uniques.add(count)
  }
  return true
}
// @lc code=end
