class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// making the linked list class
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    // adding the add method
    add(val){
    let newNode = new Node(val);
    if(this.head == null) this.head = newNode;
    else{
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
}

// adding any index 
    addidxAt(index, val){
        if (index<0 || index > this.size) {
            console.log("kya krta yaar tu, Ram Nam jap kar sahi ho jayegaa..");
            return;
        }
        let newNode = new Node(val);
        if (index==0) {
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let curr = this.head;
            let prev = null;
            let i=0;
            while (i<index) {
                prev = curr;
                curr = curr.next;
                i++
            }
            newNode.next = curr;
            prev.next = newNode;
        }
        this.size++;
    }
   
// adding the print method..
    print(){
        let curr = this.head;
        let result = "";
        while (curr != null) {
            result += curr.val + ' -→ ';
            curr = curr.next;
        }
        console.log(result, "null")
    }
}

let list = new LinkedList();
list.add(5);
list.add(10);
list.add(15);
list.add(20);
list.add(25);
list.addidxAt(3, 100);
list.addidxAt(6, 200);
list.print();
console.log(list.size)
