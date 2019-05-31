var singleNumber = function(nums) {
    let count = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1;
        } else {
            count[nums[i]] += 1;
        }
    }
    
    for (let key in count) {
        if (count[key] === 1) {
            return key;
        }
    }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));