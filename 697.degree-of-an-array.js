/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 *
 * https://leetcode.com/problems/degree-of-an-array/description/
 *
 * algorithms
 * Easy (55.99%)
 * Likes:    2854
 * Dislikes: 1638
 * Total Accepted:    191.3K
 * Total Submissions: 341.2K
 * Testcase Example:  '[1,2,2,3,1]'
 *
 * Given a non-empty array of non-negative integers nums, the degree of this
 * array is defined as the maximum frequency of any one of its elements.
 *
 * Your task is to find the smallest possible length of a (contiguous) subarray
 * of nums, that has the same degree as nums.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,2,3,1]
 * Output: 2
 * Explanation:
 * The input array has a degree of 2 because both elements 1 and 2 appear
 * twice.
 * Of the subarrays that have the same degree:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * The shortest length is 2. So return 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,2,3,1,4,2]
 * Output: 6
 * Explanation:
 * The degree is 3 because the element 2 is repeated 3 times.
 * So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 *
 *
 *
 * Constraints:
 *
 *
 * nums.length will be between 1 and 50,000.
 * nums[i] will be an integer between 0 and 49,999.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const counts = {}
  let degree = 0
  const first = {}
  const last = {}
  for (let i = 0; i < nums.length; i++) {
    if (!counts[nums[i]]) counts[nums[i]] = 0
    counts[nums[i]]++
    degree = Math.max(degree, counts[nums[i]])
    if (!(nums[i] in first)) first[nums[i]] = i
    last[nums[i]] = i
  }
  let min = nums.length
  for (const num of Object.keys(counts)) {
    if (counts[num] === degree) min = Math.min(min, last[num] - first[num] + 1)
  }
  return min
}
// @lc code=end
