// the undefined data type
let firstName; console.log(firstName);
console.log(typeof firstName);
// const cannot be left uninitialized
const lastName = undefined;
console.log(lastName);
console.log(typeof lastName);

// the null data type
let myVariable = null;
console.log(myVariable, typeof myVariable);
myVariable = "cassidy";
console.log(myVariable, typeof myVariable);
console.log(typeof null); // object

// the BigInt data type
console.log(Number.MAX_SAFE_INTEGER);
let myNumber = BigInt(123);
let sameMyNumber = 123n;
console.log(myNumber + sameMyNumber);
// cannot mix bigint and number