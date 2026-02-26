// Q.13
let arr = [
    [ 1, 4, 7,11,15],
    [ 2, 5, 8,12,19],
    [ 3, 6, 9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30],
]
let target = 14;
let m = arr.length;
let n = arr[0].length;
let a = 0;
let k = n-1;
// let ans = false;
for (let i = a; i < m; i++) {
    for (let j = k; j >=0; j--) {
        if (arr[i][j]==target) {
            console.log('target hai ye',arr[i][j])
            return
        }else if (arr[i][j]<target) {
            console.log('if i small', arr[i][j])
            a++;
            j= -1;
        }else {
            console.log('if i big',arr[i][j])
            k--;
        }
    }
}
console.log('ho gya finally')

// let ans = []
// let i = 0; 
// let j = n-1;
// while (i<m && j>=0) {
//      if (arr[i][j]==target) {
//             console.log('target found', arr[i][j])
//             ans = i,j;
//             return ans;
//         }else if (arr[i][j]<target) {
//             console.log('if i small',arr[i][j])
//             i++;
//         }else if (arr[i][j]>target) {
//             console.log('if large',arr[i][j])
//             j--;
//         }
//     }

// console.log(ans)
