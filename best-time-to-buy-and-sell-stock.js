/**
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const count = prices.length;
  if (!count) {
    return 0;
  }

  let minPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < count; i++) {
    const current = prices[i];
    const currentProfit = current - minPrice;
    minPrice = current < minPrice ? current : minPrice;

    if (profit < currentProfit) {
      profit = currentProfit;
    }
  }

  return profit ? profit : 0;
};

// tests
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected: 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // Expected: 0
console.log(maxProfit([2, 1, 2, 0, 1]))     // Expected: 1
console.log(maxProfit([2, 4, 1]))           // Expected: 2
