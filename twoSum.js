const twoSum = (nums, target) => {
    let numsHash = {};
    let counterPart;
    let output = [];

    for (let i = 0; i < nums.length; i++){
        counterPart = target - nums[i];
        
        numsHash[nums[i]] = i;

        if (numsHash[counterPart] !== undefined && numsHash[counterPart] !== i) {
            output.push([numsHash[counterPart], i]);
        }
    }

    return output;
};

// Originally had: if (numsHash[counterPart] && numsHash[counterPart] !== i) {
    // doesn't work because 0 is falsey in JS
    // be careful about using existence in logical checks

console.log(twoSum([2, 7], 9));