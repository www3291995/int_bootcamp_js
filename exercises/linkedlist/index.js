// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.count++;
    }

    size() {
        //1
        return this.count;

        //2
        //let i = 0;
        //let tmp = this.head;
        //while (tmp) {
        //    tmp = tmp.next;
        //    i++;
        //}
        //return i;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
        this.count = 0;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        this.count--;
    }

    removeLast() {
        if (!this.head || !this.head.next) {
            this.head = null;
            return;
        }

        let tmp = this.head;
        let pre = tmp;
        while (tmp.next != null) {
            pre = tmp;
            tmp = tmp.next;
        }
        pre.next = null;
        this.count--;
    }

    insertLast(record) {
        const newNode = new Node(record);
        const tmp = this.getLast();
        if (!tmp) {
            this.head = newNode;
            this.count++;
            return;
        }

        tmp.next = newNode;
        this.count++;
    }

    getAt(index) {
        if (this.size() - 1 < index)
            return null;

        let tmp = this.head;
        while (index > 0) {
            tmp = tmp.next;
            index--;
        }

        return tmp;
    }

    removeAt(index) {
        if (this.size() - 1 < index)
            return;
        if (index === 0) {
            this.removeFirst();
            return;
        }
        if (index === this.size() - 1) {
            this.removeLast();
            return;
        }

        const tmp = this.getAt(index);
        let pre = this.getAt(index - 1);
        pre.next = tmp.next;
        this.count--;
    }

    insertAt(data, index) {
        if (index === 0) {
            this.insertFirst(data);
            return;
        }
        if (index >= this.size()) {
            this.insertLast(data);
            return;
        }

        const tmp = this.getAt(index);
        let pre = this.getAt(index - 1);
        let mynode = new Node(data);        
        pre.next = mynode;
        mynode.next = tmp;
        this.count++;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
