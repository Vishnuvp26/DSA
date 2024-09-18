class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    };

    heapifyUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    };
};

const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
console.log(heap.heap);