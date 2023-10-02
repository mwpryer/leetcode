/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
 *
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/
 *
 * algorithms
 * Easy (59.48%)
 * Likes:    3352
 * Dislikes: 403
 * Total Accepted:    229.9K
 * Total Submissions: 386.7K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * Given the root of a Binary Search Tree (BST), return the minimum difference
 * between the values of any two different nodes in the tree.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,6,1,3]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,0,48,null,null,12,49]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [2, 100].
 * 0 <= Node.val <= 10^5
 *
 *
 *
 * Note: This question is the same as 530:
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
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
 * @return {number}
 */
var minDiffInBST = function (root) {
  const vals = []
  const stack = []
  let curr = root
  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr)
      curr = curr.left
    } else {
      curr = stack.pop()
      vals.push(curr.val)
      curr = curr.right
    }
  }
  let min = vals[1] - vals[0]
  for (let i = 2; i < vals.length; i++) {
    min = Math.min(min, vals[i] - vals[i - 1])
  }
  return min
}
// @lc code=end
