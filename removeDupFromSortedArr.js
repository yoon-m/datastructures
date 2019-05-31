var removeDuplicates = function (nums) {
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        if (nums[i] === nums[i + 1] && nums[i] !== undefined) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));