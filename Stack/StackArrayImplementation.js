class Stack {
    constructor(size){
        this.arr = new Array(size);
        this.top = -1;
        this.size = size;
    }
    // push operation
    push(val){
        if(this.top==this.size-1){
            console.log("Stack overflow");
            return;
        }
        this.top++;
        this.arr[this.top] = val;
    }
    // pop operation
    pop(){
        if(this.top == -1){
            console.log("Stack is empty/underflow");
            return;
        }
        let removed = this.arr[this.top];
        this.top--;
        return removed;
    }
    // peek operation
    peek(){
        if(this.top == -1) return "Stack is empty";
        return this.arr[this.top];
    }
    // isEmpty operation
    isEmpty(){
        return this.top == -1;
    }
    // currentSize operation
    currentSize(){
       return this.top+1; 
    }
    // print operation
    print(){
        for (let i = this.top; i >=0 ; i--) {
            console.log(this.arr[i]);
        }
    }
}

let s = new Stack(5);

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
s.print();