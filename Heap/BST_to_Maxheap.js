class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(5);

root.left = new Node(3);
root.right = new Node(7);

root.left.left = new Node(2);
root.left.right = new Node(4);

root.right.left = new Node(6);
root.right.right = new Node(8);


let inorder = (root)=>{
    if(!root) return;
    inorder(root.right);
    arr.push(root.val);
    inorder(root.left);
}

let arr = [];
inorder(root);

// console.log(arr);   

// using second root
// let maxHeap = (arr, i=0)=>{
//     if(i>=arr.length) return null;
//     let root = new Node(arr[i]);
//     root.left = maxHeap(arr, 2*i+1);
//     root.right = maxHeap(arr, 2*i+2);
//     return root;
// }

// let root2 = maxHeap(arr);

// console.log(root2);


// changing in original one
let i = 0;

function converttoMaxHeap(root) {
    if(!root) return;
    root.val = arr[i++];
    converttoMaxHeap(root.left);
    converttoMaxHeap(root.right);
}
converttoMaxHeap(root);

console.log(root);