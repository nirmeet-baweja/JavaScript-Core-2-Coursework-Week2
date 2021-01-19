function listOfColours(colours) {
  // get the content in a variable
  let content = document.getElementById("content");

  // create and append the heading to the content
  let h1 = document.createElement("h1");
  h1.innerHTML = "Colours Exercise";

  // create the drop down label
  let dropDownLabel = document.createElement("label");
  dropDownLabel.innerHTML = "Chose a colour : ";
  dropDownLabel.for = "colours";

  // create the drop down list
  let dropDownList = document.createElement("select");
  dropDownList.id = "colours";

  // create an empty paragraph
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "";

  // add the option tags for the colours
  for(let i = 0; i < colours.length; i++) {
    let dropDownItem = document.createElement("option");
    dropDownItem.innerHTML = colours[i].toUpperCase();
    // append the option ta to select tag
    dropDownList.appendChild(dropDownItem);
  }

  // add an event listener to the select tag
  dropDownList.addEventListener("change", function() {
    paragraph.innerHTML = `You have selected ${this.value.toLowerCase()}!`;
    paragraph.style.color = this.value.toLowerCase();
  });

  // append all the elements to content
  content.appendChild(h1);
  content.appendChild(dropDownLabel);
  content.appendChild(dropDownList);
  content.appendChild(paragraph);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
