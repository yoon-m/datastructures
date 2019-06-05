// Naive solution: O(n^2)

// var twoSum = function(numbers, target) {
//     for (var i = 0; i < numbers.length; i++) {
//         for (var j = i + 1; j < numbers.length; j++) {
//             if (numbers[j] + numbers[i] === target) {
//                 return [i + 1, j + 1]
//             }
//         }
//     }
// };

// time-optimized solution: O(n)

var twoSum = function (numbers, target) {
    let elements = {};

    for (var j = 0; j < numbers.length; j++) {
        elements[numbers[j]] = j;
    }

    let counterpart;

    for (var i = 0; i < numbers.length; i++) {
        counterpart = target - numbers[i];

        if (elements[counterpart] !== undefined) {
            let min = Math.min(elements[counterpart], i);
            let max = Math.max(elements[counterpart], i);
            return [min + 1, max + 1];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));