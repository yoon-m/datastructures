// second attempt
var countAndSay = function (n) {
    let output = '1';

    for (let i = 1; i < n; i++) {
        output = sayNum(output);
    }

    return output;
};

function sayNum(n) {
    digitArr = n.split('');
    output = [];
    let prevNum = digitArr.shift();
    let count = 1;

    for (let i = 0; i < digitArr.length; i++) {
        if (prevNum === digitArr[i]) {
            count++;
        } else {
            output.push(count);
            count = 1;
            output.push(prevNum);
            prevNum = digitArr[i];
        }
    }

    output.push(count);
    output.push(prevNum);

    return output.join('');
}

// time complexity: O(n * m) where:
// n is the given n
// m is the number of digits in the longest output