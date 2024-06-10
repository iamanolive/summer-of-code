// adding event in HTML document
// outdated

// cannot assign more than one function to a single event
const btn = document.querySelector(".btn-headline");
btn.onclick = function () {
    console.log("you clicked me!");
}

// the add event listener method
btn.addEventListener("click", () => {
    console.log("i was clicked!")
});