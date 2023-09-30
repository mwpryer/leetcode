/*
 * @lc app=leetcode id=762 lang=javascript
 *
 * [762] Prime Number of Set Bits in Binary Representation
 *
 * https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/description/
 *
 * algorithms
 * Easy (68.58%)
 * Likes:    669
 * Dislikes: 502
 * Total Accepted:    88.1K
 * Total Submissions: 128.3K
 * Testcase Example:  '6\n10'
 *
 * Given two integers left and right, return the count of numbers in the
 * inclusive range [left, right] having a prime number of set bits in their
 * binary representation.
 *
 * Recall that the number of set bits an integer has is the number of 1's
 * present when written in binary.
 *
 *
 * For example, 21 written in binary is 10101, which has 3 set bits.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: left = 6, right = 10
 * Output: 4
 * Explanation:
 * 6  -> 110 (2 set bits, 2 is prime)
 * 7  -> 111 (3 set bits, 3 is prime)
 * 8  -> 1000 (1 set bit, 1 is not prime)
 * 9  -> 1001 (2 set bits, 2 is prime)
 * 10 -> 1010 (2 set bits, 2 is prime)
 * 4 numbers have a prime number of set bits.
 *
 *
 * Example 2:
 *
 *
 * Input: left = 10, right = 15
 * Output: 5
 * Explanation:
 * 10 -> 1010 (2 set bits, 2 is prime)
 * 11 -> 1011 (3 set bits, 3 is prime)
 * 12 -> 1100 (2 set bits, 2 is prime)
 * 13 -> 1101 (3 set bits, 3 is prime)
 * 14 -> 1110 (3 set bits, 3 is prime)
 * 15 -> 1111 (4 set bits, 4 is not prime)
 * 5 numbers have a prime number of set bits.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= left <= right <= 10^6
 * 0 <= right - left <= 10^4
 *
 *
 */

// @lc code=start
function isPrime(num) {
  if (num === 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}
function countBits(num) {
  let count = 0
  while (num > 0) {
    count += num & 1
    num >>= 1
  }
  return count
}
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let count = 0
  for (let i = left; i <= right; i++) {
    const bits = countBits(i)
    if (isPrime(bits)) count++
  }
  return count
}
// @lc code=end
