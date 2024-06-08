const numbers = [4, 2, 5, 8];

function multiplyByTwo(number, index) {
    console.log(`index = ${index}`);
    console.log(`${number} * 2 = ${number * 2}`);
};

for (let i = 0; i < numbers.length; i++)
    multiplyByTwo(numbers[i], i);

numbers.forEach(multiplyByTwo);

numbers.forEach((number, index) => {
    console.log(`index = ${index}`);
    console.log(`${number} * 2 = ${number * 2}`);
});



const users = [
    {firstname: "cassidy", age: 11},
    {firstname: "jacob", age: 11},
    {firstname: "lara", age: 11},
    {firstname: "raven in red", age: 274}
];

users.forEach(user => console.log(user.firstname));