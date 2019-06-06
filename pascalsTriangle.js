var generate = function(numRows) {
    let output = [];
    
    while (output.length < numRows) {
        if (output.length === 0) {
            output.push([1]);
        } else {
            var lastSubArr = output[output.length - 1];
            var newSubArr = [1];
            
            for (var i = 0; i < lastSubArr.length - 1; i++) {
                newSubArr.push(lastSubArr[i] + lastSubArr[i + 1]);
            }
            
            newSubArr.push(1);
            
            output.push(newSubArr);
        }
    }
    
    return output;
};

console.log(generate(5));

// Time Complexity: O(n^2)
// Space Complexity: O(n)