/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (54.72%)
 * Likes:    13798
 * Dislikes: 313
 * Total Accepted:    1.7M
 * Total Submissions: 3.1M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Could you solve it both recursively and iteratively?
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
var isSymmetric = function (root) {
  function isMirrorTree(left, right) {
    const stack = [left, right]
    while (stack.length) {
      const curr1 = stack.pop()
      const curr2 = stack.pop()
      if (!curr1 && !curr2) return true
      if ((!curr1 && curr2) || (curr1 && !curr2) || curr1.val !== curr2.val) return false
      if (curr1.left || curr2.right) stack.push(curr1.left, curr2.right)
      if (curr1.right || curr2.left) stack.push(curr1.right, curr2.left)
    }
    return true
  }
  return isMirrorTree(root.left, root.right)
}
// @lc code=end
