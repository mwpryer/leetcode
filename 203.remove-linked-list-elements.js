/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (46.57%)
 * Likes:    7518
 * Dislikes: 213
 * Total Accepted:    965.2K
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Given the head of a linked list and an integer val, remove all the nodes of
 * the linked list that has Node.val == val, and return the new head.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [], val = 1
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [0, 10^4].
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // Remove leading elements matching val
  let curr = head
  while (curr && curr.val === val) {
    curr = curr.next
  }
  // Remove other elements matching val
  const temp = curr
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return temp
}
// @lc code=end
