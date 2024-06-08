function myFunc() {
    return {name: "cassidy", age: 11};
}; console.log(myFunc());


function myFunc2() {
    function hello() {
        console.log("hello, world!");
    }; return hello;
}; 
console.log(myFunc2());
const answer2 = myFunc2(); answer2();


function myFunc3() {
    function hello() {
        return "hello, world!";
    }; return hello;
};
const answer3 = myFunc3();
console.log(answer3());


function myFunc4() {
    return function() {
        return "hello, world!";
    };
};
const answer4 = myFunc4();
console.log(answer4());