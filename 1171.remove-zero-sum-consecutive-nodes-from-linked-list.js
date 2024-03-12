/*
 * @lc app=leetcode id=1171 lang=javascript
 *
 * [1171] Remove Zero Sum Consecutive Nodes from Linked List
 *
 * https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/
 *
 * algorithms
 * Medium (43.48%)
 * Likes:    2708
 * Dislikes: 154
 * Total Accepted:    93.6K
 * Total Submissions: 193.3K
 * Testcase Example:  '[1,2,-3,3,1]'
 *
 * Given the head of a linked list, we repeatedly delete consecutive sequences
 * of nodes that sum to 0 until there are no such sequences.
 *
 * After doing so, return the head of the final linked list.  You may return
 * any such answer.
 *
 *
 * (Note that in the examples below, all sequences are serializations of
 * ListNode objects.)
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,-3,3,1]
 * Output: [3,1]
 * Note: The answer [1,2,1] would also be accepted.
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2,3,-3,4]
 * Output: [1,2,4]
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1,2,3,-3,-2]
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The given linked list will contain between 1 and 1000 nodes.
 * Each node in the linked list has -1000 <= node.val <= 1000.
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
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  const dummy = new ListNode(0)
  dummy.next = head

  let sum = 0
  const sums = new Map()
  sums.set(0, dummy)
  let curr = dummy.next
  while (curr) {
    sum += curr.val
    if (sums.has(sum)) {
      let curr2 = sums.get(sum).next
      let sum2 = sum + curr2.val
      while (curr2 !== curr) {
        curr2 = curr2.next
        sums.delete(sum2)
        sum2 += curr2.val
      }
      sums.get(sum).next = curr.next
    } else {
      sums.set(sum, curr)
    }
    curr = curr.next
  }

  return dummy.next
}
// @lc code=end
