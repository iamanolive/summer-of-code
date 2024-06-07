const fruits = ["apple", "mango", "grapes", "banana", "orange"];
const fruitsUppercase = [];

for (let index in fruits) {
    console.log(fruits[index]);
    fruitsUppercase.push(fruits[index].toUpperCase());
}; console.log(fruitsUppercase);