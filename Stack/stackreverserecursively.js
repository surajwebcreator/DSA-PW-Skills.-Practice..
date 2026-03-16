class Stack {
    constructor(){
        this.item = [];
    }
    push(ele){
        this.item.push(ele);
    }
    pop(){
        if(this.isEmpty()) return "Empty hai ye stack";
        else return this.item.pop();
    }
    peek(){
        return this.item[this.item.length-1];
    }
    isEmpty(){
        return this.item.length === 0;
    }
    size(){
        return this.item.length;
    }
}

let st = new Stack();
st.push(10); st.push(20); st.push(30); st.push(40);
console.log('orginal', st.item);

let revstack = new Stack();
displayreverse(st);

function displayreverse(st) {
    if(st.item.length==0) return;
    let top = st.pop();
    revstack.push(top);
    console.log(top);
    displayreverse(st);
    st.push(top);
};
console.log('recursively', revstack.item);