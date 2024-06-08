// declaring a function
function singHappyBirthday() {
    console.log("happy birthday to you...");
}; singHappyBirthday();
// invoking a previously-declared function
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();


// return value of number data type
function twoPlusFour() {
    return 2 + 4;
}; console.log(twoPlusFour());
const returnValue = twoPlusFour();
console.log(returnValue);


// function with parameters
function sumTwoNumbers(number1, number2) { // parameters
    return number1 + number2;
}; const returnSum = sumTwoNumbers(4, 5); // arguments
console.log(returnSum);
// undefined + undefined = NaN
console.log(sumTwoNumbers());


// return sum of three input numbers
function sumThreeNumbers(number1, number2, number3) {
    return number1 + number2 + number3;
}; console.log(sumThreeNumbers(2, 3, 4));
console.log(sumThreeNumbers(2, 3));
console.log(2 + 3 + undefined);


// return whether input number is even or odd
function oddOrEven(number) {
    return number % 2 === 0;
}; console.log(oddOrEven(2));
console.log(oddOrEven(11));


// return first character of input string
function firstCharacterOfString(string) {
    if (string !== undefined && string.length > 0)
        return string[0];
}; console.log(firstCharacterOfString(""));
console.log(firstCharacterOfString("cassidy"));
console.log(firstCharacterOfString());


// find index of target value in array
function targetInArray(array, target) {
    for (let i = 0; i < array.length; i++)
        if (array[i] === target)
            return i;
    return -1;
}; const myArray = [1, 3, 8, 90];
console.log(targetInArray(myArray, 8));
console.log(targetInArray(myArray, 7));