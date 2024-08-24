class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    delete(index) {
        if (index < 0 || index >= this.size) {
            return false;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        console.log(`Removed node ${removedNode.value}`);
    }

    search(value) {
        if (this.isEmpty()) {
            return false;
        }
        let index = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                console.log(`Value ${value} found at index ${index}`);
                return true;
            }
            curr = curr.next;
            index++;
        }
        return false;
    }

    fromArray(arr) {
        arr.forEach(value => this.append(value));
    }

    print() {
        if (this.isEmpty()) {
            return false;
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += curr.value + ' ';
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    getLength() {
        return this.size;
    }

    removeDuplicates() {
        if (this.isEmpty()) {
            return;
        }

        let curr = this.head;

        while (curr && curr.next) {
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next;  // Remove duplicate node
                this.size--;
            } else {
                curr = curr.next; // move to next node
            }
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        
        while (current !== null) {
            next = current.next;   // Store next node
            current.next = prev;   // Reverse the current node's pointer
            prev = current;        // Move prev and current one step forward
            current = next;
        }
        this.head = prev;  // Update the head to the new first node
    }
}

// Usage example:
let list = new LinkedList();
list.fromArray([10, 20, 20, 30, 40, 40, 50]);

console.log("Original List:");
list.print();

list.removeDuplicates();
console.log("List after removing duplicates:");
list.print();

list.reverse();
console.log("List after reversing:");
list.print();

console.log("Length of the linked list:", list.getLength());
