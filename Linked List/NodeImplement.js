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

    // console.log(n1.data);
    // console.log(n1.next);
    // console.log(n2.data);
    // console.log(n3.data);
    // console.log(n3.next);

    // now using next property
    // console.log(n1.next.data); // 20
    // console.log(n1.next.next.data);


    // ⭐⭐⭐⭐now makking shallow copy of n1
    let temp = n1;
    // console.log(temp.data);
    // console.log(temp.next);
    // console.log(temp.next.data); // 20

    // for(let i = 1; i <= 5; i++) {
    //     console.log(temp.data);
    //     temp = temp.next;
    // }

    // using while loop
    // while(temp !== null) {
    //     console.log(temp.data);
    //     temp = temp.next;
    // }


    // now making it inside a function
    function displayNode(head) {
        let temp = head;
        while(temp != null) {
        console.log(temp.data);
        temp = temp.next;
    }
    };
    displayNode(n1);