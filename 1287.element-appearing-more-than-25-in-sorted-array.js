/*
 * @lc app=leetcode id=1287 lang=javascript
 *
 * [1287] Element Appearing More Than 25% In Sorted Array
 *
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/
 *
 * algorithms
 * Easy (61.05%)
 * Likes:    1669
 * Dislikes: 75
 * Total Accepted:    203.8K
 * Total Submissions: 333.9K
 * Testcase Example:  '[1,2,2,6,6,6,6,7,10]'
 *
 * Given an integer array sorted in non-decreasing order, there is exactly one
 * integer in the array that occurs more than 25% of the time, return that
 * integer.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,2,2,6,6,6,6,7,10]
 * Output: 6
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,1]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let target = Math.floor(arr.length / 4)
  for (let i = 0; i < arr.length - target; i++) {
    if (arr[i] === arr[i + target]) return arr[i]
  }
}
// @lc code=end
