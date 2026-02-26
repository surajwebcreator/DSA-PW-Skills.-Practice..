// implemetion of linked list in javascript

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // insert at end of linked list
    insertAtTail(val){
        let temp = new Node(val);
        if(this.head === null){
            this.head = temp;
            this.tail = temp;
        } else {
            this.tail.next = temp;
            this.tail = temp;
        }   
        this.size++;
    } 

    // insert at head of linked list
    insertAtHead(val){
        let temp = new Node(val);
        if(this.head === null){
            this.head = temp;
            this.tail = temp;
        } else {
            temp.next = this.head;
            this.head = temp;
        }   
        this.size++;
    } 

    // display linked list
    display(){
        let temp = this.head;
        while(temp !== null){
            console.log(temp.val);
            temp = temp.next;
        }
    }
}

let list = new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.display();
console.log("Size of linked list: " + list.size);
list.insertAtTail(4);
list.insertAtTail(5);
list.display();
console.log("Size of linked list: " + list.size);

// insert at head of linked list
list.insertAtHead(23);
list.insertAtHead(45);
list.display();
console.log("Size of linked list: " + list.size);
