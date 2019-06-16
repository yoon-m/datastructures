// function stepsToZero(s) {
//     let num = parseInt(s, 2);
//     let steps = 0;

//     while (num > 0) {
//         if (num % 2 === 0) {
//             num = Math.floor(num / 2);
//         } else {
//             num--;
//         }

//         steps++;
//     }

//     return steps;
// }

// console.log(stepsToZero('011100'));

// function solution(arr) {
//     let uniqueElements = new Set(arr);

//     for (let i = 1; i <= Number.MAX_VALUE; i++) {
//         if (!uniqueElements.has(i)) {
//             return i;
//         }
//     }
// }

// console.log(solution([0, 1, 3, 6, 4, 1, 2]));

// function cmp(a, b) { return a - b; }

// function solution(A, B) {
//     var n = A.length;
//     var m = B.length;
//     A.sort(cmp);
//     B.sort(cmp);
//     var i = 0;
//     for (var k = 0; k < n; k++) {
//         if (i <= m - 1 && B[i] < A[k])
//             i += 1;
//         if (A[k] == B[i])
//             return A[k];
//     }
//     return -1;
// }
// console.log([1, 3, 2, 1].sort(cmp));
// console.log(solution([1, 3, 2, 1], [3, 2]));


// function solution(A) {
//     let allZeroes = false;
//     let totalStrokes = 0;

//     while (!allZeroes) {
//         allZeroes = true;

//         let streak = false;
//         let numStreaks = 0;

//         for (let i = 0; i < A.length; i++) {
//             let currentNum = A[i];

//             if (currentNum !== 0) {
//                 if (!streak) {
//                     streak = true;
//                 }
//                 allZeroes = false;
//             } else if (currentNum === 0 && streak) {
//                 numStreaks++;
//                 streak = false;
//             }

//             if (currentNum > 0) {
//                 A[i] = A[i] - 1;
//             }
//         }

//         if (!allZeroes && streak) {
//             numStreaks++;
//         }

//         totalStrokes += numStreaks;
//     }

//     return totalStrokes;
// }

// console.log(solution([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]));

function solution(S) {
    let num = parseInt(S, 2);
    let steps = 0;

    while (num > 0) {
        if (num % 2 === 0) {
            num = Math.floor(num / 2);
        } else {
            num--;
        }
        steps++;
    }

    return steps;
}

console.log(solution('01'));