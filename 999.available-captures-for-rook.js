/*
 * @lc app=leetcode id=999 lang=javascript
 *
 * [999] Available Captures for Rook
 *
 * https://leetcode.com/problems/available-captures-for-rook/description/
 *
 * algorithms
 * Easy (68.64%)
 * Likes:    636
 * Dislikes: 626
 * Total Accepted:    62.6K
 * Total Submissions: 91.3K
 * Testcase Example:  '[[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]'
 *
 * On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number
 * of white bishops 'B', black pawns 'p', and empty squares '.'.
 *
 * When the rook moves, it chooses one of four cardinal directions (north,
 * east, south, or west), then moves in that direction until it chooses to
 * stop, reaches the edge of the board, captures a black pawn, or is blocked by
 * a white bishop. A rook is considered attacking a pawn if the rook can
 * capture the pawn on the rook's turn. The number of available captures for
 * the white rook is the number of pawns that the rook is attacking.
 *
 * Return the number of available captures for the white rook.
 *
 *
 * Example 1:
 *
 *
 * Input: board =
 * [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
 * Output: 3
 * Explanation: In this example, the rook is attacking all the pawns.
 *
 *
 * Example 2:
 *
 *
 * Input: board =
 * [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
 * Output: 0
 * Explanation: The bishops are blocking the rook from attacking any of the
 * pawns.
 *
 *
 * Example 3:
 *
 *
 * Input: board =
 * [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
 * Output: 3
 * Explanation: The rook is attacking the pawns at positions b5, d6, and
 * f5.
 *
 *
 *
 * Constraints:
 *
 *
 * board.length == 8
 * board[i].length == 8
 * board[i][j] is either 'R', '.', 'B', or 'p'
 * There is exactly one cell with board[i][j] == 'R'
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  // Find rook
  let rookPos = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        rookPos = [i, j]
        break
      }
    }
  }

  let pawnCount = 0
  const [x, y] = rookPos
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  for (const dir of dirs) {
    for (let i = x + dir[0], j = y + dir[1]; i >= 0 && i < 8 && j >= 0 && j < 8; i += dir[0], j += dir[1]) {
      if (board[i][j] === "B") break
      if (board[i][j] === "p") {
        pawnCount++
        break
      }
    }
  }
  return pawnCount
}
// @lc code=end
