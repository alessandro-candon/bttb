/**
 *
 * [[3,3,5,0,0,3,1,4],6]
 * {
 *   0: 3,
 *   1: 3,
 *   2: 5,
 *   3: 0,
 *   4: 0,
 *   5: 3,
 *   6: 1,
 *   7: 4
 * }
 *
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let n = prices.length;
    if (n < 2) return 0;
    let left = Array(n).fill(0);
    let right = Array(n).fill(0);
    let minPrice = prices[0];
    for (let i = 1; i < n; i++) {
      minPrice = Math.min(minPrice, prices[i]);
      left[i] = Math.max(left[i - 1], prices[i] - minPrice);
    }
    let maxPrice = prices[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      maxPrice = Math.max(maxPrice, prices[i]);
      right[i] = Math.max(right[i + 1], maxPrice - prices[i]);
    }
    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
      maxProfit = Math.max(maxProfit, left[i] + right[i]);
    }
    return maxProfit;
}

module.exports = maxProfit;
