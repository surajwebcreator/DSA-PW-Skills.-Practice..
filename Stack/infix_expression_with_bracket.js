let str = '9-(5+3)*4/6';
console.log(str);
let val = [];
let op = [];
for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch>= '0'&& ch <='9') {
        val.push(Number(ch));
    }else if (op.length==0 || ch== '(' || op[op.length-1] == '(') {
        op.push(ch);
    }else if (ch== ')') {
        while (op[op.length-1] != '(') {
            let v2 = val.pop();
            let v1 = val.pop();
            if(op[op.length-1]=='-') val.push(v1-v2);
            if(op[op.length-1]=='+') val.push(v1+v2);
            if(op[op.length-1]=='*') val.push(v1*v2);
            if(op[op.length-1]=='/') val.push(v1/v2);
            op.pop();
        }
        op.pop();
    }
    else{
        if (ch=='+' || ch=='-') {
            let v2 = val.pop();
            let v1 = val.pop();
            if(op[op.length-1]=='-') val.push(v1-v2);
            if(op[op.length-1]=='+') val.push(v1+v2);
            if(op[op.length-1]=='*') val.push(v1*v2);
            if(op[op.length-1]=='/') val.push(v1/v2);
            op.pop();
            op.push(ch);
        }else if (ch=='*' || ch=='/') {
            if (op[op.length-1]=='*' || op[op.length-1]=='/') {
                let v2 = val.pop();
                let v1 = val.pop();
                if(op[op.length-1]=='*') val.push(v1*v2);
                if(op[op.length-1]=='/') val.push(v1/v2);
                op.pop();
                op.push(ch);
            }else op.push(ch);
        }
    }
}
while (op.length>0) {
            let v2 = val.pop();
            let v1 = val.pop();
            if(op[op.length-1]=='-') val.push(v1-v2);
            if(op[op.length-1]=='+') val.push(v1+v2);
            if(op[op.length-1]=='*') val.push(v1*v2);
            if(op[op.length-1]=='/') val.push(v1/v2);
            op.pop();
}
console.log(Math.round(val[val.length-1]));