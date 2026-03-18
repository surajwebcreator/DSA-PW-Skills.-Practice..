/**
 * @param {string} s
 * @return {boolean}
 */

// solved it using Stack();
var isValid = function(s) {
    let st = new Stack();
    for(let a of Array.from(s)){
        if(a=="(") st.push(")");
        else if(a=="[") st.push("]");
        else if(a=="{") st.push("}");
        else if(st.pop() != a) return false;
    }
    return st.isEmpty();
};


// Accepted