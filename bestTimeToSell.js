// Say you have an array for which the ith element is the price of 
// a given stock on day i.
// If you were only permitted to complete at most one transaction
// (i.e., buy one and sell one share of the stock), design an algorithm 
// to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

var maxProfit = function (prices) {
    let currentMax = 0;
    let buyPrice = prices.shift();

    for (let i = 0; i < prices.length; i++) {
        if ((prices[i] - buyPrice) < 0) {
            buyPrice = prices[i];
        } else {
            if (currentMax < prices[i] - buyPrice) {
                currentMax = prices[i] - buyPrice;
            }
        }
    }

    return currentMax;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));