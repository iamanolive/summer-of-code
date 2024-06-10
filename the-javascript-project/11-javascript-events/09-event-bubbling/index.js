const grandparent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// event bubbling (propagation)

child.addEventListener("click", () => {
    console.log("you clicked on the child!");
});

parent.addEventListener("click", () => {
    console.log("you clicked on the parent!");
});

grandparent.addEventListener("click", () => {
    console.log("you clicked on the grandparent!");
});

document.body.addEventListener("click", () => {
    console.log("you clicked on the body!");
});