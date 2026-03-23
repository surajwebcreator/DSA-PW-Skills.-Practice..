// 1944. Number of Visible People in a Queue

let canSeePersonsCount = function(heights) {
     let n = heights.length;
    let st = [];
    let res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        while(st.length>0 && heights[st[st.length-1]]<= heights[i]){
                res[st[st.length-1]]++;
                st.pop();
        }
        if(st.length!=0) res[st[st.length-1]]++;
        st.push(i);
    }
    return res;
};

let heights = [5,1,2,3,10];
let ans = canSeePersonsCount(heights);
console.log(ans);

// Input: heights = [5,1,2,3,10]
// Output: [4,1,1,1,0]