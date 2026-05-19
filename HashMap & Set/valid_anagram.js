
let s = "anagram";
let t = "nagaram";


var isAnagram = function(s, t) {
    let smap = new Map();
    let tmap = new Map();
    for (const ele of s) {
        if (smap.has(ele)) {
            let val = smap.get(ele);
            smap.set(ele, val+1);
        } else {
            smap.set(ele, 1);
        }
    }

    for (const ele of t) {
        if (tmap.has(ele)) {
            let val = tmap.get(ele);
            tmap.set(ele, val+1);
        } else {
            tmap.set(ele, 1);
        }
    }

    for (const key of smap.keys()) {
        let val1 = smap.get(key);
        console.log('val1 ' ,val1);
        let val2 = tmap.get(key);
        console.log('val2 ' , val2);
        // if(val1 != val2) return false;
        // if(val1 != val2) return console.log(false);
    }
    // return true;
    // return console.log(true);

};


isAnagram(s, t);