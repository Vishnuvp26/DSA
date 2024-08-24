class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        if (this.top) {
            node.next = this.top;
        }
        this.top = node;
        this.size++;
    }

    pop() {
        if (!this.top) {
            return "Stack is empty";
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.value;
    }

    // Peek: Return the top element without removing it
    peek() {
        if (!this.top) {
            return "Stack is empty";
        }
        return this.top.value;
    }

    isEmpty() {
        return this.size === 0;
    }
    
    size() {
        return this.size;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20