// ### Q.8 - write a program to print the matrix in wave form. 

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
let rows = arr.length;
let cols = arr[0].length;

for (let i = 0; i < rows; i++) {
    if (i % 2 == 0) {
        // even index - top to bottom
        for (j=0; j< cols; j++){
            console.log(arr[i][j])
        }
    }else{
         for (j=cols-1; j>=0; j--){
            console.log(arr[i][j])
        }
    }
}

