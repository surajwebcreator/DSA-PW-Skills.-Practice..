console.log('// 1. Basic Set Create Karna')
let set = new Set();

console.log(set);

console.log('// 2. Values Add Karn')
set.add(10);
set.add(20);
set.add(30);

console.log(set);

console.log('// 3. Duplicate Values')
set.add(10);
set.add(10);
set.add(10);

console.log(set);
console.log('// Output me sirf ek 10 aayega.')


console.log('// 4. String Values')
set.add("surya");
set.add("rahul");
set.add("aman");

console.log(set);

console.log('// 5. Mixed Data Type')
set.add(10);
set.add("hello");
set.add(true);
set.add(null);

console.log(set);

console.log('// 6. Array Se Set Banana')
let arr = [1, 2, 3, 4, 4, 5, 5];

set = new Set(arr);

console.log(set);

console.log('// 7. Duplicate Remove Karna')
arr = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(arr)];

console.log(unique);

console.log('// 8. Set Ka Size')
set.add(10);
set.add(20);
set.add(30);

console.log(set.size);

console.log('// 9. Check Value Exists')
set.add(100);
set.add(200);

console.log(set.has(100));
console.log(set.has(500));

console.log('// 10. Delete Value')
set.add(10);
set.add(20);
set.add(30);

set.delete(20);

console.log(set);

console.log('// 11. Clear Full Set')
set.add(1);
set.add(2);
set.add(3);

set.clear();

console.log(set);

console.log('// 12. Loop Through Set (for...of)')
set = new Set([10, 20, 30, 40]);

for (let value of set) {
    console.log(value);
}

console.log('// 13. forEach Use')
set = new Set([1, 2, 3]);

set.forEach((value) => {
    console.log(value);
});

console.log('// 14. Convert Set To Array')
set = new Set([10, 20, 30]);

arr = [...set];

console.log(arr);

console.log('// 15. Interview Type Question (Common Elements)')
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let set1 = new Set(arr1);

for (let value of arr2) {
    if (set1.has(value)) {
        console.log(value);
    }
}

console.log('// 16. Union of Two Arrays')
arr1 = [1, 2, 3];
 arr2 = [3, 4, 5];

let union = new Set([...arr1, ...arr2]);

console.log([...union]);

console.log('// 17. Intersection')
arr1 = [1, 2, 3, 4];
 arr2 = [3, 4, 5, 6];

let set2 = new Set(arr2);

let intersection = arr1.filter((value) => {
    return set2.has(value);
});

console.log(intersection);

console.log('// 18. Difference')
arr1 = [1, 2, 3, 4];
arr2 = [3, 4];

 set2 = new Set(arr2);

let difference = arr1.filter((value) => {
    return !set2.has(value);
});

console.log(difference);


console.log('// 19. Objects in Set')
let obj1 = { name: "surya" };
let obj2 = { name: "surya" };

set.add(obj1);
set.add(obj2);

console.log(set);

console.log(`// Yaha dono object alag treat honge.

// 20. Real Practice Question

// Question:

// Array me first repeating element find karo.`)

arr = [1, 2, 3, 4, 2, 5, 1];


for (let value of arr) {
    if (set.has(value)) {
        console.log("Repeating:", value);
        break;
    }

    set.add(value);
}