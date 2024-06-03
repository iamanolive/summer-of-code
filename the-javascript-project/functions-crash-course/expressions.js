const count = 100;

function printMe() {
    console.log("printing...")
}

const printMeAgain = function() {
    console.log("print")
}; printMeAgain()

const printMeAgainWithParam = function(a, b) {
    console.log(a, b);
}; printMeAgainWithParam(10, 20);