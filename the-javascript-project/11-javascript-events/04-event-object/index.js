const firstButton = document.querySelector("#btn-1");
firstButton.addEventListener("click", function (event) {
    console.log(event);
});


function hello(a) {
    console.log(a);
}; hello({
    firstKey: "value1",
    secondKey: "value2"
});


const buttons = document.querySelectorAll(".my-buttons button");
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(this.textContent);
        console.log(event);
        console.log(event.target);
        console.log(event.currentTarget);
    });
}