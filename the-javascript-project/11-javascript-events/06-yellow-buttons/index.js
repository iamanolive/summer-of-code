const buttons = document.querySelectorAll(".my-buttons button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        buttons[i].style.backgroundColor = "yellow";
        buttons[i].style.color = "gray";
    });
};