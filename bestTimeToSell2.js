// Say you have an array for which the ith element is the price 
// of a given stock on day i.
// Design an algorithm to find the maximum profit.You may complete as many 
// transactions as you like(i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time
// (i.e., you must sell the stock before you buy again).

var maxProfit = function (prices) {
    let totalProfit = 0;
    let currentMax = 0;
    let buyPrice = prices.shift();

    for (let i = 0; i < prices.length; i++) {
        if ((prices[i] - buyPrice) < 0) {
            totalProfit += currentMax;
            currentMax = 0;
            buyPrice = prices[i];
        } else {
            if (prices[i] < prices[i - 1]) {
                totalProfit += currentMax;
                currentMax = 0;
                buyPrice = prices[i];
            } else {
                currentMax = prices[i] - buyPrice;
            }

        }
    }

    totalProfit += currentMax;

    return totalProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));