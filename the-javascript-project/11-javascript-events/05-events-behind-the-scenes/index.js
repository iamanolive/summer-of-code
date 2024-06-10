console.log("script ends here!");

const buttons = document.querySelectorAll(".my-buttons button");
buttons.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.currentTarget.textContent);
    });
});


console.log("script ends here!");