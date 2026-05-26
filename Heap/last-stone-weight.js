var lastStoneWeight = function(stones) {
    while (stones.length>1) {
        stones.sort((a,b)=> a-b);
        let last = stones.pop();
        let slast = stones.pop();
        if(last!=slast) stones.push(last-slast);
    }
    return (stones.length>0 ? stones[0] : 0);
};

// let stones = [2,7,4,1,8,1];
let stones = [2,2];

console.log(lastStoneWeight(stones));