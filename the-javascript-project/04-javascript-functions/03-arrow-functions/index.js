const singHappyBirthday = () => {
    console.log("happy birthday to you...");
}; singHappyBirthday();


// reduce to a single line when made of only one expression
const twoPlusFour = () =>  2 + 4; // return is implicit
console.log(twoPlusFour());
console.log(twoPlusFour);


const sumTwoNumbers = (number1, number2) => number1 + number2;
console.log(sumTwoNumbers(2, 3));


const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}; console.log(sumThreeNumbers(1, 2, 3));


// parantheses are removed when parameter count is 1
const oddOrEven = number => {
    return number % 2 == 0;
}; console.log(oddOrEven(2));


const firstCharacterOfString = (string) => {
    if (string !== undefined && string.length > 0)
        return string[0];
}; console.log(firstCharacterOfString("cassidy"));


const targetInArray = (array, target) => {
    for (let i = 0; i < array.length; i++)
        if (array[i] === target)
            return i;
    return -1;
}; const myArray = [1, 3, 8, 9, 90];
console.log(targetInArray(myArray, 8));
console.log(targetInArray(myArray, 7));