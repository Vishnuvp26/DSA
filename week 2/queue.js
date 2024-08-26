class Queue {
    constructor() {
        this.items = [];
    }
    
    isEmpty() {
        return this.items.length == 0
    }
    
    enqueue(element){
        this.items.push(element)
    }   
    
    dequeue(){
        return this.items.shift()
    }
    
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    
    size(){
        return this.items.length;
    }
    
    print(){
        console.log(this.items.toString());
    }
    
};

const queue = new Queue();

console.log('enqueue: added to tail')
queue.enqueue(40)
queue.enqueue(20)
queue.enqueue(90)
queue.print()
console.log('queue size: ' + queue.size());
console.log('peek: ' + queue.peek());

console.log('dequeue: remove from front: ' + queue.dequeue());