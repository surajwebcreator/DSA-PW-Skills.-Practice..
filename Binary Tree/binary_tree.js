// starting with a binary tree node, 

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// now creatring new node

let a = new Node(2);
let b = new Node(4);
let c = new Node(10);
let d = new Node(6);
let e = new Node(5);
let f = new Node(11);

// now try to console it..
// console.log(a.val);

// now join them

a.left = b; a.right = c;
b.left = d; b.right = e;
c.right = f;

// console.log(c.right);

// displaying it;

display(a);

function display(root) {
    if (root==null) return;
    console.log(root.val);
    display(root.left);
    display(root.right);
}