class Stack {
    constructor() {
        this.items = []; // empty array to store stack elements
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.isEmpty()) {
            return "stack is empty";
        }
        return this.items.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return "stack is empty"
        }
        return this.items[this.items.length - 1];
    }

    removeIndex(index) {
        if(index < 0 || index >= this.size()) {
            return false;
        }
        
        const tempStack = new Stack();
        const target = this.size() - index - 1;
        
        for(let i = 0; i < target; i++) {
            tempStack.push(this.pop());
        }
        this.pop(); // Remove the element at the target index
        
        while(!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }
    }

    print() {
        console.log(this.items.toString());
    }        

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

stack.removeIndex(2);
stack.print();