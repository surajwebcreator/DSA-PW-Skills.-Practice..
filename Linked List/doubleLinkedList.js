// using double linked list with prev method
class Node {
    constructor(val){
        this.val = val;
        // this.next = null;
        // this.prev = null;
    }
}
class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

     // add method
    add(val){
        let newNode = new Node(val);
        if(this.head==null) this.head = newNode;
        else{
            let curr = this.head;
            while (curr.next !=null) {
                curr = curr.next;
            }   
            curr.next = newNode;
            newNode.prev = curr; // assiging prev to new node
            this.tail = newNode;
        }
       }
        display(){
        let curr = this.head;
        let res = "";
        while(curr!=null){
            res += curr.val + " ➖> ";
            curr = curr.next;
        }
        console.log(res + "null");
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
            temp.prev = null;
        }  
        this.size++;
    }

     // delete at head of linked list
    deleteAtHead(){
        this.head = this.head.next;
        this.head.prev = null;
        // let temp = new Node(val);
        // if(this.head === null){
        //     this.head = temp;
        //     this.tail = temp;
        // } else {
        //     temp.next = this.head;
        //     this.head = temp;
        //     temp.prev = null;
        // }  
        this.size--;
    } 

     // insert at end of linked list
    insertAtTail(val){
        let temp = new Node(val);
        if(this.head === null){
            this.head = temp;
            this.tail = temp;
        } else {
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
        }   
        this.size++;
    }

    // display reverse method
    displayreverse(){
        let curr = this.head;
        let res = "";
        while(curr.next!=null){
            curr = curr.next;

        }
        while(curr!=null){
            res += curr.val + " ➖> ";
            curr = curr.prev;
        }
        console.log(res + "null");
    }
}

let list = new DoubleLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
// list.display();
// list.displayreverse();
list.insertAtHead(5);
list.insertAtTail(10);
list.insertAtTail(30);
list.insertAtTail(70);
// list.display();
// list.deleteAtHead();
list.display();