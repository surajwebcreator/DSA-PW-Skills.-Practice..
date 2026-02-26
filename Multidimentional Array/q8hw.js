// ### Q.8 - write a program to print the matrix in wave form. 

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let rows = arr.length;
let cols = arr[0].length;
// console.log(arr);

// Transpose of matrix
for (let i = 0; i < rows; i++) {
        for (let j = 0; j < i; j++) {
              let temp = arr[i][j]
              arr[i][j] = arr[j][i]
              arr[j][i] = temp               
        }
}
// console.log(arr)

// Reverse each row
for (let i = 0; i < rows; i++) {
        let a = 0;
        let b = rows -1;
        while (a<b) { 
            let temp = arr[i][a]
            arr[i][a] = arr[i][b]
            arr[i][b] = temp;
            a++;
            b--;
        }       
}
// console.log(arr);

// Print in wave form 3rd format
// for (let i = 0; i < rows; i++) {
//     if (i % 2 == 0) {
//         for (let j = 0; j < cols; j++) {
//             console.log(arr[i][j]);
//         }
//     } else {
//         for (let j = cols - 1; j >= 0; j--) {
//             console.log(arr[i][j]);
//         }
//     }
// }


// Print in wave form 4th format
for (let i = 0; i < rows; i++) {
    if (i % 2 != 0) {
        for (let j = 0; j < cols; j++) {
            console.log(arr[i][j]);
        }
    } else {
        for (let j = cols - 1; j >= 0; j--) {
            console.log(arr[i][j]);
        }
    }
}