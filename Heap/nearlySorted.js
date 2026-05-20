let nearsort = (arr, k) => {
    let pq = [];
    let ans = [];
    for (const ele of arr) {
        pq.push(ele);
        pq.sort((a,b)=> a-b);
        if(pq.length>k) ans.push(pq.shift());
    }
    while (pq.length>0) {
        ans.push(pq.shift());
    }
    return ans;
}

let arr = [6,5,3,2,8,10,9];
let k = 3;

console.log(nearsort(arr, k));