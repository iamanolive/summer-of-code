const obj1 = {
    key1: "value1",
    key2: "value2"
};

// setting __proto__ of obj2 to obj1
const obj2 = Object.create(obj1); // __proto__
obj2.key3 = "value3";
obj2.key1 = "unique";
// checks in __proto__ if key not in obj2
console.log(obj2.key3);
console.log(obj2.key1);
// __proto__ === [[prototype]]
console.log(obj2);
console.log(obj2.__proto__);
console.log(obj1.__proto__);