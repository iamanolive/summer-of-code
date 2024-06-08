const numbers = [3, 4, 6, 1, 8];

const square = number => number * number;

// map returns a new array
const squaredNumbers = numbers.map(square);
console.log(squaredNumbers);

const moreSquaredNumbers = numbers.map(number => number * number);
console.log(moreSquaredNumbers);


const users = [
    {firstname: "cassidy", age: 11},
    {firstname: "jacob", age: 11},
    {firstname: "lara", age: 11},
    {firstname: "raven in red", age: 274}
];
const usernames = users.map(user => user.firstname);
console.log(usernames);