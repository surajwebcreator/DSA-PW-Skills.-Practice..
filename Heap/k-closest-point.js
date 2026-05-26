// var kClosest = function(points, k) {
//     let ans = [];
//     let hp = [];
//     let map = new Map();
//     for (let i = 0; i < points.length; i++) {
//         let sqr = (points[i][0]*points[i][0]) + (points[i][1]*points[i][1]);
//         hp.push(sqr);
//         hp.sort((a,b)=>a-b);
//         if(hp.length>k) hp.pop();
//         map.set( points[i], sqr);
//     }
//     for (let i = 0; i < hp.length; i++) {
//             for (const [key, val] of map) {
//                 if (val==hp[i]) {
//                     ans.push(key);
//                     map.delete(key);
//                     break;
//                 }
//             }
//     }
//     return ans;
// };


var kClosestSecondMethod = function(points, k) {
    let ans = [];
    let hp = [];
    for (let i = 0; i < points.length; i++) {
        let sqr = (points[i][0]*points[i][0]) + (points[i][1]*points[i][1]);
        hp.push([sqr, points[i][0], points[i][1]]);
        hp.sort((a,b)=>a[0]-b[0]);
        if(hp.length>k) hp.pop();
    }
    for (let i = 0; i < k; i++) {
        ans.push([hp[i][1], hp[i][2]])
    }
    return ans;
};
let points = [[3,3],[5,-1],[-2,4]];
// let points = [[0,1],[1,0]];
let k = 2;
// console.log(kClosest(points, k));
console.log(kClosestSecondMethod(points, k));
