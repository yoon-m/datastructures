Array.prototype.flatten = function (level) {
    const dup = this.slice();

    if (!level) {
        for (let i = 0; i < dup.length; i++) {
            if (dup[i] instanceof Array) {
                return ([].concat(...dup)).flatten(level);
            }
        }
    } else {
        for (let i = 0; i < dup.length; i++) {
            if (dup[i] instanceof Array && level != 0) {
                level--;
                return ([].concat(...dup)).flatten(level);
            }
        }
    }
    
    return dup;
};

console.log([1, [2, [3], 4]].flatten());