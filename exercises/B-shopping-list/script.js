function shoppingList(list) {
  let content = document.getElementById("content");

  let ul = document.createElement("ul");

  for(let i = 0; i < list.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = list[i];
    ul.appendChild(listItem);
  }

  content.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
