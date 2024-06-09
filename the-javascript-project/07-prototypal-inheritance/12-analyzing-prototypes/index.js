let numbers = new Array(1, 2, 3); // function

console.log(Array.prototype); // array
console.log(Array.isArray(Array.prototype));
console.log(numbers);
console.log(Object.getPrototypeOf(numbers));

function hello() {
    console.log("hello");
}; 

console.log(hello.prototype); // object
hello.prototype = []; // changing prototypes
console.log(hello.prototype); // array
hello.prototype.push(1);