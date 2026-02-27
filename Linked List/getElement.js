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

    // inserting at the given index
      insert(idx, val){
        if(idx == 0){
            this.insertAtHead(val);
            return;
        }
        if(idx == this.size){
            this.insertAtTail(val);
            return;
        }
        if(idx > this.size || idx < 0){
            console.log("Invalid index");
            return;
        }
        let temp = new Node(val);
        let x = this.head;
        for(let i = 0; i < idx - 1; i++){
            x = x.next;
        }
        // insertion
        temp.next = x.next;
        x.next = temp;
        this.size++;
    } 

        // get Element from given index
        getElement(idx){
            if(idx>this.size || idx<0){
                throw new Error("abe yee ye bigger hai ya smaller haii.");
        }
        let temp = this.head;
        let i=0; 
        while(i<idx){
            temp = temp.next;
            i++;
        }
        console.log(`in "index" ${idx} value is -> ${temp.val}`);
    }

      // set Element from given index
        setElement(idx, value){
            if(idx>this.size || idx<0){
                throw new Error("abe yee big or small num haii.");
        }
        let temp = this.head;
        let i=0; 
        while(i<idx){
            temp = temp.next;
            i++;
        }
        temp.val = value;
    }

    // delete element from given index
    deleteElement(idx){
        if(idx==0)this.head = this.head.next;
        else if(idx>this.size || idx<0){
            throw new Error("mar kar yrr, mera dimaag kharab ho jayega");
        }else{
            let temp = this.head;
            for (let i = 1; i < idx; i++) {
                temp = temp.next;
            }
            temp.next = temp.next.next;
        }
        this.size--;
    }


    // display linked list
    display(){
        let temp = this.head;
        let result = "";
        while(temp !== null){
            // console.log(temp.val);
            result += temp.val + " --> ";
            temp = temp.next;
        }
        console.log(result + "null")
    }
}

let list = new LinkedList();
list.insertAtTail(1);
// list.insertAtTail(2);
// list.insertAtTail(3);
// list.display();
// console.log("Size of linked list: " + list.size);
list.insertAtTail(4);
list.insertAtTail(5);
// list.display();
// console.log("Size of linked list: " + list.size);

// insert at head of linked list
list.insertAtHead(23);
list.insertAtHead(45);
// list.display();
// console.log("Size of linked list: " + list.size);

// insert at the given index
list.insert(2, 100);
// list.display();
// getting element
// list.getElement(3);
// list.getElement(2);
// setting element
list.setElement(2, 900);
// list.display();
// deleting element
list.deleteElement(2);
list.display();