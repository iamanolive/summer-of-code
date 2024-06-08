function myFunc(a) {
    console.log(a);
    console.log("hello, world!");
}; 

myFunc([1, 2, 3]);
myFunc("abc"); 
myFunc({name: "cassidy"});

function myFunc2 (name) {
    console.log("inside myFunc2");
    console.log(`my name is ${name}`);
}; myFunc(myFunc2);

function anotherFunc(callback) {
    console.log("hello i am a function");
    callback("cassidy");
}; 

anotherFunc(myFunc2);