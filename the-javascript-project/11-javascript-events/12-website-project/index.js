const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type = \"text\"]");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodoText = todoInput.value;
    const newListItem = document.createElement("li");
    const newListItemInnerHTML = `<span class = "text">${newTodoText}</span>
                                  <div class = "todo-btns">
                                    <button class = "todo-btn done">done</button>
                                    <button class = "todo-btn remove">remove</button>
                                  </div>`;

    newListItem.innerHTML = newListItemInnerHTML;
    todoList.append(newListItem);
    todoInput.value = "";
});

todoList.addEventListener("click", event => {
    if (event.target.classList.contains("remove")) {
        const targettedListItem = event.target.parentNode.parentNode;
        targettedListItem.remove();
    }; if (event.target.classList.contains("done")) {
        const listSpanElement = event.target.parentNode.previousElementSibling;
        listSpanElement.style.textDecoration = "line-through";
    }
})