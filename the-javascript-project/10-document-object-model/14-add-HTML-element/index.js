const todoList = document.querySelector(".todo-list");
console.log(todoList);
console.log(todoList.innerHTML);

// browser re-renders all previous todoList items
todoList.innerHTML += "<li>new todo</li>";
todoList.innerHTML += "<li>another todo</li>";