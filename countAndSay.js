// naive approach
var countAndSay = function (n) {
    let currentNum = 1;
    let count = 1;

    while (count < n) {
        currentNum = say(currentNum);
    }

    return currentNum.toString();
};

function say(n) {
    let digitArr = n.toString().split('');
    let prevDigit = digitArr.shift();
    let count = 1;
    let output = [];

    for (let i = 0; i < digitArr.length; i++) {
        if (digitArr[i] === prevDigit) {
            count++;
        } else {
            output.push(count);
            output.push(prevDigit);
            count = 1;
        }

        prevDigit = digitArr[i];
    }
    output.push(count);
    output.push(prevDigit);

    return parseInt(output.join(''));
}

// O(n^2) time complexity
// try attempting it recursively