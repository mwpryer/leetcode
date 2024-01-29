/*
 * @lc app=leetcode id=1175 lang=javascript
 *
 * [1175] Prime Arrangements
 *
 * https://leetcode.com/problems/prime-arrangements/description/
 *
 * algorithms
 * Easy (56.09%)
 * Likes:    384
 * Dislikes: 509
 * Total Accepted:    29K
 * Total Submissions: 51.5K
 * Testcase Example:  '5'
 *
 * Return the number of permutations of 1 to n so that prime numbers are at
 * prime indices (1-indexed.)
 *
 * (Recall that an integer is prime if and only if it is greater than 1, and
 * cannot be written as a product of two positive integers both smaller than
 * it.)
 *
 * Since the answer may be large, return the answer couulo 10^9 + 7.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 5
 * Output: 12
 * Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1]
 * is not because the prime number 5 is at index 1.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 100
 * Output: 682289015
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 100
 *
 *
 */

// @lc code=start
function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  let res = 1
  let primes = 0
  let composites = 0
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      primes++
      res *= primes
    } else {
      composites++
      res *= composites
    }
    res %= 10 ** 9 + 7
  }
  return res
}
// @lc code=end
