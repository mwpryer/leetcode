/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (49.66%)
 * Likes:    9329
 * Dislikes: 529
 * Total Accepted:    1.2M
 * Total Submissions: 2.3M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -10^4 <= Node.val <= 10^4
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  function getBalancedHeight(node) {
    if (!node) return [true, 0]
    const [leftBalanced, leftHeight] = getBalancedHeight(node.left)
    const [rightBalanced, rightHeight] = getBalancedHeight(node.right)
    const balanced = Math.abs(leftHeight - rightHeight) <= 1 && leftBalanced && rightBalanced
    const height = Math.max(leftHeight, rightHeight) + 1
    return [balanced, height]
  }
  return getBalancedHeight(root)[0]
}
// @lc code=end
