/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 *
 * https://leetcode.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (88.29%)
 * Likes:    4835
 * Dislikes: 563
 * Total Accepted:    934.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 * You're given strings jewels representing the types of stones that are
 * jewels, and stones representing the stones you have. Each character in
 * stones is a type of stone you have. You want to know how many of the stones
 * you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone
 * from "A".
 *
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 *
 * Constraints:
 *
 *
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 *
 *
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const dict = new Map()
  for (const jewel of jewels) {
    dict.set(jewel, true)
  }
  let count = 0
  for (const stone of stones) {
    if (dict.has(stone)) count++
  }
  return count
}
// @lc code=end
