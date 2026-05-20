class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert element
    insert(value) {
        this.heap.push(value);

        this.bubbleUp();
    }

    // Move smaller element upward
    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {

            let parentIndex = Math.floor((index - 1) / 2);

            // parent already smaller
            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }

            // swap
            [this.heap[parentIndex], this.heap[index]] =
            [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    peek(){
        console.log(this.heap[0]);
    }

    print() {
        console.log(this.heap);
    }
}

let h = new MinHeap();

h.insert(50);
h.insert(20);
h.insert(10);
h.insert(40);
h.insert(5);

h.print();
h.peek();