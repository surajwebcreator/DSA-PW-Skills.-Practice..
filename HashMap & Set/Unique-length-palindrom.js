
var countPalindromicSubsequence = function(s) {
    // step-1
    let fmap = new Map();
    let lmap = new Map();
    for (let i = 0; i < s.length; i++) {
        if(!fmap.has(s[i])) fmap.set(s[i], i);
        lmap.set(s[i], i);
    }
    
    // step-2
    let count = 0;
    for (const ele of fmap.keys()) {
        let fidx = fmap.get(ele);
        let lidx = lmap.get(ele);
        
        let set = new Set();
        for (let i = fidx+1; i <lidx; i++) {
            set.add(s[i]);
        }
        count += set.size;
    }
    return count;
};

console.log(countPalindromicSubsequence('aabca'));