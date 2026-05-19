var uniqueOccurrences = function(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let freq = map.get(arr[i]);
            map.set(arr[i], freq+1);
        } else map.set(arr[i], 1);
    }

    let set = new Set();
    for (const key of map.keys()) {
        let val = map.get(key);
        if(set.has(val)) return console.log(false); 
        else set.add(val);
    }
    return console.log(map.size == set.size);
};



let arr = [1,2,2,1,1,3];
// let arr = [1,2,2,1,1,3, 3, 4, 5, 6, 6];

uniqueOccurrences(arr);