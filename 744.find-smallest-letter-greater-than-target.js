/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 *
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/
 *
 * algorithms
 * Easy (51.11%)
 * Likes:    4106
 * Dislikes: 2166
 * Total Accepted:    417.5K
 * Total Submissions: 816.7K
 * Testcase Example:  '["c","f","j"]\n"a"'
 *
 * You are given an array of characters letters that is sorted in
 * non-decreasing order, and a character target. There are at least two
 * different characters in letters.
 *
 * Return the smallest character in letters that is lexicographically greater
 * than target. If such a character does not exist, return the first character
 * in letters.
 *
 *
 * Example 1:
 *
 *
 * Input: letters = ["c","f","j"], target = "a"
 * Output: "c"
 * Explanation: The smallest character that is lexicographically greater than
 * 'a' in letters is 'c'.
 *
 *
 * Example 2:
 *
 *
 * Input: letters = ["c","f","j"], target = "c"
 * Output: "f"
 * Explanation: The smallest character that is lexicographically greater than
 * 'c' in letters is 'f'.
 *
 *
 * Example 3:
 *
 *
 * Input: letters = ["x","x","y","y"], target = "z"
 * Output: "x"
 * Explanation: There are no characters in letters that is lexicographically
 * greater than 'z' so we return letters[0].
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= letters.length <= 10^4
 * letters[i] is a lowercase English letter.
 * letters is sorted in non-decreasing order.
 * letters contains at least two different characters.
 * target is a lowercase English letter.
 *
 *
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  if (letters[letters.length - 1] <= target) return letters[0]
  let left = 0
  let right = letters.length - 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (letters[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return letters[left]
}
// @lc code=end
