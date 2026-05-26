let minCost = (arr) => {
    let cost = 0;
    while (arr.length>1) {
        arr.sort((a,b)=>a-b);
        let x = arr.shift();
        let y = arr.shift();
        let sum = x+y;
        cost += sum;
        arr.push(sum);
    }
    return cost;
}

let arr = [2,7,1,4,8];

console.log(minCost(arr));