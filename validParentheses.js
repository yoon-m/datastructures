const validParentheses = str => {
    let stack = [];
    let pairs = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '{' || chars[i] === '(' || chars[i] === '[') {
            stack.push(chars[i]);
        } else {
            if (stack.pop() != pairs[chars[i]]) return false;
        }
    }   

    return true;
};

console.log(validParentheses("{[]}")); // => true
console.log(validParentheses("([)]")); // => false