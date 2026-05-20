function findkthlargestelement(arr, k){
    let pq = [];

    // for (const ele of arr) {
    //     pq.push(ele);
    //     pq.sort((a,b)=> a-b);
    //     if(pq.length>k) pq.shift();
    // }

    // return pq[0];


    arr.sort((a, b)=> a-b);
    return arr[arr.length-k];

}

const arr = [12, 3, 5, 7, 19];
const k = 2;

console.log(findkthlargestelement(arr, k));

