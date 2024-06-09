// function does not have an object data type
function hello() {
    console.log("hello, world!");
}; console.log(typeof hello);

// treating function as a function/object combination
console.log(hello.name); // name property

// adding manually created properties to functions
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// functions provide an empty object called prototype
console.log(hello.prototype); // prototype is an object
console.log(typeof hello.prototype);

// functions are the only data type to provide prototype property
let helloAgain = {key1: "value1"}; // object
if (helloAgain.prototype)
    console.log("prototype is present");
else console.log("prototype is not present");
helloAgain = ["item1"]; // array
if (helloAgain.prototype)
    console.log("prototype is present");
else console.log("prototype is not present");

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
    return "lalalalalalala";
}
console.log(hello.prototype);