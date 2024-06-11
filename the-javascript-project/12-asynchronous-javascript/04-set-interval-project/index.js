const body = document.body;
const button = document.querySelector("button");

function randomColorGenerator () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

const intervalID = setInterval (() => {
    body.style.background = randomColorGenerator();
}, 1000);

button.addEventListener("click", () => {
    clearInterval(intervalID);
    button.textContent = body.style.background;
});