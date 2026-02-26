let a = [[1,2,1],[2,1,2]]
let b = [[1,2,3,1],[2,3,1,2],[1,2,1,2]]
let c = []

for (let i = 0; i < a.length; i++) {
    c[i] = []
    for (let j = 0; j < b[0].length; j++) {
        c[i][j] = 0
        if (a[0].length != b.length) {                                                                                                              
            console.log('sahi se enter karo yr')
        } else{
            for (let k = 0; k < b.length; k++) {
                c[i][j] += a[i][k] * b[k][j]      
            }
        }      
    }    
}
console.log(c)