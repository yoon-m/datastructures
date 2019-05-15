// Set constructor takes an iterable object (like an array)
    // and turns it into a set (unique entries)
// we take that set and turn it back into an array
function myUnique(arr) {
    return [...new Set(arr)];
}

console.log(myUnique([1, 2, 2, 3, 4, 5, 4, 1]));