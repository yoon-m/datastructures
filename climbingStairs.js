// You are climbing a stair case.It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps.In how many distinct ways 
// can you climb to the top ?

// Note : Given n will be a positive integer.

var climbStairs = function (n, memo = {}) {
    if (n in memo) return memo[n];

    if (n === 0) return 1;
    if (n === 1) return 1;

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};

console.log(climbStairs(10));