const plusOne = digits => {
    let carryOver = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carryOver;

        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            carryOver = 0;
        }
    }

    if (digits[0] === 0) {
        digits.unshift(1);
    }

    return digits;
};