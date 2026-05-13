// ===============================
// 1. Create HashMap (Map)
// ===============================

let map = new Map();

console.log(map);



// ===============================
// 2. Add Values
// ===============================

let student = new Map();

student.set("name", "Surya");
student.set("age", 22);
student.set("course", "BCA");

console.log(student);



// ===============================
// 3. Get Value
// ===============================

let user = new Map();

user.set("name", "Rahul");
user.set("city", "Delhi");

console.log(user.get("name"));
console.log(user.get("city"));



// ===============================
// 4. Check Key Exists
// ===============================

let data = new Map();

data.set("mobile", "Samsung");

console.log(data.has("mobile"));
console.log(data.has("price"));



// ===============================
// 5. Delete Key
// ===============================

let product = new Map();

product.set("name", "Laptop");
product.set("price", 50000);

product.delete("price");

console.log(product);



// ===============================
// 6. Size of Map
// ===============================

let map1 = new Map();

map1.set("a", 10);
map1.set("b", 20);
map1.set("c", 30);

console.log(map1.size);



// ===============================
// 7. Clear Full Map
// ===============================

let map2 = new Map();

map2.set("x", 1);
map2.set("y", 2);

map2.clear();

console.log(map2);



// ===============================
// 8. Loop Through Map
// ===============================

let emp = new Map();

emp.set("id", 101);
emp.set("name", "Aman");
emp.set("salary", 50000);

for (let [key, value] of emp) {
    console.log(key, value);
}



// ===============================
// 9. Only Keys
// ===============================

let map3 = new Map();

map3.set("name", "Surya");
map3.set("age", 22);

for (let key of map3.keys()) {
    console.log(key);
}



// ===============================
// 10. Only Values
// ===============================

let map4 = new Map();

map4.set("html", 90);
map4.set("css", 80);
map4.set("js", 95);

for (let value of map4.values()) {
    console.log(value);
}



// ===============================
// 11. forEach in Map
// ===============================

let map5 = new Map();

map5.set("apple", 100);
map5.set("banana", 50);

map5.forEach((value, key) => {
    console.log(key, value);
});



// ===============================
// 12. Object as Key
// ===============================

let map6 = new Map();

let obj = {
    id: 1
};

map6.set(obj, "User Data");

console.log(map6.get(obj));



// ===============================
// 13. Array to Map
// ===============================

let arr = [
    ["name", "Surya"],
    ["age", 22],
    ["city", "Delhi"]
];

let map7 = new Map(arr);

console.log(map7);



// ===============================
// 14. Map to Array
// ===============================

let map8 = new Map();

map8.set("a", 1);
map8.set("b", 2);

let result = [...map8];

console.log(result);



// ===============================
// 15. Frequency Counter
// ===============================

let nums = [1, 2, 2, 3, 3, 3, 4];

let freq = new Map();

for (let num of nums) {

    if (freq.has(num)) {
        freq.set(num, freq.get(num) + 1);
    } else {
        freq.set(num, 1);
    }
}

console.log(freq);



// ===============================
// 16. Character Frequency
// ===============================

let str = "banana";

let charMap = new Map();

for (let ch of str) {

    if (charMap.has(ch)) {
        charMap.set(ch, charMap.get(ch) + 1);
    } else {
        charMap.set(ch, 1);
    }
}

console.log(charMap);



// ===============================
// 17. Find Duplicate Elements
// ===============================

let numbers = [1, 2, 3, 2, 4, 5, 1];

let countMap = new Map();

for (let num of numbers) {

    if (countMap.has(num)) {
        countMap.set(num, countMap.get(num) + 1);
    } else {
        countMap.set(num, 1);
    }
}

for (let [key, value] of countMap) {

    if (value > 1) {
        console.log("Duplicate:", key);
    }
}



// ===============================
// 18. First Non-Repeating Character
// ===============================

let text = "aabbcddee";

let map9 = new Map();

for (let ch of text) {

    if (map9.has(ch)) {
        map9.set(ch, map9.get(ch) + 1);
    } else {
        map9.set(ch, 1);
    }
}

for (let ch of text) {

    if (map9.get(ch) === 1) {
        console.log("First Non-Repeating:", ch);
        break;
    }
}



// ===============================
// 19. Word Frequency
// ===============================

let sentence = "hello world hello js world";

let words = sentence.split(" ");

let wordMap = new Map();

for (let word of words) {

    if (wordMap.has(word)) {
        wordMap.set(word, wordMap.get(word) + 1);
    } else {
        wordMap.set(word, 1);
    }
}

console.log(wordMap);



// ===============================
// 20. Two Sum Problem
// ===============================

let arr2 = [2, 7, 11, 15];
let target = 9;

let map10 = new Map();

for (let i = 0; i < arr2.length; i++) {

    let complement = target - arr2[i];

    if (map10.has(complement)) {
        console.log(map10.get(complement), i);
        break;
    }

    map10.set(arr2[i], i);
}