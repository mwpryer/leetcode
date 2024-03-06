/*
 * @lc app=leetcode id=1275 lang=javascript
 *
 * [1275] Find Winner on a Tic Tac Toe Game
 *
 * https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/description/
 *
 * algorithms
 * Easy (54.03%)
 * Likes:    1450
 * Dislikes: 330
 * Total Accepted:    120.7K
 * Total Submissions: 223.6K
 * Testcase Example:  '[[0,0],[2,0],[1,1],[2,1],[2,2]]'
 *
 * Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of
 * Tic-Tac-Toe are:
 *
 *
 * Players take turns placing characters into empty squares ' '.
 * The first player A always places 'X' characters, while the second player B
 * always places 'O' characters.
 * 'X' and 'O' characters are always placed into empty squares, never on filled
 * ones.
 * The game ends when there are three of the same (non-empty) character filling
 * any row, column, or diagonal.
 * The game also ends if all squares are non-empty.
 * No more moves can be played if the game is over.
 *
 *
 * Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that
 * the i^th move will be played on grid[rowi][coli]. return the winner of the
 * game if it exists (A or B). In case the game ends in a draw return "Draw".
 * If there are still movements to play return "Pending".
 *
 * You can assume that moves is valid (i.e., it follows the rules of
 * Tic-Tac-Toe), the grid is initially empty, and A will play first.
 *
 *
 * Example 1:
 *
 *
 * Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
 * Output: "A"
 * Explanation: A wins, they always play first.
 *
 *
 * Example 2:
 *
 *
 * Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
 * Output: "B"
 * Explanation: B wins.
 *
 *
 * Example 3:
 *
 *
 * Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
 * Output: "Draw"
 * Explanation: The game ends in a draw since there are no moves to make.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= moves.length <= 9
 * moves[i].length == 2
 * 0 <= rowi, coli <= 2
 * There are no repeated elements on moves.
 * moves follow the rules of tic tac toe.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const grid = new Array(3).fill().map(() => new Array(3).fill(null))

  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i]
    if (i % 2 === 0) {
      grid[row][col] = "A"
    } else {
      grid[row][col] = "B"
    }
  }

  for (let i = 0; i < 3; i++) {
    if (grid[i][0] && grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2]) return grid[i][0]
    if (grid[0][i] && grid[0][i] === grid[1][i] && grid[0][i] === grid[2][i]) return grid[0][i]
  }
  if (grid[0][0] && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) return grid[0][0]
  if (grid[0][2] && grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0]) return grid[0][2]

  return moves.length === 9 ? "Draw" : "Pending"
}
// @lc code=end
