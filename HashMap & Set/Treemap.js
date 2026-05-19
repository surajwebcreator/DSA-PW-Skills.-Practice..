// in js treenode is not build in like java, we have to make it..

let map = new Map();

map.set(3, "C");
map.set(1, "A");
map.set(2, "B");


for (const key of map) {
    console.log(key)
}
let sortedkey = [...map.keys()].sort((a,b)=> a-b);
for (const key of sortedkey) {
    console.log(key, '-' ,   map.get(key))
}
