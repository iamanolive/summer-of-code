const grandparent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// event capturing

child.addEventListener("click", () => {
    console.log("you captured the child!");
}, true);

parent.addEventListener("click", () => {
    console.log("you captured the parent!");
}, true);

grandparent.addEventListener("click", () => {
    console.log("you captured the grandparent!");
}, true);

document.body.addEventListener("click", () => {
    console.log("you captured the body!");
}, true);