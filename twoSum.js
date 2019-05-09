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

console.log(twoSum([2, 7, 11, -2], 9));