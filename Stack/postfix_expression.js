let str = "8-(5+3)*(4/6)";
let val = [];
let op = [];

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if(ch>='0'&&ch<='9') val.push("" + ch);
    else if(op.length==0 || ch=='(' || op[op.length-1]=='(') op.push(ch);
    else if(ch==")"){
        while (op.length>0 && op[op.length-1]!="(") {
            let v2 = val.pop();
            let v1 = val.pop();
            let o = op.pop();
            let t = v1 + v2 + o;
            val.push(t);
        }
        op.pop();
    }else{
        if(ch=='+' || ch== '-'){
            let v2 = val.pop();
            let v1 = val.pop();
            let o = op.pop();
            let t = v1 + v2 + o;
            val.push(t);
            op.push(ch);
        }else if(ch == '*' || ch== '/'){
            if (op[op.length-1]=='*' || op[op.length-1]=='/') {
            let v2 = val.pop();
            let v1 = val.pop();
            let o = op.pop();
            let t = v1 + v2 + o;
            val.push(t);
            op.push(ch);   
            }else op.push(ch);
        }
    }
}
while (val.length>1) {
            let v2 = val.pop();
            let v1 = val.pop();
            let o = op.pop();
            let t = v1 + v2 + o;
            val.push(t);
}
console.log(val.toString());