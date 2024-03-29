/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 *
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 *
 * algorithms
 * Medium (59.36%)
 * Likes:    22626
 * Dislikes: 4257
 * Total Accepted:    1.6M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,3,4,2,2]'
 *
 * Given an array of integers nums containing n + 1 integers where each integer
 * is in the range [1, n] inclusive.
 *
 * There is only one repeated number in nums, return this repeated number.
 *
 * You must solve the problem without modifying the array nums and uses only
 * constant extra space.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [3,3,3,3,3]
 * Output: 3
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^5
 * nums.length == n + 1
 * 1 <= nums[i] <= n
 * All the integers in nums appear only once except for precisely one integer
 * which appears two or more times.
 *
 *
 *
 * Follow up:
 *
 *
 * How can we prove that at least one duplicate number must exist in nums?
 * Can you solve the problem in linear runtime complexity?
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0
  let fast = 0
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  let slow2 = 0
  while (slow !== slow2) {
    slow = nums[slow]
    slow2 = nums[slow2]
  }
  return slow
}
// @lc code=end
