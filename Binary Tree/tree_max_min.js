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

// sum
console.log('sum is - ', sum(a));
function sum(root) {
    if(root==null) return 0;
    return root.val + sum(root.left) + sum(root.right);
};

// display(a);
function display(root) {
    if (root==null) return;
    console.log(root.val);
    display(root.left);
    display(root.right);
}

// product
console.log('product is - ', product(a));
function product(root) {
    if(root==null) return 1;
    return root.val * product(root.left) * product(root.right);
}

// Max value..
console.log('max is -', max(a));
function max(root) {
    if(root==null) return Number.MIN_VALUE;
    let a = root.val, b = max(root.left), c = max(root.right);
    return Math.max(a, Math.max(b,c));
}

// Min value..
console.log('min is -', min(a));
function min(root) {
    if(root==null) return Number.MAX_VALUE;
    let a = root.val, b = min(root.left), c = min(root.right);
    return Math.min(a, Math.min(b,c));
}