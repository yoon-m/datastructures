const maxSubarr = (nums) => {
    let maxSum = nums[0],
        currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // add the current item in the array
        currentSum += nums[i];
        
        // first check if the current sum is greater than the biggest sum we've seen
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        // if currentSum is negative, we want to reset to 0 because we'll always get
        // a bigger sum from a higher starting point
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
};

console.log(maxSubarr([-2, -1, -3]));
console.log(maxSubarr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

