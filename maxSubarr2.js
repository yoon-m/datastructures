var maxSubArray = function (nums) {
    let prev = 0;
    let max = -Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(nums[i], nums[i] + prev);
        max = Math.max(max, prev);
    }

    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Number.MAX_VALUE returns the largest safe integer
// we don't use MIN_VALUE because it returns the smallest float