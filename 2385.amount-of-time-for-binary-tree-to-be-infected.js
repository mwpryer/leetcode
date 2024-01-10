/*
 * @lc app=leetcode id=2385 lang=javascript
 *
 * [2385] Amount of Time for Binary Tree to Be Infected
 *
 * https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/
 *
 * algorithms
 * Medium (58.92%)
 * Likes:    1536
 * Dislikes: 15
 * Total Accepted:    38.5K
 * Total Submissions: 65.1K
 * Testcase Example:  '[1,5,3,null,4,10,6,9,2]\n3'
 *
 * You are given the root of a binary tree with unique values, and an integer
 * start. At minute 0, an infection starts from the node with value start.
 *
 * Each minute, a node becomes infected if:
 *
 *
 * The node is currently uninfected.
 * The node is adjacent to an infected node.
 *
 *
 * Return the number of minutes needed for the entire tree to be infected.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,5,3,null,4,10,6,9,2], start = 3
 * Output: 4
 * Explanation: The following nodes are infected during:
 * - Minute 0: Node 3
 * - Minute 1: Nodes 1, 10 and 6
 * - Minute 2: Node 5
 * - Minute 3: Node 4
 * - Minute 4: Nodes 9 and 2
 * It takes 4 minutes for the whole tree to be infected so we return 4.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1], start = 1
 * Output: 0
 * Explanation: At minute 0, the only node in the tree is infected so we return
 * 0.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^5].
 * 1 <= Node.val <= 10^5
 * Each node has a unique value.
 * A node with a value of start exists in the tree.
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  const graph = {}
  const stack = [{ ...root, parent: null }]
  while (stack.length > 0) {
    const curr = stack.pop()
    if (!graph[curr.val]) graph[curr.val] = []
    if (curr.parent) {
      graph[curr.val].push(curr.parent.val)
    }
    if (curr.left) {
      graph[curr.val].push(curr.left.val)
      stack.push({ ...curr.left, parent: curr })
    }
    if (curr.right) {
      graph[curr.val].push(curr.right.val)
      stack.push({ ...curr.right, parent: curr })
    }
  }
  let minute = 0
  const infected = new Set()
  infected.add(start)
  const queue = [start]
  while (queue.length > 0) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const curr = queue.shift()
      for (const neighbor of graph[curr]) {
        if (infected.has(neighbor)) continue
        infected.add(neighbor)
        queue.push(neighbor)
      }
    }
    minute++
  }
  return minute - 1
}
// @lc code=end
