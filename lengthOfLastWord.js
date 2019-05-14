// this solution can be optimized for space, while still being O(n) time
function lengthOfLastWord(str) {
    const wordLengths = str.split(' ').filter(word => {
        return word.length > 0;
    });

    if (wordLengths.length === 0) {
        return 0;
    }
    return wordLengths[wordLengths.length - 1].length;
}

// this solution still runs in O(n) time, but also uses constant space
function lengthOfLastWord2(str) {
    let counter = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            return counter;
        } else {
            counter++;
        }
    }

    return counter;
}

// console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord2("a "));
console.log(lengthOfLastWord2("Hello World"));