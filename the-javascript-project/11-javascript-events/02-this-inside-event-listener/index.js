const btn = document.querySelector(".btn-headline");

btn.addEventListener("click", function () {
    console.log("i was clicked.");
    console.log(this);
});

// normal function => this => function
// anonymous function => this => function
// function expression => this => function
// arrow function => this => window