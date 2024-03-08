/*
 * @lc app=leetcode id=3005 lang=javascript
 *
 * [3005] Count Elements With Maximum Frequency
 *
 * https://leetcode.com/problems/count-elements-with-maximum-frequency/description/
 *
 * algorithms
 * Easy (79.89%)
 * Likes:    561
 * Dislikes: 57
 * Total Accepted:    174.8K
 * Total Submissions: 218.9K
 * Testcase Example:  '[1,2,2,3,1,4]'
 *
 * You are given an array nums consisting of positive integers.
 *
 * Return the total frequencies of elements in nums such that those elements
 * all have the maximum frequency.
 *
 * The frequency of an element is the number of occurrences of that element in
 * the array.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,2,3,1,4]
 * Output: 4
 * Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum
 * frequency in the array.
 * So the number of elements in the array with maximum frequency is 4.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,2,3,4,5]
 * Output: 5
 * Explanation: All elements of the array have a frequency of 1 which is the
 * maximum.
 * So the number of elements in the array with maximum frequency is 5.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let counts = new Map()
  let max = 0
  for (const num of nums) {
    counts.set(num, (counts.get(num) || 0) + 1)
    max = Math.max(max, counts.get(num))
  }
  let sum = 0
  for (const count of counts.values()) {
    if (count === max) sum += count
  }
  return sum
}
// @lc code=end
