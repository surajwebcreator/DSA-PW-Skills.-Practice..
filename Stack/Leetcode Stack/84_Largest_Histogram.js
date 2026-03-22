/*
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units. 
  */

 let largestRectangleArea = function(heights) {
     let n = heights.length;
     let hmax = 0;
     let left = [];
     let right = [];
     let st = [];
    for (let i = 0; i < n; i++) {
        while (st.length>0 && heights[st[st.length-1]]>=heights[i]) {
            st.pop();
        }        
        left[i] = (st.length==0) ? -1 : st[st.length-1];
        st.push(i);
    }
    st = [];
    for (let j = n-1; j >= 0; j--) {
        while (st.length>0 && heights[st[st.length-1]]>= heights[j]) {
            st.pop();
        }
        right[j] = (st.length==0) ? n : st[st.length-1];
        st.push(j);
    }
    for (let i = 0; i < n; i++) {
        let width = right[i] - left[i]-1;
        hmax = Math.max(hmax, (heights[i]* width));
    }
    return hmax;

};

 let heights = [2,1,5,6,2,3];
 let ans = largestRectangleArea(heights);
 console.log(ans);


