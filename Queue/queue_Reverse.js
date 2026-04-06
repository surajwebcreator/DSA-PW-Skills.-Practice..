// // Lecture : Reverse first k elements of a Queue

function ReverseQue(arr, k) {
    let st = [];
    for (let i = k-1; i >=0; i--) {
        st.push(arr[i]);
    }
    for (let i = k; i <arr.length; i++) {
        st.push(arr[i]);
    }
    return st;
}
let arr = [1,2,3,4,5];
let revarr = ReverseQue(arr, 3);

console.log(revarr);

