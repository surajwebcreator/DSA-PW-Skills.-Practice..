/**
 * @param {string} s
 * @return {string}
 */

// solved it using Stack();
var removeDuplicates = function(s) {
    let st = new Stack();
    for(let a of Array.from(s)){
        if(st.peek()==a) st.pop();
        else st.push(a);
    }
    let arr = [];
    while(!st.isEmpty()){
        arr.push(st.pop());
    }

    return arr.reverse().join("").toString();
};


// Accepted