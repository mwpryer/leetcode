/*
 * @lc app=leetcode id=1200 lang=javascript
 *
 * [1200] Minimum Absolute Difference
 *
 * https://leetcode.com/problems/minimum-absolute-difference/description/
 *
 * algorithms
 * Easy (69.43%)
 * Likes:    2308
 * Dislikes: 74
 * Total Accepted:    182.6K
 * Total Submissions: 263K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Given an array of distinct integers arr, find all pairs of elements with the
 * minimum absolute difference of any two elements.
 *
 * Return a list of pairs in ascending order(with respect to pairs), each pair
 * [a, b] follows
 *
 *
 * a, b are from arr
 * a < b
 * b - a equals to the minimum absolute difference of any two elements in
 * arr
 *
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [4,2,1,3]
 * Output: [[1,2],[2,3],[3,4]]
 * Explanation: The minimum absolute difference is 1. List all pairs with
 * difference equal to 1 in ascending order.
 *
 * Example 2:
 *
 *
 * Input: arr = [1,3,6,10,15]
 * Output: [[1,3]]
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [3,8,-10,23,19,-4,-14,27]
 * Output: [[-14,-10],[19,23],[23,27]]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= arr.length <= 10^5
 * -10^6 <= arr[i] <= 10^6
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b)
  const pairs = {}
  let min = Math.abs(arr[1] - arr[0])
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i + 1] - arr[i])
    min = Math.min(min, diff)
    if (!pairs[diff]) pairs[diff] = []
    pairs[diff].push([arr[i], arr[i + 1]])
  }
  return pairs[min]
}
// @lc code=end
