class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class queLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(val){
        let newnode = new Node(val);
        if (this.size==0) {
            this.head = newnode;
            this.tail = newnode;
        }else{
            this.tail.next = newnode;
            this.tail = this.tail.next;
        }
        this.size++;
    }
    remove(){
        if (this.size==0) {
            console.log("already empty brother");
            return -1;
        }
            let x = this.head;
            this.head = this.head.next;
            this.size--;
            return console.log(x.val);
    }
    isEmpty(){
        return console.log(this.size==0);
    }
    peek(){
        if(this.size==0) return -1;
        return console.log(this.head.val);
    }

    display(){
        let res = "";
        let temp = this.head;
        while (temp!=null) {
            res += temp.val + " ➖> ";
            temp = temp.next;
        }
        return console.log(res + "null");
    }
    length(){
        return console.log("length: ", this.size);
    }
}

let que = new queLL();
que.isEmpty();
que.length();
que.add(10);
que.add(20);
que.add(30);
que.add(40);
que.length();
que.isEmpty();
que.peek();
que.display();
que.remove();
que.display();
que.remove();
que.display();
que.length();