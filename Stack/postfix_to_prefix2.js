let str = "953+4*6/-";
let val = [];

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if(ch>='0' && ch<='9') val.push(ch);
    else{
        let v2 = val.pop();
        let v1 = val.pop();
        let t = ch+v1+v2;
        val.push(t);
    }
}
console.log(val[val.length-1]);