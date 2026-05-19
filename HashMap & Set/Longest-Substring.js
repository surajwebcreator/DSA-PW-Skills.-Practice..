

var lengthOfLongestSubstring = function(s) {
    if(s.length<=1) return s.length;
    let mx = 0;
    let map = new Map();
    let i=0;
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]) + 1);
        }
       mx = Math.max(mx, j - i + 1);
        map.set(s[j], j);
    }
    return console.log(mx);
};


lengthOfLongestSubstring('dvdf');