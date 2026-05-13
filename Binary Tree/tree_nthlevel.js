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


// print nth level 
z = 2;

let ans = [];
nthLevel(a, 0, ans);
console.log(ans);

function nthLevel(root, level, ans) {
    if(root==null) return;
    // console.log(root.val)
    if(level==z)ans.push(root.val);
     nthLevel(root.left, level+1, ans);
     nthLevel(root.right, level+1, ans);
}

// getting level order 
let ans2 = [];
for (let i = 0; i <= 3; i++) {
    z = i;
    levelOrder(a,0,ans2);
}
console.log(ans2);

function levelOrder(root, level, ans) {
    if(root==null) return;
    if(level==z)ans.push(root.val);
    levelOrder(root.left, level+1, ans);
    levelOrder(root.right, level+1, ans);
}
