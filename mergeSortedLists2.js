var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) {
        return null;
    }

    let newHead;
    let l1Node = l1;
    let l2Node = l2;

    if (l1 && l2) {
        if (l1.val > l2.val) {
            newHead = new ListNode(l2.val);
            l2Node = l2Node.next;
        } else {
            newHead = new ListNode(l1.val);
            l1Node = l1Node.next;
        }
    } else {
        if (l1) {
            newHead = new ListNode(l1.val);
            l1Node = l1Node.next;
        } else {
            newHead = new ListNode(l2.val);
            l2Node = l2Node.next;
        }
    }


    let currentNode = newHead;

    while (l1Node || l2Node) {
        if (l1Node && l2Node) {
            if (l1Node.val < l2Node.val) {
                currentNode.next = l1Node;
                l1Node = l1Node.next;
            } else {
                currentNode.next = l2Node;
                l2Node = l2Node.next;
            }
        } else {
            if (l1Node) {
                currentNode.next = l1Node;
                l1Node = l1Node.next;
            } else {
                currentNode.next = l2Node;
                l2Node = l2Node.next;
            }
        }

        currentNode = currentNode.next;
    }

    return newHead;
};

// better time complexity, could clean up the logic