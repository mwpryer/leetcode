/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 *
 * https://leetcode.com/problems/guess-number-higher-or-lower/description/
 *
 * algorithms
 * Easy (52.15%)
 * Likes:    3232
 * Dislikes: 405
 * Total Accepted:    524.3K
 * Total Submissions: 1M
 * Testcase Example:  '10\n6'
 *
 * We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from 1 to n. You have to guess which number I picked.
 *
 * Every time you guess wrong, I will tell you whether the number I picked is
 * higher or lower than your guess.
 *
 * You call a pre-defined API int guess(int num), which returns three possible
 * results:
 *
 *
 * -1: Your guess is higher than the number I picked (i.e. num > pick).
 * 1: Your guess is lower than the number I picked (i.e. num < pick).
 * 0: your guess is equal to the number I picked (i.e. num == pick).
 *
 *
 * Return the number that I picked.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 10, pick = 6
 * Output: 6
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1, pick = 1
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: n = 2, pick = 1
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 2^31 - 1
 * 1 <= pick <= n
 *
 *
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1
  let right = n
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const res = guess(mid)
    if (res === 0) return mid
    if (res === 1) left = mid + 1
    if (res === -1) right = mid - 1
  }
}
// @lc code=end
