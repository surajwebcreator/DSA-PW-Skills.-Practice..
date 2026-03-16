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
let newElement = 50;

// putting at bottom
// let tempStack = new Stack();
// while (st.item.length!=0) {
//     tempStack.push(st.pop());
// }
// console.log('reverse', tempStack.item);
// st.push(newElement);
// while (tempStack.item.length!=0) {
//     st.push(tempStack.pop());
// }
// console.log('At Bottom ' , st.item);



let pos = 2;
// putting at given index
let tempStack = new Stack();
while (st.item.length>=pos) {
    tempStack.push(st.pop());
}
st.push(newElement);
while (tempStack.item.length!=0) {
    st.push(tempStack.pop());
}
console.log('At index ' , st.item);

