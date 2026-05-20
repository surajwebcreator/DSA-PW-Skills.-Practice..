class MaxHeap {
    constructor() {
        this.heap = []; 
    }

    // add
    add(value){
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

    remove() {

    if(this.heap.length === 0) {
        return null;
    }

    if(this.heap.length === 1) {
        return this.heap.pop();
    }

    let min = this.heap[0];

    // last element ko top pe lao
    this.heap[0] = this.heap.pop();

    this.bubbleDown();

    return min;
}

bubbleDown() {

    let index = 0;
    let length = this.heap.length;

    while(true) {

        let left = 2 * index + 1;
        let right = 2 * index + 2;

        let largest = index;

        // left child compare
        if(left < length &&
           this.heap[left] > this.heap[largest]) {

            largest = left;
        }

        // right child compare
        if(right < length &&
           this.heap[right] > this.heap[largest]) {

            largest = right;
        }
        // head valid
        if(largest === index) {
            break;
        }

        // swap
        [this.heap[index], this.heap[largest]] =
        [this.heap[largest], this.heap[index]];

        index = largest;
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
let arr = [10, 2, 3 , 8, -4, -2, 6];
let k = 4;

for (const ele of arr) {
    h.add(ele);
    if(h.size()>k) h.remove();
}

h.peek();