// leetcode 448. Find All Numbers Disappeared in an Array

// let arr = [4,3,2,7,8,2,3,1];
// let n = arr.length;

// let secondArr = new Array(n).fill(0);

// for (let i = 0; i < n; i++) {
//     let num = arr[i];
//     secondArr[num - 1] = num;
// }
// let ans = [];
// for (let i = 0; i < n; i++) {
//     if (secondArr[i] === 0) {
//         ans.push(i+1);
//     }
// }

// console.log(ans);



// doing it using cyclic sort
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [4,3,2,7,8,2,3,1];
let n = arr.length;
let i = 0;

while (i < n){
    if(arr[i] == i+1 || arr[i] == arr[arr[i]-1]) i++;
    else swap(arr, i, arr[i]-1);
}
let ans = [];
for (let i = 0; i < n; i++) {
    if (arr[i] != i+1) {
        ans.push(i+1);
    }
}
console.log(ans);

