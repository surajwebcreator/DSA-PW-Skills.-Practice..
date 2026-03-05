class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// creating linked list class
class LinkedList{
    constructor(){
        this.head = null;
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
        }
        this.size++;
    }
    // value based swap
    // swapNode method
    // swapNode(idx1, idx2){
    //     let first = this.head;
    //     let second = this.head;
    //     while (first.val!=idx1 ) {
    //         first = first.next;
    //     }
    //     while (second.val!=idx2 ) {
    //         second = second.next;
    //     }
    //     let temp = first.val;
    //     first.val = second.val;
    //     second.val = temp;
    //     // console.log(this.head)
    // }

    swapNode(idx1, idx2){
        if(idx1==idx2) return;
        let prev1 = null, curr1= this.head;
        while (curr1 && curr1.val!=idx1) {
            prev1 = curr1;
            curr1 = curr1.next;
        }
        let prev2 = null, curr2= this.head;
        while (curr2 && curr2.val!=idx2) {
            prev2 = curr2;
            curr2 = curr2.next;
        }
        if(!curr1 || !curr2) return;
        if(prev1) prev1.next = curr2;
        else this.head = curr2;

        if(prev2) prev2.next = curr1;
        else this.head = curr1;
        
        let temp = curr1.next;
        curr1.next = curr2.next;
        curr2.next = temp;
        // console.log(this.head)
    }

    // display method
    display(){
        let curr = this.head;
        let res = "";
        while(curr!=null){
            res += curr.val + " ➖> ";
            curr = curr.next;
        }
        console.log(res + "null");
    }
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.display();
// list.swapNode(20, 40);
list.swapNode(10, 40);
list.display();

// Linked List: 10 -> 20 -> 30 -> 40 -> null
// swapNodes(20, 30)
