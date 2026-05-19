var countNicePairs = function(arr) {
    let count = 0;
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let rev = arr[i].toString().split("").reverse().join('');
        if (map.has(arr[i]-rev)) {
            let freq = map.get(arr[i]-rev);
            map.set(arr[i]-rev, freq+1);
            count += freq % 1000000007;
        }
        else map.set(arr[i]-rev, 1);
    }
    return count;
};

let arr = [13,10,35,24,76];

console.log(countNicePairs(arr));