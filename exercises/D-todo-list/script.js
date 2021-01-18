function todoList(todos) {
  // get the content div in the variable content
  let content = document.getElementById("content");

  // create and append the h1 to the content
  let h1 = document.createElement("h1");
  h1.innerHTML = "Todo List";
  content.appendChild(h1);

  // create the ul tag and style it
  let ul = document.createElement("ul");
  ul.style.listStyleType = "circle";

  // create the listItem for each item of todo list and append it to ul
  for(let i = 0; i < todos.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = todos[i].todo;

    // add the event listener to stike out the todo item when clicked
    listItem.addEventListener("click", function() {
      if( !todos[i].isFinished ) {
        listItem.style.textDecoration = "line-through";
        todos[i].isFinished = true;
        listItem.style.listStyleType = "disc";
      }
      else {
        listItem.style.textDecoration = "none";
        todos[i].isFinished = false;
        listItem.style.listStyleType = "circle";
      }
    });

    // append the item to the list
    ul.appendChild(listItem);
  }

  // append the list to the content
  content.appendChild(ul);
}

const todos = [
  {
    todo: "wash the dishes",
    isFinished: false
  },
  {
    todo: "walk the dog",
    isFinished: false
  },
  {
    todo: "learn javascript",
    isFinished: false
  },
  {
    todo: "go shopping",
    isFinished: false
  }
];

todoList(todos);