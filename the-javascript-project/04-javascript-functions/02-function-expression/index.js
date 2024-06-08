const singHappyBirthday = function () { 
    // anonymous function
    console.log("happy birthday to you...")
}; singHappyBirthday();


const twoPlusFour = function () {
    return 2 + 4;
}; console.log(twoPlusFour());
console.log(twoPlusFour);


const sumTwoNumbers = function (number1, number2) {
    return number1 + number2;
}; console.log(sumTwoNumbers(1, 2));


const sumThreeNumbers = function (number1, number2, number3) {
    return number1 + number2 + number3;
}; console.log(sumThreeNumbers(1, 2, 3));


const oddOrEven = function (number) {
    return number % 2 == 0;
}; console.log(oddOrEven(2));


const firstCharacterOfString = function (string) {
    if (string !== undefined && string.length > 0)
        return string[0];
}; console.log(firstCharacterOfString("cassidy"));


const targetInArray = function (array, target) {
    for (let i = 0; i < array.length; i++)
        if (array[i] === target)
            return i;
    return -1;
}; const myArray = [1, 3, 8, 90];
console.log(targetInArray(myArray, 8));
console.log(targetInArray(myArray, 7));