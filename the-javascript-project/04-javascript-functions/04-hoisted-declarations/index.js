hello(); // function invoked before declaration
function hello() {
    console.log("hello, world!");
}; hello();

// does not work in the case of function expression
const hi = function () {
    console.log("hello, world!");
}; hi();

// undefined if declared with var
console.log(hullo);
var hullo = "hello, world!"
// error if declared with let or const