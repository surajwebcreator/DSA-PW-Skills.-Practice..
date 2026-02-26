
let arr = [1,6,3,8,2,0,1,5,4,7,9];
function main(arr) {
   console.log("Original array:", arr);
   mergesort(arr);
    console.log("Sorted array:", arr);
    // return arr;
}
main(arr);

// Time complexity: O(n log n)
function mergesort(arr) {
    if(arr.length <= 1) return;
    let mid = Math.floor(arr.length/2);
    let a = [], b = [];
    for (let i = 0; i < mid; i++) {
        a.push(arr[i]);
    }
    for (let i = mid; i < arr.length; i++) {
        b.push(arr[i]);        
    }
    mergesort(a);
    mergesort(b);
    // merge the two sorted halves
    merge(arr,a,b);
}

function merge(arr, a, b) {
    let i=0, j=0, k=0;
    while(i < a.length && j < b.length) {
        if(a[i] < b[j]) arr[k++] = a[i++];
         else arr[k++] = b[j++];  
    }
    while(i < a.length) arr[k++] = a[i++];
    while(j < b.length) arr[k++] = b[j++];
    return arr;
}

// out put
// Original array: [ 1, 6, 3, 8, 2, 0, 1, 5, 4, 7, 9 ]
// Sorted array: [ 0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]