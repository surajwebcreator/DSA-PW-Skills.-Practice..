// first method
// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     add(x){
//         this.items.push(x);
//     }
//     remove(){
        // return this.items.shift();
//     }
//     peek(){
//         return this.items[0];
//     }
//     isEmpty(){
//         return this.items.length == 0;
//     }
//     size(){
//         return this.items.length;
//     }
// }


// second method
class Queue {
    constructor() {
        this.items = [];
        this.frontIndex = 0;
    }

    add(x) {
        this.items.push(x);
    }

    remove() {
        if (this.isEmpty()) return null;
        return this.items[this.frontIndex++];
    }

    peek() {
        return this.items[this.frontIndex];
    }

    isEmpty() {
        return this.frontIndex >= this.items.length;
    }
    print(){
        console.log(this.items.slice(this.frontIndex));
    }

    size() {
        return this.items.length - this.frontIndex;
    }
}

let que = new Queue();

que.add(4);
que.add(8);
que.add(12);
que.add(16);
que.print();
que.remove();
que.print();
let active = que.items.slice(que.frontIndex).reverse();
console.log(active);
que.print();