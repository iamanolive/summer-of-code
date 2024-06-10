// get element by tag name
const navItems = document.getElementsByTagName("a");
console.log(navItems);
console.log(navItems.length);
// the simple for loop
for (let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}
// the for of loop
for (let navItem of navItems) {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "blue";
    navItem.style.fontWeight = "bold";
}
// the for each method
// cannot be used to iterate through HTML collections
// changing HTML collection into array
const moreNavItems = Array.from(navItems);
console.log(Array.isArray(moreNavItems));
// using for each method on array
moreNavItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "red";
    navItem.style.fontWeight = "bold";
})




// query selector
let navigationItems = document.querySelectorAll("a");
console.log(navigationItems);
// the simple for loop
for (let i = 0; i < navigationItems.length; i++) {
    const navigationItem = navigationItems[i];
    navigationItem.style.background = "grey";
    navigationItem.style.color = "white";
    navigationItem.style.fontWeight = "500";
}
// the for of loop
for (let navigationItem of navigationItems) {
    navigationItem.style.background = "black";
    navigationItem.style.color = "white";
    navigationItem.style.fontWeight = "500";
}
// the for each method
navigationItems.forEach((navigationItem) => {
    navigationItem.style.backgroundColor = "#fff";
    navigationItem.style.color = "red";
    navigationItem.style.fontWeight = "bold";
})