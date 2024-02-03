/*
 * @lc app=leetcode id=2966 lang=javascript
 *
 * [2966] Divide Array Into Arrays With Max Difference
 *
 * https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/
 *
 * algorithms
 * Medium (57.90%)
 * Likes:    626
 * Dislikes: 154
 * Total Accepted:    117.1K
 * Total Submissions: 164.7K
 * Testcase Example:  '[1,3,4,8,7,9,3,5,1]\n2'
 *
 * You are given an integer array nums of size n and a positive integer k.
 *
 * Divide the array into one or more arrays of size 3 satisfying the following
 * conditions:
 *
 *
 * Each element of nums should be in exactly one array.
 * The difference between any two elements in one array is less than or equal
 * to k.
 *
 *
 * Return a 2D array containing all the arrays. If it is impossible to satisfy
 * the conditions, return an empty array. And if there are multiple answers,
 * return any of them.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,4,8,7,9,3,5,1], k = 2
 * Output: [[1,1,3],[3,4,5],[7,8,9]]
 * Explanation: We can divide the array into the following arrays: [1,1,3],
 * [3,4,5] and [7,8,9].
 * The difference between any two elements in each array is less than or equal
 * to 2.
 * Note that the order of elements is not important.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,3,3,2,7,3], k = 3
 * Output: []
 * Explanation: It is not possible to divide the array satisfying all the
 * conditions.
 *
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 10^5
 * n is a multiple of 3.
 * 1 <= nums[i] <= 10^5
 * 1 <= k <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 2; i += 3) {
    if (nums[i + 2] - nums[i] > k) return []
    res.push([nums[i], nums[i + 1], nums[i + 2]])
  }
  return res
}
// @lc code=end
