const fruits = ["apple", "mango", "grapes"];
const fruitsUppercased = [];
let iterator = 0;
while (iterator < fruits.length) {
    console.log(fruits[iterator]);
    fruitsUppercased.push(fruits[iterator].toUpperCase());
    iterator = iterator + 1;
}; console.log(fruitsUppercased);