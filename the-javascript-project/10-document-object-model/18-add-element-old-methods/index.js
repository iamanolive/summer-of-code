// append child
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "todo 2";
ul.appendChild(li);

// insert before
const referenceNode = document.querySelector(".first-todo");
const li2 = document.createElement("li");
li2.textContent = "todo 0";
ul.insertBefore(li2, referenceNode);

// replace child
const li3 = document.createElement("li");
li3.textContent = "replacement todo";
ul.replaceChild(li3, referenceNode);

// remove child
ul.removeChild(li3);