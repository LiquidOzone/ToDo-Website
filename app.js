// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");

// EVENT-LISTENERS
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// FUNCTIONS
function addTodo(e) {
  // Preventing Browser Refresh
  e.preventDefault();
  // Creating a division
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   Creating a new li
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);
  //   Completed Button
  const complete = document.createElement("button");
  complete.innerHTML = '<i class="fas fa-check"></i>';
  complete.classList.add("complete-btn");
  todoDiv.appendChild(complete);
  //   Trash Button
  const trash = document.createElement("button");
  trash.innerHTML = '<i class="fas fa-trash"></i>';
  trash.classList.add("trash-btn");
  todoDiv.appendChild(trash);
  //    Appending Div to the list
  todoList.appendChild(todoDiv);
  //   Clear input value
  todoInput.value = "";
}

function deleteCheck(ev) {
  const item = ev.target;
  //   Delete mark
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("remove");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //   Check Mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
