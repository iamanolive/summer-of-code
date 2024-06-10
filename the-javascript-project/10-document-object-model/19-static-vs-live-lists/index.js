// static list (query selector all)
const listItems = document.querySelectorAll(".todo-list li");
const sixthListItem = document.createElement("li");
sixthListItem.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixthListItem);

// live list (get elements by)
const ul2 = document.querySelector(".todo-list");
const listItems2 = ul.getElementsByTagName("li");
const seventhListItem = document.createElement("li");
seventhListItem.textContent = "item 7";
ul2.append(seventhListItem);


console.log(listItems); // 5
console.log(listItems2); // 7