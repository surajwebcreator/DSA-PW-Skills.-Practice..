var frequencySortusingobj = function(nums) {

    let freq = {};

    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    nums.sort((a,b)=>{

        if(freq[a] === freq[b]) {
            return b - a;
        }

        // for obj values
        return freq[a] - freq[b];

        // this for obj keys
        // return a-b;
    });

    return nums;
    
};


let nums = [2,3,1,3,2];

console.log(frequencySortusingobj(nums));
