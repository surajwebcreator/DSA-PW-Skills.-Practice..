class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(8);

root.left = new Node(4);
root.right = new Node(12);

root.left.left = new Node(2);
root.left.right = new Node(6);

root.right.left = new Node(10);
root.right.right = new Node(14);

root.left.left.left = new Node(1);
root.left.left.right = new Node(3);

root.right.right.left = new Node(13);
root.right.right.right = new Node(15);



// BST Binary Serach Tree..
function search(root, target) {
    if(root==null) return false;
    if(root.val === target) return true;
    if(root.val > target) return search(root.left, target);
    else return search(root.right, target);
    
}

let ans = search(root, 6);
console.log(ans); 