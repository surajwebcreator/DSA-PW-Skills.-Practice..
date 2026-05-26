var topKFrequent = function(arr, k) {
    let hp = [];
    let ans = [];
    let map = new Map();
    for (const ele of arr) {
        if (map.has(ele)) {
            let freq = map.get(ele);
            map.set(ele, freq+1);
        } else {
            map.set(ele, 1);
        }
    }
    for (const [key, value] of map) {
            hp.push([key, value]);
    }
    hp.sort((a,b)=>b[1]-a[1]);
    for (let i=0; i<hp.length; i++) {
        if(ans.length>=k) break;
        ans.push(hp[i][0]);
    };
    return ans;
}

let nums = [1,2];
// let  nums = [1,1,1,2,2,3];
//  let nums = [1,2,1,2,1,2,3,1,3,2];
let k = 2;

console.log(topKFrequent(nums, k));