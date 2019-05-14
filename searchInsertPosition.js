// this solution is slow because JS uses quicksort (O(nlogn))
// const searchInsert = (nums, target) => {
//     if (nums.includes(target)) {
//         return nums.indexOf(target);
//     } else {
//         nums.push(target);
//         nums.sort(function(a, b) { return a - b });
//         return nums.indexOf(target);
//     }
// };

const searchInsert = (nums, target) => {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        let i = 0;
        while (nums[i] < target) {
            i += 1;
        }
        return i;
    }
};

console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1, 3, 5, 6], 5));