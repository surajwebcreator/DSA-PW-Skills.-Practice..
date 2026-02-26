// Leetcode 41. First Missing Positive
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [2,1,4,6,5];
console.log('old arr ', arr)
let n = arr.length;
let i=0;
while(i<n){
    if(arr[i]<1 || arr[i]==i+1 || arr[i]>n || arr[i]==arr[arr[i]])i++;
    else{
        swap(arr,i,arr[i]-1);
    }
    for(i=0;i<n+1;i++){
        if(arr[i]!=i+1)return console.log(i+1);
    }
}
console.log(i+1);