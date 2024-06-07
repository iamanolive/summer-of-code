const fruits = ["apple", "mango", "banana"];
const fruitsUppercased = [];

for (let fruit of fruits) {
    console.log(fruit);
    fruitsUppercased.push(fruit.toUpperCase());
}; console.log(fruitsUppercased);