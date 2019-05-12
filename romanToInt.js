const romanToInt = s => {
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let total = 0;
    let i = 0;

    while (i < s.length - 1) {
        if (romanValues[s[i]] < romanValues[s[i + 1]]) {
            total = total + (romanValues[s[i + 1]] - romanValues[s[i]]);
            i = i + 1;
        } else {
            total = total + romanValues[s[i]];
        }

        i = i + 1;
    }

    if (i === s.length - 1) {
        total = total + romanValues[s[i]];
    }

    return total;
};

console.log(romanToInt("LVIII"));