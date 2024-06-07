// reference data types
let fruit = "apple";
console.log(fruit);
// ordered collections of elements
let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// array indexing
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// arrays can store values of any data type
let numbers = [1, 2, 3, 4];
console.log(numbers);
let mixed = [1, 2, 2.3, "string", null, undefined];
console.log(mixed);
// arrays are a mutable data type
console.log(fruits);
fruits[1] = "banana";
console.log(fruits); // altered array
// array is an object
console.log(typeof fruits);
console.log(Array.isArray(fruits));