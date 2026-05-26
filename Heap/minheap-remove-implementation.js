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
        return console.log(this.heap);
    }
    remove(){
        if(this.heap.length==0) return;
        this.swap(this.heap, 0, this.heap.length-1);
        let removed = this.heap.pop();
        this.size--;
        this.downheapify(0);
        return console.log('removed :-', removed);
    }

    downheapify(i){
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smalllest = i;
        if(left<this.heap.length && this.heap[left]<this.heap[smalllest]) smalllest = left;
        if(right<this.heap.length && this.heap[right]<this.heap[smalllest]) smalllest = right;

        if(smalllest!=i){
            this.swap(this.heap, i, smalllest);
            this.downheapify(smalllest);
        }
    }
    size(){
        return this.size;
    }

}

let pq = new minHeap();
pq.add(5);
pq.add(3);
pq.add(8);
pq.add(1);
pq.print();
console.log(pq.size);
pq.remove();
pq.print();
console.log(pq.size);
