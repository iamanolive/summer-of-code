const grandparent = document.querySelector(".grand-parent");

grandparent.addEventListener("click", (event) => {
    console.log("you clicked something!");
    console.log(event.target);
    console.log(event.target.textContent);
});