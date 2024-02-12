/*
 * @lc app=leetcode id=1185 lang=javascript
 *
 * [1185] Day of the Week
 *
 * https://leetcode.com/problems/day-of-the-week/description/
 *
 * algorithms
 * Easy (57.36%)
 * Likes:    377
 * Dislikes: 2399
 * Total Accepted:    62.4K
 * Total Submissions: 108.7K
 * Testcase Example:  '31\n8\n2019'
 *
 * Given a date, return the corresponding day of the week for that date.
 *
 * The input is given as three integers representing the day, month and year
 * respectively.
 *
 * Return the answer as one of the following values {"Sunday", "Monday",
 * "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
 *
 *
 * Example 1:
 *
 *
 * Input: day = 31, month = 8, year = 2019
 * Output: "Saturday"
 *
 *
 * Example 2:
 *
 *
 * Input: day = 18, month = 7, year = 1999
 * Output: "Sunday"
 *
 *
 * Example 3:
 *
 *
 * Input: day = 15, month = 8, year = 1993
 * Output: "Sunday"
 *
 *
 *
 * Constraints:
 *
 *
 * The given dates are valid dates between the years 1971 and 2100.
 *
 *
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  // Zeller's Congruence
  if (month < 3) {
    month += 12
    year -= 1
  }
  const q = day
  const m = month
  const K = year % 100
  const J = Math.floor(year / 100)
  const h = (q + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - 2 * J) % 7
  return days[(h + 7) % 7]
}
// @lc code=end
