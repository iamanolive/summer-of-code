// guessing game

let winningNumber = 19;
let userGuess = prompt("Guess a number");
console.log(userGuess, typeof userGuess);
userGuess = Number(userGuess);

if (userGuess === winningNumber)
    console.log("your guess is right!");
else {
    if (userGuess > winningNumber)
        console.log("your guess is too high!");
    else
        console.log("your guess is too low!");
}