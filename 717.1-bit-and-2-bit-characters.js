/*
 * @lc app=leetcode id=717 lang=javascript
 *
 * [717] 1-bit and 2-bit Characters
 *
 * https://leetcode.com/problems/1-bit-and-2-bit-characters/description/
 *
 * algorithms
 * Easy (45.29%)
 * Likes:    830
 * Dislikes: 2029
 * Total Accepted:    123.3K
 * Total Submissions: 272.2K
 * Testcase Example:  '[1,0,0]'
 *
 * We have two special characters:
 *
 *
 * The first character can be represented by one bit 0.
 * The second character can be represented by two bits (10 or 11).
 *
 *
 * Given a binary array bits that ends with 0, return true if the last
 * character must be a one-bit character.
 *
 *
 * Example 1:
 *
 *
 * Input: bits = [1,0,0]
 * Output: true
 * Explanation: The only way to decode it is two-bit character and one-bit
 * character.
 * So the last character is one-bit character.
 *
 *
 * Example 2:
 *
 *
 * Input: bits = [1,1,1,0]
 * Output: false
 * Explanation: The only way to decode it is two-bit character and two-bit
 * character.
 * So the last character is not one-bit character.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= bits.length <= 1000
 * bits[i] is either 0 or 1.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let i = 0
  while (i < bits.length - 1) {
    i += bits[i] + 1
  }
  return i === bits.length - 1
}
// @lc code=end
