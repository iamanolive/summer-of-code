// the address is constant
const fruits = ["apple", "mango"];
fruits.push("banana");
console.log(fruits);
// changing the address is not allowed
// fruits = ["grapes", "pineapple"];

let moreFruits = ["apple", "mango"];
moreFruits.push("banana");
console.log(moreFruits);
// address can be changed when declared with let
moreFruits = ["grapes", "pineapple"];
console.log(moreFruits);