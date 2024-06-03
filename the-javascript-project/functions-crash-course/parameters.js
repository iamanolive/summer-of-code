// default parameters

function calc(a, b) {
    return (2 * (a + b));
}
console.log(calc(2, 3));
console.log(calc(3, 3));
console.log(calc(3)); // NaN

function calc(a, b = 0) {
    return (2 * (a + b));
}; console.log(calc(3));



// rest parameters

function collectThings(x, ...y) {
    console.log(x);
    console.log(y);
}; collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9);