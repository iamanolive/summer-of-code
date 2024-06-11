// synchronous programming

function myFunc(callback) {
    console.log("the first function is doing it's job");
    callback();
}; myFunc(() => {
    console.log("the second function is doing it's job");
});


function getTwoNumbers(number1, number2, callback) {
    if (typeof number1 === "number" && typeof number2 === "number")
        callback(number1, number2);
    else console.log("invalid data type");
};
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}; 
getTwoNumbers(4, 5, addTwoNumbers);
getTwoNumbers("4", 5, addTwoNumbers);


function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
    if (typeof number1 === "number" && typeof number2 === "number")
        onSuccess(number1, number2);
    else onFailure();
};

getTwoNumbersAndAdd(4, 4, (number1, number2) => {
    console.log(number1 + number2);
}, () => {
    console.log("invalid data type");
    console.log("please enter numbers only");
});