const buttons = document.querySelectorAll(".my-buttons button");

// the for of loop
for (let button of buttons) {
    button.addEventListener("click", function () {
        console.log(this.textContent);
    });
}

// the for loop
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        console.log(this.textContent);
    });
}

// the for each method
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log(this.textContent);
    });
});