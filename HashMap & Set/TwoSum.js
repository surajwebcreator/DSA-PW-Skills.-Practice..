
let arr = [2,7,11,15];
let target = 9;


var twoSum = function(arr, target) {
    let map = new Map();
    let ans = [-1, -1];
    let n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let rem = target - arr[i];
        if (map.has(rem)) {
            ans[0] = i;
            ans[1] = map.get(rem);
                return console.log(ans);
            } else map.set(arr[i], i);
        }
        return ans;
    };

    twoSum(arr, target);