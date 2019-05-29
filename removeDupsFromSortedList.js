var deleteDuplicates = function (head) {
    if (head === null) return head;

    let prev;
    let current = head;

    while (current.next) {
        if (current.next.val === current.val) {
            current.next = current.next.next;
            continue;
        }

        prev = current;
        if (current.next) {
            current = current.next;
        }
    }

    return head;
};