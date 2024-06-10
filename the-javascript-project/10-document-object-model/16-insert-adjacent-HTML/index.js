const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li>todo 2</li>");
todoList.insertAdjacentHTML("afterbegin", "<li>todo 0</li>");
todoList.insertAdjacentHTML("beforebegin", "<li>task 3</li>");
todoList.insertAdjacentHTML("afterend", "<li>todo 4</li>")