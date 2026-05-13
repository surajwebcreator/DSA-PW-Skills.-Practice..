class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);
let h = new Node(8);
let i = new Node(9);
let j = new Node(10);

a.left = b; a.right = c;
b.left = d; b.right = e;
c.left = f; c.right = g;
d.left = h; d.right = i;
e.left = j;

/* 🎯 Task 1 (Basic but Important)
👉 Total nodes count karo
Function likho:
function countNodes(root) {}
Expected output: 10 */

// using recursion
// function countNodes(root) {
//     if(!root) return 0;
//     return 1 + countNodes(root.left) + countNodes(root.right);
// }


// using array..
function level(root){
    if(root==null) return 0;
    return 1 + Math.max(level(root.left), level(root.right));
}
function countNodes(root) {
    let ans = [];
    let lvl = level(root);
    for (let i = 0; i < lvl; i++) {
        while (!root) {
            // pending...
        }
    }
}

let count = countNodes(a);
// console.log(count);


// 🎯 Task 2
// 👉 Sum of all nodes

let totalsum = (root) => {
    if(!root) return 0;
    return root.val + totalsum(root.left) + totalsum(root.right);
} 

let sum = totalsum(a);
// console.log(sum);


// 🎯 Task 3 (Important 🔥)
// 👉 Height of tree
let lvl = level(a);
let height = lvl-1;
// console.log('height is--', height);


// 🎯 Task 4 (Traversal - MUST)
// 👉 Inorder traversal print karo

let res = "";
function InorderTraversal(root) {
    if(!root) return;
    InorderTraversal(root.left);
    res+=(root.val) + " ";
    InorderTraversal(root.right);
    return res;
    
}
let intraversal = InorderTraversal(a);
// console.log(intraversal);


// Task 5 (Thoda thinking)
// 👉 Count leaf nodes

function NullLeafNode(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    return NullLeafNode(root.left) + NullLeafNode(root.right);
}
let nullleafnode = NullLeafNode(a);
// console.log( "null leaf node: ", nullleafnode);


