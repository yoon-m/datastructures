var removeElement = function (nums, val) {
    var counter = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            [nums[i], nums[counter]] = [nums[counter], nums[i]]
            counter++;
        }
    }

    for (var i = 0; i < counter; i++) {
        nums.shift();
    }

    return nums.length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));