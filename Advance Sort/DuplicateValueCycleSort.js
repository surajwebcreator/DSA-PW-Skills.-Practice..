// **leetcode 287. Find the Duplicate Number

let arr = [4,1,2,3,2];
let n = arr.length;

// find the duplicate value in the array using cycle sort
// for (let i = 0; i < n; i++) {
//     while (arr[i] != i) {
//         if (arr[i] == arr[arr[i]]) {
//             console.log(arr[i]);
//             break;
//         } else {
//             let temp = arr[i];
//             arr[i] = arr[arr[i]];
//             arr[temp] = temp;
//         }
//     }
// }


while (arr[0] != 0) {
    if(arr[0] != 0){
        if(arr[0] == arr[arr[0]]){
            console.log(arr[0]);
            return;
        }else{
        let temp = arr[0];
        arr[0] = arr[arr[0]];
        arr[temp] = temp;
        }
    }
}


// More Sort way
/**
 * @param {number[]} nums
 * @return {number}
 */
//  function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//  }
// var findDuplicate = function(arr) {
//     // solving this with modifying array..
//     while(true){
//     let ele = arr[0];
//         if(ele == arr[ele]) return ele;
//         else{
//             swap(arr,0,ele);
//         }
//     }
// };