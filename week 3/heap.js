class MaxHeap {
    constructor() {
        this.heap = [];
    };

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

    removeMax() {
        if (this.heap.length === 0) {
            return null;
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    };

    heapifyDown(index) {
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this.heapifyDown(largest)
        }
    };

    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    };
}

const heap = new MaxHeap();

heap.insert(10)
heap.insert(20)
heap.insert(5)
console.log('Builded heap...');
console.log(heap.heap);

console.log('Removed max...')
console.log(heap.removeMax());

console.log('After removed...');
console.log(heap.heap);

console.log('Peek :',heap.peek());