const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("another todo");
newTodoItem.append(newTodoItemText);
console.log(newTodoItem);
// appending to interface
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem);


const todoItem2 = document.createElement("li");
todoItem2.textContent = "more todo";
todoList.append(todoItem2);


const todoItem3 = document.createElement("li");
todoItem3.textContent = "todo 0";
todoList.prepend(todoItem3);


const todo1 = document.querySelector(".todo-list li");
console.log(todo1);
todo1.remove(); 
console.log(todo1);


const anotherTodoItem = document.createElement("li");
anotherTodoItem.textContent = "todo 3";
todoList.before(anotherTodoItem);
todoList.after(anotherTodoItem);