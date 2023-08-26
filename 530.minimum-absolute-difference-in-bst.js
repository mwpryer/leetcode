/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
 *
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (58.85%)
 * Likes:    4002
 * Dislikes: 191
 * Total Accepted:    297.4K
 * Total Submissions: 506K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * Given the root of a Binary Search Tree (BST), return the minimum absolute
 * difference between the values of any two different nodes in the tree.
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
 * The number of nodes in the tree is in the range [2, 10^4].
 * 0 <= Node.val <= 10^5
 *
 *
 *
 * Note: This question is the same as 783:
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
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
var getMinimumDifference = function (root) {
  let vals = []
  // Inorder traversal
  const stack = []
  let curr = root
  while (curr || stack.length) {
    if (curr) {
      // Keep traversing left
      stack.push(curr)
      curr = curr.left
    } else {
      // Reached leaf node
      curr = stack.pop()
      vals.push(curr.val)
      curr = curr.right
    }
  }
  // Values are sorted as inorder traversal of BST
  let min = vals[1] - vals[0]
  for (let i = 2; i < vals.length; i++) {
    min = Math.min(min, vals[i] - vals[i - 1])
  }
  return min
}
// @lc code=end
