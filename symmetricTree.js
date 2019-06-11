var isSymmetric = function (root) {
    // implement a queue and compare each tree/subtree with its counterpart
    let q = [root, root];

    while (q.length !== 0) {
        t1 = q.shift();
        t2 = q.shift();

        if (t1 === null && t2 === null) continue;
        if (t1 === null || t2 === null) return false;
        if (t1.val !== t2.val) return false;

        q.push(t1.left);
        q.push(t2.right);
        q.push(t1.right);
        q.push(t2.left);
    }

    return true;
};

// O(n) time