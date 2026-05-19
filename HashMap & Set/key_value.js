let map = new Map();

map.set(1, 'karan');
map.set(2, '2karan');
map.set(3, '3karan');

console.log(map);

// for getting keys
for (const key of map.keys()) {
    console.log(key);
}

// for getting values
for (const val of map.values()) {
    console.log(val);
}


// for getting entries => keys & values together
for (const ele of map.entries()) {
    console.log(ele);
}
