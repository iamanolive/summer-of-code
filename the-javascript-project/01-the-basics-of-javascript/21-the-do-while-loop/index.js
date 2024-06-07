// the while loop
let i = 10;
while (i <= 9) {
    console.log(i); 
    i += 1;
} // does not enter loop if first condition is false

// the do-while loop
do {
    console.log(i);
    i += 1;
} while (i <= 9); 
// checks condition after first execution
console.log(`the value of i = ${i}`);