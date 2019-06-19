function stepper(nums) {
    let table = new Array(nums.length).fill(false);
    table[0] = true;

    for (let i = 0; i < table.length; i++) {
        if (table[i] === true) {
            let maxRange = nums[i];

            for (let j = 1; j <= maxRange; j++) {
                table[j] = true;
            }
        }
    }

    return table[table.length - 1];
}

console.log(stepper([3, 1, 0, 5, 10]));
console.log(stepper([3, 4, 1, 0, 10]));
console.log(stepper([2, 3, 1, 1, 0, 4, 7, 10]));