/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 *
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Easy (39.72%)
 * Likes:    3887
 * Dislikes: 213
 * Total Accepted:    1.8M
 * Total Submissions: 4.6M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * Given two strings needle and haystack, return the index of the first
 * occurrence of needle in haystack, or -1 if needle is not part of
 * haystack.
 *
 *
 * Example 1:
 *
 *
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 *
 *
 * Example 2:
 *
 *
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack and needle consist of only lowercase English characters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // KMP algorithm
  const lps = [0]
  let k = 0
  let i = 1
  // compute LPS table for every substring of the needle
  while (i < needle.length) {
    if (needle[k] === needle[i]) {
      lps[i] = k + 1
      k++
      i++
    } else {
      if (k > 0) {
        // consider case: aabaaa
        k = lps[k - 1]
      } else {
        lps[i] = 0
        i++
      }
    }
  }
  k = 0
  i = 0
  while (i < haystack.length) {
    if (haystack[i] === needle[k]) {
      k++
      if (k === needle.length) return i - k + 1
      i++
    } else {
      if (k > 0) {
        // go to index of longest prefix already matched by suffix
        k = lps[k - 1]
      } else {
        i++
      }
    }
  }
  return -1
}
// @lc code=end
