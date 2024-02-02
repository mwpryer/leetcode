/*
 * @lc app=leetcode id=1291 lang=javascript
 *
 * [1291] Sequential Digits
 *
 * https://leetcode.com/problems/sequential-digits/description/
 *
 * algorithms
 * Medium (61.33%)
 * Likes:    2353
 * Dislikes: 145
 * Total Accepted:    136.5K
 * Total Submissions: 214.6K
 * Testcase Example:  '100\n300'
 *
 * An integer has sequential digits if and only if each digit in the number is
 * one more than the previous digit.
 *
 * Return a sorted list of all the integers in the range [low, high] inclusive
 * that have sequential digits.
 *
 *
 * Example 1:
 * Input: low = 100, high = 300
 * Output: [123,234]
 * Example 2:
 * Input: low = 1000, high = 13000
 * Output: [1234,2345,3456,4567,5678,6789,12345]
 *
 *
 * Constraints:
 *
 *
 * 10 <= low <= high <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const res = []
  for (let i = 1; i <= 9; i++) {
    let num = i
    for (let j = i + 1; j <= 9; j++) {
      num = num * 10 + j
      if (num >= low && num <= high) res.push(num)
    }
  }
  return res.sort((a, b) => a - b)
}
// @lc code=end
