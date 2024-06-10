// keypress event
const body = document.body;
body.addEventListener("keypress", event => {
    console.log(event.key);
})

// mouseover event
const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover", () => {
    console.log("a mouseover event just occurred!");
});

// mouseleave event
mainButton.addEventListener("mouseleave", () => {
    console.log("a mouseleave event just occurred!");
});