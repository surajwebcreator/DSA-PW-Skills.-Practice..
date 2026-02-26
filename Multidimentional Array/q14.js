// Q.14 Set Matrix Zeros.
let arr = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(arr)
let m = arr.length;
let n = arr[0].length;
// let bol = Array.from({length:m},()=> Array(n));
let row = Array(m);
let col = Array(n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j]==0) {
                row[i] = true;
                col[j] = true;   
            }
        }        
    }
// now go with each row for converting it in 0
for (let i = 0; i < m; i++) {
    if (row[i]==true) {
        for (let j = 0; j < n; j++) {
           arr[i][j] = 0; 
        }
    }
}

// now go with each col for converting it in 0
for (let j = 0; j < n; j++) {
    if (col[j]==true) {
        for (let i = 0; i < m; i++) {
           arr[i][j] = 0; 
        }
    }
}
console.log(arr)

