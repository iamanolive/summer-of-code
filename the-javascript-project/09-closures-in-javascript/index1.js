function outerFunction () {
    function innerFunction () {
        console.log("hello, world!");
    }; return innerFunction;
}

const func1 = outerFunction(); func1();


function printFullname(firstname, lastname) {
    function printName() {
        console.log(firstname, lastname);
    }; return printName;
}

const funcName = printFullname("cassidy", "blake");
funcName(); // returns with local variables