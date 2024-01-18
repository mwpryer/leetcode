/*
 * @lc app=leetcode id=1154 lang=javascript
 *
 * [1154] Day of the Year
 *
 * https://leetcode.com/problems/day-of-the-year/description/
 *
 * algorithms
 * Easy (48.84%)
 * Likes:    424
 * Dislikes: 462
 * Total Accepted:    54K
 * Total Submissions: 110.8K
 * Testcase Example:  '"2019-01-09"'
 *
 * Given a string date representing a Gregorian calendar date formatted as
 * YYYY-MM-DD, return the day number of the year.
 *
 *
 * Example 1:
 *
 *
 * Input: date = "2019-01-09"
 * Output: 9
 * Explanation: Given date is the 9th day of the year in 2019.
 *
 *
 * Example 2:
 *
 *
 * Input: date = "2019-02-10"
 * Output: 41
 *
 *
 *
 * Constraints:
 *
 *
 * date.length == 10
 * date[4] == date[7] == '-', and all other date[i]'s are digits
 * date represents a calendar date between Jan 1^st, 1900 and Dec 31^th, 2019.
 *
 *
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const [year, month, day] = date.split("-").map((n) => parseInt(n, 10))
  let days = 0
  for (let i = 0; i < month - 1; i++) {
    days += daysOfMonth[i]
  }
  days += day
  const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 == 0)
  if (month > 2 && isLeapYear) days++
  return days
}
// @lc code=end
