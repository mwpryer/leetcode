/*
 * @lc app=leetcode id=2709 lang=javascript
 *
 * [2709] Greatest Common Divisor Traversal
 *
 * https://leetcode.com/problems/greatest-common-divisor-traversal/description/
 *
 * algorithms
 * Hard (22.93%)
 * Likes:    601
 * Dislikes: 86
 * Total Accepted:    37.8K
 * Total Submissions: 98.1K
 * Testcase Example:  '[2,3,6]'
 *
 * You are given a 0-indexed integer array nums, and you are allowed to
 * traverse between its indices. You can traverse between index i and index j,
 * i != j, if and only if gcd(nums[i], nums[j]) > 1, where gcd is the greatest
 * common divisor.
 *
 * Your task is to determine if for every pair of indices i and j in nums,
 * where i < j, there exists a sequence of traversals that can take us from i
 * to j.
 *
 * Return true if it is possible to traverse between all such pairs of indices,
 * or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,3,6]
 * Output: true
 * Explanation: In this example, there are 3 possible pairs of indices: (0, 1),
 * (0, 2), and (1, 2).
 * To go from index 0 to index 1, we can use the sequence of traversals 0 -> 2
 * -> 1, where we move from index 0 to index 2 because gcd(nums[0], nums[2]) =
 * gcd(2, 6) = 2 > 1, and then move from index 2 to index 1 because
 * gcd(nums[2], nums[1]) = gcd(6, 3) = 3 > 1.
 * To go from index 0 to index 2, we can just go directly because gcd(nums[0],
 * nums[2]) = gcd(2, 6) = 2 > 1. Likewise, to go from index 1 to index 2, we
 * can just go directly because gcd(nums[1], nums[2]) = gcd(3, 6) = 3 > 1.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,9,5]
 * Output: false
 * Explanation: No sequence of traversals can take us from index 0 to index 2
 * in this example. So, we return false.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [4,3,12,8]
 * Output: true
 * Explanation: There are 6 possible pairs of indices to traverse between: (0,
 * 1), (0, 2), (0, 3), (1, 2), (1, 3), and (2, 3). A valid sequence of
 * traversals exists for each pair, so we return true.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
function getPrimeFactors(x) {
  const factors = []
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      factors.push(i)
      while (x % i === 0) {
        x /= i
      }
    }
  }
  if (x > 1) factors.push(x)
  return factors
}
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function (nums) {
  if (nums.length === 1) return true

  const primes = new Map()
  const graph = new Map()
  for (let i = 0; i < nums.length; i++) {
    for (const prime of getPrimeFactors(nums[i])) {
      if (!primes.has(prime)) {
        primes.set(prime, i)
      } else {
        if (!graph.has(i)) graph.set(i, [])
        graph.get(i).push(primes.get(prime))
        if (!graph.has(primes.get(prime))) graph.set(primes.get(prime), [])
        graph.get(primes.get(prime)).push(i)
      }
    }
  }

  const stack = [0]
  const visited = new Set()
  while (stack.length > 0) {
    const curr = stack.pop()
    if (visited.has(curr)) continue
    visited.add(curr)

    const neighbours = graph.get(curr)
    if (!neighbours) continue
    for (const neighbour of neighbours) {
      stack.push(neighbour)
    }
  }

  return visited.size === nums.length
}
// @lc code=end
