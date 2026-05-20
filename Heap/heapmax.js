class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Insert element
    insert(value) {
        this.heap.push(value);

        this.bubbleUp();
    }

    size(){
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while(index > 0) {

            let parentIndex = Math.floor((index - 1) / 2);

            if(this.heap[parentIndex] >= this.heap[index]) {
                break;
            }

            // swap
            [this.heap[parentIndex], this.heap[index]] =
            [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }
    peek(){
        console.log(this.heap[0])
    }
    print() {
        console.log(this.heap);
    }
}

let h = new MaxHeap();

h.insert(50);
h.insert(100);
h.insert(30);
h.insert(70);

h.print();
h.peek();