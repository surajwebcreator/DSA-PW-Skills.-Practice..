let num = []
for (let i=0; i<5; i++) {
    let res = []
    for (let j = 0; j <= i; j++) {
        if (j==0 || j==i) {
            res.push(1)        
        }else{
            res.push(num[i-1][j] + num[i-1][j-1])
        }
    }   
    num.push(res) 
}
console.log(num)

