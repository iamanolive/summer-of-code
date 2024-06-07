// dry = don't repeat yourself
let i = 0;
while (i <= 3) {
    console.log(i); i++;
}; console.log("hello");
console.log(`current value of i = ${i}`);

// sum of first "num" natural numbers
let num = 10;
let sum = 0;
let iterator = 0;
while (iterator <= num) {
    sum = sum + iterator;
    iterator = iterator + 1;
}; console.log(sum);

// mathematical formula
console.log((num * (num + 1) / 2));