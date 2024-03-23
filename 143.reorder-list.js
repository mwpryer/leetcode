/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 *
 * https://leetcode.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (56.17%)
 * Likes:    10810
 * Dislikes: 385
 * Total Accepted:    939.4K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,3,4]'
 *
 * You are given the head of a singly linked-list. The list can be represented
 * as:
 *
 *
 * L0 → L1 → … → Ln - 1 → Ln
 *
 *
 * Reorder the list to be on the following form:
 *
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may
 * be changed.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [1, 5 * 10^4].
 * 1 <= Node.val <= 1000
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // find  middle of list
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // reverse second half
  let prev = null
  let curr = slow
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  // merge
  let first = head
  let second = prev
  while (second.next) {
    const firstNext = first.next
    first.next = second
    first = firstNext
    const secondNext = second.next
    second.next = first
    second = secondNext
  }

  return head
}
// @lc code=end
