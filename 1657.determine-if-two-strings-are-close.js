/*
 * @lc app=leetcode id=1657 lang=javascript
 *
 * [1657] Determine if Two Strings Are Close
 *
 * https://leetcode.com/problems/determine-if-two-strings-are-close/description/
 *
 * algorithms
 * Medium (53.46%)
 * Likes:    2892
 * Dislikes: 186
 * Total Accepted:    186.8K
 * Total Submissions: 348.4K
 * Testcase Example:  '"abc"\n"bca"'
 *
 * Two strings are considered close if you can attain one from the other using
 * the following operations:
 *
 *
 * Operation 1: Swap any two existing characters.
 *
 *
 * For example, abcde -> aecdb
 *
 *
 * Operation 2: Transform every occurrence of one existing character into
 * another existing character, and do the same with the other
 * character.
 *
 * For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into
 * a's)
 *
 *
 *
 *
 * You can use the operations on either string as many times as necessary.
 *
 * Given two strings, word1 and word2, return true if word1 and word2 are
 * close, and false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: word1 = "abc", word2 = "bca"
 * Output: true
 * Explanation: You can attain word2 from word1 in 2 operations.
 * Apply Operation 1: "abc" -> "acb"
 * Apply Operation 1: "acb" -> "bca"
 *
 *
 * Example 2:
 *
 *
 * Input: word1 = "a", word2 = "aa"
 * Output: false
 * Explanation: It is impossible to attain word2 from word1, or vice versa, in
 * any number of operations.
 *
 *
 * Example 3:
 *
 *
 * Input: word1 = "cabbba", word2 = "abbccc"
 * Output: true
 * Explanation: You can attain word2 from word1 in 3 operations.
 * Apply Operation 1: "cabbba" -> "caabbb"
 * Apply Operation 2: "caabbb" -> "baaccc"
 * Apply Operation 2: "baaccc" -> "abbccc"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= word1.length, word2.length <= 10^5
 * word1 and word2 contain only lowercase English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false

  const freqs1 = new Map()
  const freqs2 = new Map()
  for (let i = 0; i < word1.length; i++) {
    freqs1.set(word1[i], (freqs1.get(word1[i]) || 0) + 1)
    freqs2.set(word2[i], (freqs2.get(word2[i]) || 0) + 1)
  }

  const counts = new Map()
  for (const key of freqs1.keys()) {
    if (!freqs2.get(key)) return false
    counts.set(freqs1.get(key), (counts.get(freqs1.get(key)) || 0) + 1)
    counts.set(freqs2.get(key), (counts.get(freqs2.get(key)) || 0) - 1)
  }

  for (const val of counts.values()) {
    if (val !== 0) return false
  }
  return true
}
// @lc code=end
