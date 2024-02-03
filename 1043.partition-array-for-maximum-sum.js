/*
 * @lc app=leetcode id=1043 lang=javascript
 *
 * [1043] Partition Array for Maximum Sum
 *
 * https://leetcode.com/problems/partition-array-for-maximum-sum/description/
 *
 * algorithms
 * Medium (72.44%)
 * Likes:    4304
 * Dislikes: 351
 * Total Accepted:    142.4K
 * Total Submissions: 188.3K
 * Testcase Example:  '[1,15,7,9,2,5,10]\n3'
 *
 * Given an integer array arr, partition the array into (contiguous) subarrays
 * of length at most k. After partitioning, each subarray has their values
 * changed to become the maximum value of that subarray.
 *
 * Return the largest sum of the given array after partitioning. Test cases are
 * generated so that the answer fits in a 32-bit integer.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [1,15,7,9,2,5,10], k = 3
 * Output: 84
 * Explanation: arr becomes [15,15,15,9,10,10,10]
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
 * Output: 83
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [1], k = 1
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= arr.length <= 500
 * 0 <= arr[i] <= 10^9
 * 1 <= k <= arr.length
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const dp = new Array(arr.length + 1).fill(0)
  for (let i = 1; i <= arr.length; i++) {
    let max = 0
    for (let j = 1; j <= Math.min(k, i); j++) {
      max = Math.max(max, arr[i - j])
      dp[i] = Math.max(dp[i], dp[i - j] + max * j)
    }
  }
  return dp[arr.length]
}
// @lc code=end
