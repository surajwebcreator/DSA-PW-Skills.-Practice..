class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // push operation
    push(x){
        let temp = new Node(x);
        temp.next = this.head;
        this.head = temp;
        this.size++;
    }
    // size
    getsize(){
        return this.size;
    }
    // pop operation
    pop(){
        if(this.head==null){
            console.log('head hi null hai re');
            return -1;
        }
        let x = this.head.val;
        this.head = this.head.next;
        this.size--;
        return x;
    }
    // peek operation
    peek(){
        if(this.head==null){
            console.log('head hi null hai re');
            return -1;
        }
        let x = this.head.val;
        return x;
    }
    // isEmpty
    isEmpty(){
        return (this.size==0) ? true : false;
    }
    // display operation
    display(){
        this.displayrec(this.head);
    }
    displayrec(h){
        if(h==null) return;
        this.displayrec(h.next);
        console.log('print', h.val);
    }
}

let s = new Stack();

s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(70);
s.push(20);
s.push(80);

console.log("Top:", s.peek());

s.pop();

console.log("After pop:");
s.display();
console.log(s.getsize());