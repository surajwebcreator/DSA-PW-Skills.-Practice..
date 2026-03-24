/*946. Validate Stack Sequences
Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.*/


let validateStackSequences = function(pushed, popped) {
   /* let st = [];
    let i=-1; j=-1; k=-1;
    while (i<pushed.length && j<popped.length) {
        if(st.length==0 && i<pushed.length){
                st.push(pushed[i]);
            i++; k++;
        }
        if(popped[j]==st[k]){
            st.pop();
            j++; k--;
        }else if(i<pushed.length){
            st.push(pushed[i]);
            i++; k++;
        }
    }
    while (j<popped.length && k>=0) {
        if(popped[j]==st[k]){
            st.pop();
            j++; k--;
        }else break;
    }
    return (st.length==0); */

    let st = [];
    let j = 0; // pointer for pop
    for (const val of pushed) {
        st.push(val);
        while (st.length>0 && st[st.length-1]==popped[j]) {
            st.pop();
            j++;
        }
    }
    return st.length==0;
};

let pushed = [1,2,3,4,5], popped = [4,5,3,2,1];
// let pushed = [1,2,3,4,5], popped = [4,5,8,2,1];
let ans = validateStackSequences(pushed, popped);
console.log(ans);