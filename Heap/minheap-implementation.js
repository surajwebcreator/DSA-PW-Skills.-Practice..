// minheap implementation in javascript 
class minHeap {
    constructor() {
        this.size = 0;
        this.heap = [];
    }
    add(val){
        this.heap.push(val);
        this.size++;
        this.upheapify(this.size-1);
    }
    swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    upheapify(index){
        if(index === 0) return;
        let parentIndex = Math.floor((index-1)/2);
        if(this.heap[parentIndex] > this.heap[index]) this.swap(this.heap, parentIndex, index);
        this.upheapify(parentIndex);
    }
    print(){
        return this.heap;
    }

}

let pq = new minHeap();
pq.add(5);
pq.add(3);
pq.add(8);
pq.add(1);
console.log(pq.print());