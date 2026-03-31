let str = "953+4*6/-";

let val = [];

for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch>="0" && ch<="9") val.push(Number(ch));
    else{
        let v2 = val.pop();
        let v1 = val.pop();
        if(ch=="+") val.push(v1+v2);
        if(ch=="-") val.push(v1-v2);
        if(ch=="*") val.push(v1*v2);
        if(ch=="/") val.push(v1/v2);
    }
}
console.log(Math.round(val[val.length-1]));