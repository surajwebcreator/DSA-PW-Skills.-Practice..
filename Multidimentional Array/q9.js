// Q.9 Write program to print matrix in spiral form.
let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30],
];

let rows = arr.length;
let cols = arr[0].length;

let minr = 0;
let maxr = rows - 1;
let minc = 0;
let maxc = cols - 1;


while (minr<=maxr && minc<=maxc) {
        for (let j = minc; j <= maxc; j++) {
            console.log(arr[minr][j])            
        }; minr++;
        if(minr>maxr || minc>maxc)break;
        for (let i = minr; i <= maxr; i++) {
            console.log(arr[i][maxc])            
        } maxc--;
        if(minr>maxr || minc>maxc)break;
        for (let j = maxc; j >= minc; j--) {
            console.log(arr[maxr][j])            
        }maxr--;
        if(minr>maxr || minc>maxc)break;
        for (let i = maxr; i >= minr; i--) {
            console.log(arr[i][minc])
        }minc++;
}



