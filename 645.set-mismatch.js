/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 *
 * https://leetcode.com/problems/set-mismatch/description/
 *
 * algorithms
 * Easy (42.51%)
 * Likes:    3851
 * Dislikes: 894
 * Total Accepted:    282.8K
 * Total Submissions: 665.1K
 * Testcase Example:  '[1,2,2,4]'
 *
 * You have a set of integers s, which originally contains all the numbers from
 * 1 to n. Unfortunately, due to some error, one of the numbers in s got
 * duplicated to another number in the set, which results in repetition of one
 * number and loss of another number.
 *
 * You are given an integer array nums representing the data status of this set
 * after the error.
 *
 * Find the number that occurs twice and the number that is missing and return
 * them in the form of an array.
 *
 *
 * Example 1:
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 * Example 2:
 * Input: nums = [1,1]
 * Output: [1,2]
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^4
 * 1 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const seen = {}
  let duplicate = -1
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]]) duplicate = nums[i]
    if (!seen[nums[i]]) seen[nums[i]] = true
    sum += nums[i]
  }
  const expectedSum = (nums.length * (nums.length + 1)) / 2
  return [duplicate, expectedSum - (sum - duplicate)]
}
// @lc code=end
