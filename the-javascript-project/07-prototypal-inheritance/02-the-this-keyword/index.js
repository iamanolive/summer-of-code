console.log(this); // global window object
console.log(window);
console.log(this === window);


// myFunc added in window object
function myFunc() {
    // console.log("hello world");
    console.log(this);
}; myFunc(); window.myFunc();


// the "use strict" mode
function anotherFunc() {
    "use strict";
    console.log(this);
}; anotherFunc(); // undefined