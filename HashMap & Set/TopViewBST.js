// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class Solution {
//     topView(root) {
//         if (!root) return [];

//         let map = new Map();
//         let q = [];

//         q.push([root, 0]);

//         let minHD = 0;
//         let maxHD = 0;

//         while (q.length > 0) {

//             let [node, hd] = q.shift();

//             if (!map.has(hd)) {
//                 map.set(hd, node.data);
//             }

//             if (node.left) {
//                 q.push([node.left, hd - 1]);
//                 minHD = Math.min(minHD, hd - 1);
//             }

//             if (node.right) {
//                 q.push([node.right, hd + 1]);
//                 maxHD = Math.max(maxHD, hd + 1);
//             }
//         }

//         let ans = [];

//         for (let i = minHD; i <= maxHD; i++) {
//             ans.push(map.get(i));
//         }

//         return ans;
//     }
// }


// // TREE BANANA
// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);

// root.left.right = new Node(4);
// root.left.right.right = new Node(5);


// // CALL
// let obj = new Solution();

// console.log(obj.topView(root));










class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    topView(root) {
       if(!root) return [];

       let map = new Map();
       let q = [];

       q.push([root, 0]);

       let minHd = 0;
       let maxHd = 0;

       while (q.length>0) {

        let [node, hd] = q.shift();

        if (!map.has(hd)) {
            map.set(hd, node.data);
        }
        
        if(node.left){
            q.push([node.left, hd-1]);
            minHd = Math.min(minHd, hd-1)
        }
        if(node.right){
            q.push([node.right, hd+1]);
            maxHd = Math.max(maxHd, hd+1)
        }
       }

       let ans = [];
       for (let i = minHd; i <= maxHd; i++) {
            ans.push(map.get(i));        
       }
       return ans;
    }
}


// TREE BANANA
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.right = new Node(4);
root.left.right.right = new Node(5);


// CALL
let obj = new Solution();

console.log(obj.topView(root));