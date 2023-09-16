/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 *
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
 *
 * algorithms
 * Easy (56.67%)
 * Likes:    5052
 * Dislikes: 3094
 * Total Accepted:    452.9K
 * Total Submissions: 799.6K
 * Testcase Example:  '["KthLargest","add","add","add","add","add"]\n' +
  '[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]'
 *
 * Design a class to find the k^th largest element in a stream. Note that it is
 * the k^th largest element in the sorted order, not the k^th distinct
 * element.
 * 
 * Implement KthLargest class:
 * 
 * 
 * KthLargest(int k, int[] nums) Initializes the object with the integer k and
 * the stream of integers nums.
 * int add(int val) Appends the integer val to the stream and returns the
 * element representing the k^th largest element in the stream.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 * Output
 * [null, 4, 5, 5, 8, 8]
 * 
 * Explanation
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3);   // return 4
 * kthLargest.add(5);   // return 5
 * kthLargest.add(10);  // return 5
 * kthLargest.add(9);   // return 8
 * kthLargest.add(4);   // return 8
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= k <= 10^4
 * 0 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * -10^4 <= val <= 10^4
 * At most 10^4 calls will be made to add.
 * It is guaranteed that there will be at least k elements in the array when
 * you search for the k^th element.
 * 
 * 
 */

// @lc code=start
class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(val) {
    this.heap.push(val)
    let idx = this.heap.length - 1
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      if (this.heap[parentIdx] <= this.heap[idx]) break
      const temp = this.heap[idx]
      this.heap[idx] = this.heap[parentIdx]
      this.heap[parentIdx] = temp
      idx = parentIdx
    }
  }

  remove() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    let idx = 0
    while (idx < this.heap.length) {
      let leftIdx = idx * 2 + 1
      let rightIdx = idx * 2 + 2
      let swapIdx = idx
      if (leftIdx < this.heap.length && this.heap[leftIdx] < this.heap[swapIdx]) {
        swapIdx = leftIdx
      }
      if (rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[swapIdx]) {
        swapIdx = rightIdx
      }
      if (swapIdx === idx) break
      const temp = this.heap[idx]
      this.heap[idx] = this.heap[swapIdx]
      this.heap[swapIdx] = temp
      idx = swapIdx
    }
    return min
  }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new MinHeap()
  this.k = k
  for (let i = 0; i < nums.length; i++) {
    this.heap.insert(nums[i])
  }
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.insert(val)
  while (this.heap.heap.length > this.k) {
    this.heap.remove()
  }
  return this.heap.heap[0]
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
