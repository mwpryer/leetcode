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
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Get total days from 1971-01-01 to the given date
  function getTotalDays(day, month, year) {
    let days = 0
    for (let i = 1971; i < year; i++) {
      days += 365 + (isLeapYear(i) ? 1 : 0)
    }
    for (let i = 0; i < month - 1; i++) {
      days += daysInMonth[i]
    }
    if (month > 2 && isLeapYear(year)) days++
    days += day
    return days
  }

  const today = getTotalDays(12, 2, 2024)
  const date = getTotalDays(day, month, year)
  return dayNames[(((date - today) % 7) + 7) % 7]
}
// @lc code=end
