// first "num" natural numbers
let num = 10;
for (let i = 0; i <= num; i++)
    console.log(i);
// (let) i cannot be printed outside
for (var i = 0; i <= num; i++)
    console.log(i);
// (var) i can be printed outside
console.log(i);

// sum of first "num" natural numbers
let sum = 0;
for (let i = 0; i <= num; i++)
    sum = sum + i;
console.log(sum);