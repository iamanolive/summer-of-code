// primitive data types
let num1 = 6;
let num2 = num1;
console.log(`num1 = ${num1}`);
console.log(`num2 = ${num2}`);
num1 += 1; // incrementing
console.log(`num1 = ${num1}`);
console.log(`num2 = ${num2}`);
// reference data types
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3"); // pushing element
console.log("array1", array1);
console.log("array2", array2);