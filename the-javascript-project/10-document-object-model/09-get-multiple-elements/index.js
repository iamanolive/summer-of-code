// get elements by class name
const navItems = document.getElementsByClassName("nav-item");
console.log(navItems); // HTML collection
console.log(typeof navItems); // array-like object
console.log(Array.isArray(navItems));

console.log(navItems[0]);
console.log(navItems[1]);
console.log(navItems[2]);

// query selector all
const moreNavItems = document.querySelectorAll(".nav-item");
console.log(moreNavItems); // node list
console.log(typeof moreNavItems); // array-like object

console.log(moreNavItems[0]);
console.log(moreNavItems[1]);
console.log(moreNavItems[2]);