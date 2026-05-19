var canArrange = function(arr, k) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i]%k)) {
            let freq = map.get(arr[i]%k);
            map.set(arr[i]%k, freq+1);
        }
        else map.set(arr[i]%k, 1);
    }
    for (const key of map.keys()) {
        if(map.has(k-key)){
            if (map.get(k-key)==map.get(key)) {
                map.delete(key);
                map.delete(k-key);
            }
        }
    }
    if (map.has(0) && map.get(0)%2==0) {
        map.delete(0);
    }
    console.log(map);
    return console.log(map.size==0)
};


let arr = [1,2,3,4,5,10,6,7,8,9];
let k = 5;
canArrange(arr, k);