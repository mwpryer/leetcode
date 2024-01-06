/*
 * @lc app=leetcode id=1235 lang=javascript
 *
 * [1235] Maximum Profit in Job Scheduling
 *
 * https://leetcode.com/problems/maximum-profit-in-job-scheduling/description/
 *
 * algorithms
 * Hard (53.23%)
 * Likes:    5585
 * Dislikes: 69
 * Total Accepted:    209.3K
 * Total Submissions: 393.1K
 * Testcase Example:  '[1,2,3,3]\n[3,4,5,6]\n[50,10,40,70]'
 *
 * We have n jobs, where every job is scheduled to be done from startTime[i] to
 * endTime[i], obtaining a profit of profit[i].
 *
 * You're given the startTime, endTime and profit arrays, return the maximum
 * profit you can take such that there are no two jobs in the subset with
 * overlapping time range.
 *
 * If you choose a job that ends at time X you will be able to start another
 * job that starts at time X.
 *
 *
 * Example 1:
 *
 *
 *
 *
 * Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
 * Output: 120
 * Explanation: The subset chosen is the first and fourth job.
 * Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
 *
 *
 * Example 2:
 *
 * ⁠
 *
 *
 * Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit =
 * [20,20,100,70,60]
 * Output: 150
 * Explanation: The subset chosen is the first, fourth and fifth job.
 * Profit obtained 150 = 20 + 70 + 60.
 *
 *
 * Example 3:
 *
 *
 *
 *
 * Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
 * Output: 6
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4
 * 1 <= startTime[i] < endTime[i] <= 10^9
 * 1 <= profit[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const jobs = []
  // Group and sort by end time
  for (let i = 0; i < startTime.length; i++) {
    jobs.push([startTime[i], endTime[i], profit[i]])
  }
  jobs.sort((a, b) => a[1] - b[1])

  // Dynamic programming table for maximum profit at time i
  const dp = new Array(jobs.length).fill(0)
  dp[0] = jobs[0][2]
  for (let curr = 1; curr < jobs.length; curr++) {
    // Find the last job that ends before the current job starts
    let prev = curr - 1
    while (prev >= 0 && jobs[prev][1] > jobs[curr][0]) {
      prev--
    }
    // Schedule current job or skip it
    dp[curr] = Math.max(dp[curr - 1], jobs[curr][2] + (prev >= 0 ? dp[prev] : 0))
  }
  return dp[jobs.length - 1]
}
// @lc code=end
