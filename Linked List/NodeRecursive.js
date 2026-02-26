// Starting my new journey with Linked List, I will first implement the Node class which will represent each node in a linked list. Each node will have two properties: 'data' to store the value of the node and 'next' to point to the next node in the list.
// Node class to represent each node in a linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }   
}

const n1 = new Node(10);
const n2 = new Node(20);
const n3 = new Node(30);
const n4 = new Node(40);
const n5 = new Node(50);
const n6 = new Node(60);


n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

// // Recursive function to display the linked list
// function displayNode(head) {
//     if(head == null) return; // Base case: if the head is null, return
//     console.log(head.data);
//     displayNode(head.next);
// }

// displayNode(n1); // This will display the linked list starting from n1

// Home Work 
function RecursiveNode(head) {
    if(head==null) return;
    RecursiveNode(head.next);
    console.log(head.data + " ");
}
RecursiveNode(n1);