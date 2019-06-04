var majorityElement = function (nums) {
    let half = Math.ceil(nums.length / 2);
    let count = {};

    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1;
        } else {
            count[nums[i]]++;
        }
    }

    for (let key in count) {
        if (count[key] >= half) {
            return key;
        }
    }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));