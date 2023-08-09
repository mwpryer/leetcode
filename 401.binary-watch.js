/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 *
 * https://leetcode.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (52.68%)
 * Likes:    1251
 * Dislikes: 2314
 * Total Accepted:    129.4K
 * Total Submissions: 244.7K
 * Testcase Example:  '1'
 *
 * A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6
 * LEDs on the bottom to represent the minutes (0-59). Each LED represents a
 * zero or one, with the least significant bit on the right.
 *
 *
 * For example, the below binary watch reads "4:51".
 *
 *
 *
 *
 * Given an integer turnedOn which represents the number of LEDs that are
 * currently on (ignoring the PM), return all possible times the watch could
 * represent. You may return the answer in any order.
 *
 * The hour must not contain a leading zero.
 *
 *
 * For example, "01:00" is not valid. It should be "1:00".
 *
 *
 * The minute must be consist of two digits and may contain a leading
 * zero.
 *
 *
 * For example, "10:2" is not valid. It should be "10:02".
 *
 *
 *
 * Example 1:
 * Input: turnedOn = 1
 * Output:
 * ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
 * Example 2:
 * Input: turnedOn = 9
 * Output: []
 *
 *
 * Constraints:
 *
 *
 * 0 <= turnedOn <= 10
 *
 *
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  function countBits(n) {
    let count = 0
    while (n) {
      n &= n - 1
      count++
    }
    return count
  }
  const res = []
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (countBits(i) + countBits(j) === turnedOn) {
        res.push(`${i}:${j < 10 ? "0" + j : j}`)
      }
    }
  }
  return res
}
// @lc code=end
