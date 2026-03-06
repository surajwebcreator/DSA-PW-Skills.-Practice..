// // solved it in leetcode version
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var oddEvenList = function(head) {
//     if(head==null || head.next==null) return head;
//     let tempA = new ListNode(-1);
//     let tempB = new ListNode(-1);
//     let a = tempA;
//     let b = tempB;
//     let t = head;
//     let count = 1;
//     while(t!=null){
//         if(count%2!=0){
//             a.next = t;
//             a = a.next;
//         }else{
//             b.next = t;
//             b = b.next;
//         }
//         t = t.next;
//         count++;
//     }
//     b.next = null;
//     tempA = tempA.next;
//     tempB = tempB.next;
//     a.next = tempB;
//     return tempA;
// }; 

// //  solving leetcode problem 328. Odd Even Linked List
// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class linkNode {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
// add(val){
//     let newNode = new Node(val);
//     if(this.head == null) this.head = newNode;
//     else{
//         let curr = this.head;
//         while (curr.next!=null) {
//             curr = curr.next;
//         }
//         curr.next = newNode;
//     }
//     this.size++;
// }
// display(){
//     let curr = this.head;
//     let res = "";
//     while(curr!=null){
//         res += curr.val + " ➖> ";
//         curr = curr.next;
//     }
//     console.log(res + "null");
// }
// }

// let list = new linkNode();
// let value = [1,2,3,4,5];
// for (const ele of value) {
//     list.add(ele);
// }
// list.display();




class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
 function display(newhead){
    let curr = newhead;
    let res = "";
    while(curr!=null){
        res += curr.val + " ➖> ";
        curr = curr.next;
    }
    console.log(res + "null");
}
function createLinkedList(arr) {
  let dummy = new ListNode(-1);
  let curr = dummy;
  for (let val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}
var oddEvenList = function(head) {
  if (head == null || head.next == null) return head;

  let tempA = new ListNode(-1);
  let tempB = new ListNode(-1);
  let a = tempA;
  let b = tempB;
  let t = head;
  let count = 1;

  while (t != null) {
    if (count % 2 != 0) {
      a.next = t;
      a = a.next;
    } else {
      b.next = t;
      b = b.next;
    }
    t = t.next;
    count++;
  }

  b.next = null;
  tempA = tempA.next;
  tempB = tempB.next;
  a.next = tempB;
  return tempA;
};

let head = createLinkedList([1,2,3,4,5]);
let newHead = oddEvenList(head);
    display(newHead);
// console.log(linkedListToArray(newHead));
// Output: [1,3,5,2,4]
