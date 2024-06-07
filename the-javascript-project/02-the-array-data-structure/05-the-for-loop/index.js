let fruits = ["apple", "mango", "grapes", "banana"];
// array.length
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
// looping through an array
for (let i = 0; i < fruits.length; i++)
    console.log(fruits[i]);
// printing array elements in uppercase
for (let i = 0; i < fruits.length; i++)
    console.log(fruits[i].toUpperCase());
// creating a new uppercase array
let uppercasedFruits = [] // empty array
for (let i = 0; i < fruits.length; i++)
    uppercasedFruits.push(fruits[i].toUpperCase());
console.log(uppercasedFruits);