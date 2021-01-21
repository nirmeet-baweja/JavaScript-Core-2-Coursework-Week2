/*
 * Function takes string as a parameter and returns a complete <li> tag
 */
function createListItem(todo) {
  // create all the ags required for the todo list item
  let listItem = document.createElement("li");
  let listSpan= document.createElement("span");
  let listItemCheck = document.createElement("i");
  let listItemDelete = document.createElement("i");

  // apply the class name and attributes to each tag
  listItem.className = "list-group-item d-flex justify-content-between align-items-center";
  listSpan.className = "badge bg-primary rounded-pill";
  listItemCheck.className = "fa fa-check";
  listItemDelete.className = "fa fa-trash";
  listItemCheck.setAttribute("aria-hidden", "true");
  listItemDelete.setAttribute("aria-hidden", "true");

  listItemCheck.addEventListener("click", function() {
    if( listItem.style.textDecoration === "line-through" ) {
      listItem.style.textDecoration = "";
    }
    else {
      listItem.style.textDecoration = "line-through";
    }
  });

  listItemDelete.addEventListener("click", function(event) {
    // remove the <li> containing the todo item
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  });

  // append the <i> to span
  listSpan.appendChild(listItemCheck);
  listSpan.appendChild(listItemDelete);

  // append the todo text and <span> to <li>
  listItem.innerHTML = todo;
  listItem.appendChild(listSpan);

  // return the complete todo list item
  return listItem;
}

/*
 * Function to populate the todo list with the items in the object array "todos"
 */
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  for(let i = 0; i < todos.length; i++) {
    let listItem = createListItem(todos[i].task);
    if(todos[i].completed) {
      listItem.style.textDecoration = "line-through";
    }
    list.appendChild(listItem);
  }
}


// object array used to populate the todo list in the beginning
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

/*
 * This function will take the value of the input field and
 * add it as a new todo to the bottom of the todo list.
 * These new todos will need the completed and
 * delete buttons added like normal.
 * This functions is called when the "Add Todo" button is clicked.
 */
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  let todoInput = document.getElementById("todoInput");

  if(todoInput.value !== "") {
    let listItem = createListItem(todoInput.value);
    let list = document.getElementById("todo-list");
    list.appendChild(listItem);
    todoInput.value = "";
  }
}

/*
 * Advanced challenge:
 * Write a function that checks the todos in the todo list and
 * deletes the completed ones.
 * We can check which ones are completed by seeing
 * if they have the line-through styling applied or not.
 */
function deleteAllCompletedTodos(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  let listItems = document.getElementsByClassName("list-group-item");
  for(let i = 0; i < listItems.length; i++) {
    if(listItems[i].style.textDecoration === "line-through") {
      listItems[i].parentNode.removeChild(listItems[i]);
      i = i - 1;
    }
  }
}
