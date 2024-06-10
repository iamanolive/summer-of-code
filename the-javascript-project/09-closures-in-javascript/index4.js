function func() {
    let counter = 0;
    return function () {
        if (counter === 0) {
            console.log("hi, you called me!!");
            counter += 1;
        } else
            console.log("i have already been called before");
    }
}

const myFunc = func();
myFunc(); myFunc(); myFunc();

const myFunc2 = func();
myFunc2(); myFunc2();