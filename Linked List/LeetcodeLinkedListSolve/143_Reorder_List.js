/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

    var leftside = function(head){
        let slow = head;
        let fast = head;
        while(fast.next!=null && fast.next.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    var reverse = function(head2){
        let curr = head2;
        let p = null;
        let n = null;
        while(curr!=null){
            n = curr.next;
            curr.next = p;
            p = curr;
            curr = n;
        }
        return p;
    }
var reorderList = function(head) {
    let leftnode = leftside(head);
    let head2 = leftnode.next;
    leftnode.next= null;
    head2 = reverse(head2);
    let dummynode = new ListNode(-1);
        let temp = dummynode;
    while(head!=null && head2!=null){
        temp.next = head;
        head = head.next;
        temp = temp.next;
        temp.next = head2;
        head2 = head2.next;
        temp = temp.next;
    }
    if(head==null) temp.next = head2;
    if(head2==null) temp.next = head;

        return dummynode.next; 
};