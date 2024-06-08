const app = () => {
    const myFunc = () => {
        console.log("hello from inside myFunc");
    }; const addTwo = (number1, number2) => {
        return number1 + number2;
    }; const multiply = (number1, number2) => {
        return number1 * number2;    
    }; console.log("you are inside the app");
    myFunc(); // cannot be called outside app()
    console.log(addTwo(1, 2));
    console.log(multiply(2, 3));
}; app();