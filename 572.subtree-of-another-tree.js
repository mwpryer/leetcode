/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 *
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 *
 * algorithms
 * Easy (46.79%)
 * Likes:    7655
 * Dislikes: 443
 * Total Accepted:    709.2K
 * Total Submissions: 1.5M
 * Testcase Example:  '[3,4,5,1,2]\n[4,1,2]'
 *
 * Given the roots of two binary trees root and subRoot, return true if there
 * is a subtree of root with the same structure and node values of subRoot and
 * false otherwise.
 *
 * A subtree of a binary tree tree is a tree that consists of a node in tree
 * and all of this node's descendants. The tree tree could also be considered
 * as a subtree of itself.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,4,5,1,2], subRoot = [4,1,2]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the root tree is in the range [1, 2000].
 * The number of nodes in the subRoot tree is in the range [1, 1000].
 * -10^4 <= root.val <= 10^4
 * -10^4 <= subRoot.val <= 10^4
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSameTree(root1, root2) {
  if (!root1 && !root2) return true
  if (!root1 || !root2) return false
  return root1.val === root2.val && isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
}
var isSubtree = function (root, subRoot) {
  if (!root) return false
  if (!subRoot) return true
  return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}
// @lc code=end
