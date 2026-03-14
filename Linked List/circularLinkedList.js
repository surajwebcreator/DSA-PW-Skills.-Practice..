
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class circularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 1;
    }
    
    // making add method
    add(num){
        let newnode = new Node(num);
        if(this.head==null) {
            this.head = newnode;
             newnode.next = this.head;
    } else {
        let temp = this.head;
        while (temp.next!=this.head) {
            temp = temp.next;
        }
        this.size++;
        temp.next = newnode;
        newnode.next = this.head;
    }
}

    // display method
    display(){
        let temp = this.head;
        let res = "";
        do{
            res += temp.val + " ➖> ";
            temp = temp.next;
        }
        while(temp!=this.head);
        console.log(res + "back to head");
    }
}

let arr = [1,2,3,4,5,6,7];
let list = new circularLinkedList();
for (let i = 0; i < arr.length; i++) {
        list.add(arr[i]);    
}
list.display();