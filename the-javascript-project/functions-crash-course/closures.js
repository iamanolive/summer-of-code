function outer(x) {
    function inner(y) {
        return x + y;
    }; return inner;
}

const outerReturn = outer(10);
// the parameter 10 lives inside inner()
console.log(outerReturn);
console.log(outerReturn(2));