 class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// now creatring new node

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);
let h = new Node(8);
let i = new Node(9);

// now try to console it..
// console.log(a.val);

// now join them

a.left = b; a.right = c;
b.left = d; b.right = e;
c.left = f; c.right = g;
e.left = h; f.right = i;

// console.log(c.right);

let ans = [];
preorder(a, ans);
console.log('preorder', ans);
ans = [];
inorder(a, ans);
console.log('inorder', ans);
ans = [];
postorder(a, ans);
console.log('postorder', ans);
ans = [];

// Level order using Queue..
let fans = "";
levelOrder(a);
console.log("levelOrder using Queue-: ", fans);

// reverse order using Queue..
let frans = "";
reverseOrder(a);
console.log("reverseOrder using Queue-: ", frans);


function levelOrder(root) {
    if(root) ans.push(root);
    while (ans.length>0) {
        let front = ans.shift();
        fans += front.val + " ";
        if(front.left)ans.push(front.left);
        if(front.right)ans.push(front.right);
    }
}


function reverseOrder(root) {
    if(root) ans.push(root);
    while (ans.length>0) {
        let front = ans.shift();
        frans += front.val + " ";
        if(front.right)ans.push(front.right);
        if(front.left)ans.push(front.left);
    }
}

function preorder(root, ans) {
    if(root==null) return;
    // console.log(root.val)
    ans.push(root.val);
     preorder(root.left, ans);
     preorder(root.right, ans);
}

function inorder(root, ans) {
    if(root==null) return;
    // console.log(root.val)
    inorder(root.left, ans);
    ans.push(root.val);
     inorder(root.right, ans);
}

function postorder(root, ans) {
    if(root==null) return;
    // console.log(root.val)
    postorder(root.left, ans);
    postorder(root.right, ans);
    ans.push(root.val);
}