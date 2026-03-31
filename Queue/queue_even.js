// first method
class Queue {
    constructor() {
        this.items = [];
    }
    add(x){
        this.items.push(x);
    }
    remove(){
        return this.items.shift();
    }
    peek(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items);
    }
}
function oddelem(){
    while (!que.isEmpty()) {
        que.remove();
        if(!que.isEmpty()) newque.add(que.remove());
    }
    // que = newque;
}



let que = new Queue();
let newque = new Queue();

que.add(10);
que.add(20);
que.add(30);
que.add(40);
que.add(50);
que.add(60);
que.print();
oddelem();
que.print();
newque.print();