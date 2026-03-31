class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class dequeLL{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty(){
      return console.log(this.size==0);
    }

    length(){
        return console.log(this.size);
    }

    insertFront(val){
        let newnode = new Node(val);
        if (this.front==null) {
            this.front = this.rear = newnode;
        }else{
            newnode.next = this.front;
            this.front.prev = newnode;
            this.front = newnode;
        }
        this.size++;
    }

    insertRear(val){
        let newnode = new Node(val);
        if (this.rear==null) {
            this.front = this.rear = newnode;
        }else{
            newnode.prev = this.rear;
            this.rear.next = newnode;
            this.rear = newnode;
        }
        this.size++;
    }

    deleteFront(){
        if (this.size==0) {
            console.log("already underflow mai mittar");
        } else {
            this.front = this.front.next;
            if (this.front==null) {
                this.rear = null;
            }else{
                this.front.prev = null;
            }
            this.size--;
        }
    }

    deleteRear(){
        if (this.size==0) {
            console.log("queue is empty");
        } else {
            this.rear = this.rear.prev;
            if (this.rear==null) {
                this.front = null;
            } else {
                this.rear = this.rear.prev;
            }
            this.size--;
        }
    }

    getFront(){
        if (this.size==0) {
            console.log("empty hai");
            return console.log(-1);
        }else{
            return console.log(this.front.val);
        }
    }

    getRear(){
        if (this.size==0) {
            console.log("empty hai");
            return console.log(-1);
        }else{
            return console.log(this.rear.val);
        }
    }

    display(){
        let temp = this.front;
        let res = "";
        while (temp!=null) {
            res += temp.val + " ➖> ";
            temp = temp.next;
        }
        return console.log(res + "null");
    }
}

let que = new dequeLL();
que.isEmpty();
que.insertFront(10);
que.insertFront(20);
que.insertFront(30);
que.insertFront(40);
que.display();
que.length();
que.insertRear(50);
que.display();
que.length();