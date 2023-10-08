/*
 * @lc app=leetcode id=824 lang=javascript
 *
 * [824] Goat Latin
 *
 * https://leetcode.com/problems/goat-latin/description/
 *
 * algorithms
 * Easy (67.90%)
 * Likes:    857
 * Dislikes: 1211
 * Total Accepted:    163.9K
 * Total Submissions: 241.3K
 * Testcase Example:  '"I speak Goat Latin"'
 *
 * You are given a string sentence that consist of words separated by spaces.
 * Each word consists of lowercase and uppercase letters only.
 *
 * We would like to convert the sentence to "Goat Latin" (a made-up language
 * similar to Pig Latin.) The rules of Goat Latin are as follows:
 *
 *
 * If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to
 * the end of the word.
 *
 *
 * For example, the word "apple" becomes "applema".
 *
 *
 * If a word begins with a consonant (i.e., not a vowel), remove the first
 * letter and append it to the end, then add "ma".
 *
 * For example, the word "goat" becomes "oatgma".
 *
 *
 * Add one letter 'a' to the end of each word per its word index in the
 * sentence, starting with 1.
 *
 * For example, the first word gets "a" added to the end, the second word gets
 * "aa" added to the end, and so on.
 *
 *
 *
 *
 * Return the final sentence representing the conversion from sentence to Goat
 * Latin.
 *
 *
 * Example 1:
 * Input: sentence = "I speak Goat Latin"
 * Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 * Example 2:
 * Input: sentence = "The quick brown fox jumped over the lazy dog"
 * Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa
 * hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 *
 *
 * Constraints:
 *
 *
 * 1 <= sentence.length <= 150
 * sentence consists of English letters and spaces.
 * sentence has no leading or trailing spaces.
 * All the words in sentence are separated by a single space.
 *
 *
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const res = []
  const words = sentence.split(" ")
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    let newWord = ""
    if (["a", "e", "i", "o", "u"].includes(word[0].toLowerCase())) {
      newWord += word + "ma"
    } else {
      newWord += word.slice(1) + word[0] + "ma"
    }
    newWord += "a".repeat(i + 1)
    res.push(newWord)
  }
  return res.join(" ")
}
// @lc code=end
