/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (68.62%)
 * Likes:    6170
 * Dislikes: 178
 * Total Accepted:    995.1K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the postorder traversal of its
 * nodes' values.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 * Output: [3,2,1]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of the nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return []
  const left = postorderTraversal(root.left)
  const right = postorderTraversal(root.right)
  return [...left, ...right, root.val]
}
// @lc code=end
