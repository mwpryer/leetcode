/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
 *
 * https://leetcode.com/problems/increasing-order-search-tree/description/
 *
 * algorithms
 * Easy (78.28%)
 * Likes:    4174
 * Dislikes: 660
 * Total Accepted:    264.7K
 * Total Submissions: 338.2K
 * Testcase Example:  '[5,3,6,2,4,null,8,1,null,null,null,7,9]'
 *
 * Given the root of a binary search tree, rearrange the tree in in-order so
 * that the leftmost node in the tree is now the root of the tree, and every
 * node has no left child and only one right child.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
 * Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [5,1,7]
 * Output: [1,null,5,null,7]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the given tree will be in the range [1, 100].
 * 0 <= Node.val <= 1000
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  let head = null
  let curr = null
  function traverse(node) {
    if (!node) return
    traverse(node.left)
    if (!head) {
      head = node
      curr = node
    } else {
      curr.right = node
      curr = curr.right
      node.left = null
    }
    traverse(node.right)
  }
  traverse(root)
  return head
}
// @lc code=end
