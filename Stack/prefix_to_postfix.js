let str = "-9/*+5346";

let val = [];

for (let i = str.length-1; i >= 0; i--) {
        let ch = str[i];
        if(ch>='0' && ch <='9') val.push(ch);
        else {
            let v1 = val.pop();  
            let v2 = val.pop();
            let t = v1+v2+ch;  
            val.push(t);
        }
}
console.log(val[val.length-1]);