var findClosestElements = function(arr, k, x) {
    let hp = [];
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let dif = (x>arr[i]) ? x-arr[i] : arr[i]-x;
        hp.push([arr[i], dif])
    }
    hp.sort((a,b)=> a[1]-b[1]);
    
   for (let i = 0; i < k; i++) {
        ans.push(hp[i][0]);
   }
   return ans;
};

let arr = [1,2,3,4,5];
let k = 4;
let x = 3;

console.log(findClosestElements(arr, k, x));
// Output: [1,2,3,4]