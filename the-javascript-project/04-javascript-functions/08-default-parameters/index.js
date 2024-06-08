function addTwo(a, b) {
    if (typeof b === "undefined") b = 0;
    if (typeof a === "undefined") a = 0;
    return a + b;
}; console.log(addTwo(4, 5));
console.log(addTwo(4));
console.log(addTwo());


function addTwoDefault(a = 0, b = 0) {
    return a + b;
}; console.log(addTwoDefault(4, 5));
console.log(addTwoDefault(4));
console.log(addTwoDefault());