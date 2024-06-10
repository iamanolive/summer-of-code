function myFunction (power) {
    return function (number) {
        return number ** power;
    }
}

const cube = myFunction(3);
const result = cube(2);
console.log(result);

const square = myFunction(2);
const result2 = square(3);
console.log(result2);