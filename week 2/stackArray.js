class Stack {
    constructor() {
        this.items = []; // empty array to store stack elements
    }

    isEmpty() {
        return this.items.length === 0;
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
 
console.log('After pop...');
stack.pop();
stack.print();