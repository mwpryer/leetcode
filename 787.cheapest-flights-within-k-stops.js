/*
 * @lc app=leetcode id=787 lang=javascript
 *
 * [787] Cheapest Flights Within K Stops
 *
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/description/
 *
 * algorithms
 * Medium (37.40%)
 * Likes:    9444
 * Dislikes: 392
 * Total Accepted:    494.3K
 * Total Submissions: 1.3M
 * Testcase Example:  '4\n[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]]\n0\n3\n1'
 *
 * There are n cities connected by some number of flights. You are given an
 * array flights where flights[i] = [fromi, toi, pricei] indicates that there
 * is a flight from city fromi to city toi with cost pricei.
 *
 * You are also given three integers src, dst, and k, return the cheapest price
 * from src to dst with at most k stops. If there is no such route, return
 * -1.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]],
 * src = 0, dst = 3, k = 1
 * Output: 700
 * Explanation:
 * The graph is shown above.
 * The optimal path with at most 1 stop from city 0 to 3 is marked in red and
 * has cost 100 + 600 = 700.
 * Note that the path through cities [0,1,2,3] is cheaper but is invalid
 * because it uses 2 stops.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k
 * = 1
 * Output: 200
 * Explanation:
 * The graph is shown above.
 * The optimal path with at most 1 stop from city 0 to 2 is marked in red and
 * has cost 100 + 100 = 200.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k
 * = 0
 * Output: 500
 * Explanation:
 * The graph is shown above.
 * The optimal path with no stops from city 0 to 2 is marked in red and has
 * cost 500.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 100
 * 0 <= flights.length <= (n * (n - 1) / 2)
 * flights[i].length == 3
 * 0 <= fromi, toi < n
 * fromi != toi
 * 1 <= pricei <= 10^4
 * There will not be any multiple flights between two cities.
 * 0 <= src, dst, k < n
 * src != dst
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = new Array(k + 1).fill().map(() => new Array(n).fill().map(() => new Array(n).fill(Infinity)))
  for (const [from, to, price] of flights) {
    graph[0][from][to] = price
  }
  for (let stop = 1; stop <= k; stop++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        min = graph[stop - 1][row][col]
        for (let i = 0; i < n; i++) {
          min = Math.min(min, graph[stop - 1][row][i] + graph[0][i][col])
        }
        graph[stop][row][col] = min
      }
    }
  }
  return graph[k][src][dst] === Infinity ? -1 : graph[k][src][dst]
}
// @lc code=end
