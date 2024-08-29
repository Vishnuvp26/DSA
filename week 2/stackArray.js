class Stack {
    constructor() {
        this.items = [];
    };

    isEmpty() {
        return this.items.length === 0;
    };

    size() {
        return this.size === 0;
    }

    push(element) {
        this.items.push(element)
    };

    pop() {
        if (this.isEmpty()) {
            return "stack is empty";
        }
        return this.items.pop()
    };

    peek() {
        if (this.isEmpty()) {
            return "stack is empty"
        }
        return this.items[this.items.length - 1];
    };

    removeIndex(index) {
        if(index < 0 || index >= this.size()) {
            return false;
        }
        
        const tempStack = new Stack();
        const target = this.size() - index - 1;
        
        for(let i = 0; i < target; i++) {
            tempStack.push(this.pop());
        }
        this.pop(); // Remove element at the target index
        
        while(!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }
    };


    print() {
        console.log(this.items.toString());
    };
    
    removeMiddle(index) {
        if (this.size() === 0) {
            return null;
        }
        const midIndex = Math.floor(this.size() / 2);
        const tempStack = new Stack();
        for (let i = 0; i < midIndex; i++) {
            tempStack.push(this.pop());
        }
        this.pop();
        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }
    };

};

const stack = new Stack();

console.log('Push...')
stack.push(80);
stack.push(40);
stack.push(50);
stack.push(10);
stack.print();

console.log('peek...')
console.log(stack.peek());

// stack.removeIndex(2);
const middle = Math.floor(stack.items.length / 2);
console.log(`The middle element is ${middle}`)

stack.removeMiddle(middle)
stack.print();