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
let g = new Node(20);

// now try to console it..
// console.log(a.val);

// now join them

a.left = b; a.right = c;
b.left = d; b.right = e;
c.right = f; f.right = g;

// console.log(c.right);

// practice time
console.log('practice time -', prac(a));
function prac(root) {
    if(root==null) return 0;
    return (root.right?.val || 0) + prac(root.left);
}

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

// Size
console.log('size is -' , size(a));
function size(root) {
    if(root==null) return 0;
    return 1 + size(root.left) + size(root.right);
}

// Levels
console.log('levels - :', level(a));
function level(root) {
    if(root==null) return 0;
    return 1 + Math.max(level(root.left), level(root.right));
}


