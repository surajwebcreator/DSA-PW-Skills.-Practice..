// Q.11 - Score after fliping matrix leetcode 861
let arr = [
    [0,0,1,1],
    [1,0,1,0],
    [1,1,0,0],
]
let m = arr.length;
let n = arr[0].length;
// putting 1 in 0s column
for (let i = 0; i < m; i++) {
    if (arr[i][0]==0) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j]==0) {
                arr[i][j]=1
            }else{arr[i][j]=0}
        }
    }    
}

// now flip from 1st to last column
for (let j = 1; j < n; j++) {
        let zeros = 0;
        let ones = 0;
        for (let i = 0; i < m; i++) {
            if (arr[i][j]==0) {zeros++}
            else{ones++}
        }   
    if (zeros>ones) {
        for (let i = 0; i < m; i++) {
            if(arr[i][j]==0){arr[i][j]=1}
            else{arr[i][j]=0}            
        }
    }
}
let score = 0;
let x = 1;
for (let j = n-1; j >=0; j--) {
        for (let i = 0; i < m; i++) {
            score += arr[i][j] * x;          
        }    
    x*= 2;
}
console.log('new arrays - ',arr)
console.log('score is - ',score)