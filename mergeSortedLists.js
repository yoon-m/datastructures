var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;

    const l1vals = [];
    const l2vals = [];

    let currentNode = l1;

    while (currentNode) {
        l1vals.push(currentNode.val);
        currentNode = currentNode.next;
    }

    currentNode = l2;

    while (currentNode) {
        l2vals.push(currentNode.val);
        currentNode = currentNode.next;
    }

    const sorted = quickSort(l1vals.concat(l2vals));

    const newHead = new ListNode(sorted.shift());
    currentNode = newHead;

    for (let i = 0; i < sorted.length; i++) {
        currentNode.next = new ListNode(sorted[i]);
        currentNode = currentNode.next;
    }

    return newHead;

};

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([pivot]).concat(quickSort(right));
};

// naive approach using quicksort
// can definitely do better because the lists are sorted