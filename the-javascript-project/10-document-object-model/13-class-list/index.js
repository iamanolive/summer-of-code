const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
// classes contained in section-todo
console.log(sectionTodo.classList);

sectionTodo.classList.add("bg-dark"); // adding class
sectionTodo.classList.remove("container"); // removing class
const hasContainerClass = sectionTodo.classList.contains("container");
console.log(hasContainerClass); // contains class
sectionTodo.classList.toggle("bg-dark"); // toggle class


const header = document.querySelector(".header");
console.log(header.classList);

header.classList.add("bg-dark"); // add class
console.log(header.classList);