/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
 *
 * https://leetcode.com/problems/cousins-in-binary-tree/description/
 *
 * algorithms
 * Easy (55.43%)
 * Likes:    3851
 * Dislikes: 189
 * Total Accepted:    259.8K
 * Total Submissions: 468.6K
 * Testcase Example:  '[1,2,3,4]\n4\n3'
 *
 * Given the root of a binary tree with unique values and the values of two
 * different nodes of the tree x and y, return true if the nodes corresponding
 * to the values x and y in the tree are cousins, or false otherwise.
 *
 * Two nodes of a binary tree are cousins if they have the same depth with
 * different parents.
 *
 * Note that in a binary tree, the root node is at the depth 0, and children of
 * each depth k node are at the depth k + 1.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,4], x = 4, y = 3
 * Output: false
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1,2,3,null,4], x = 2, y = 3
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [2, 100].
 * 1 <= Node.val <= 100
 * Each node has a unique value.
 * x != y
 * x and y are exist in the tree.
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const queue = [root]
  let depth = 0
  while (queue.length > 0) {
    let n = queue.length
    let hasX = false
    let hasY = false
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      // Exclude siblings
      if (node.left && node.right) {
        const left = node.left.val
        const right = node.right.val
        if ((left === x && right === y) || (left === y && right === x)) return false
      }
      if (node.val === x) hasX = true
      if (node.val === y) hasY = true
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    if (hasX && hasY) return true
    depth++
  }
  return false
}
// @lc code=end
