/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 *
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
 *
 * algorithms
 * Easy (61.10%)
 * Likes:    6331
 * Dislikes: 250
 * Total Accepted:    485.3K
 * Total Submissions: 794.2K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n9'
 *
 * Given the root of a binary search tree and an integer k, return true if
 * there exist two elements in the BST such that their sum is equal to k, or
 * false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [5,3,6,2,4,null,7], k = 9
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [5,3,6,2,4,null,7], k = 28
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -10^4 <= Node.val <= 10^4
 * root is guaranteed to be a valid binary search tree.
 * -10^5 <= k <= 10^5
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
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function (root, k) {
  const seen = {}
  function _findTarget(node) {
    if (!node) return false
    if (seen[k - node.val]) return true
    seen[node.val] = true
    const left = _findTarget(node.left)
    const right = _findTarget(node.right)
    return left || right
  }
  return _findTarget(root)
}
// @lc code=end
