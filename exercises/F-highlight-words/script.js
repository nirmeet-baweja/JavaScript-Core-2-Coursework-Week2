/*
 * Function to create a drop down list for given colours
 * This dropdown list can then be appended to the content on the webpage
 * Returns an object containing the <select> tag and <label> tag.
 */
function createColoursDropdown(colours) {
  // create the drop down label
  let dropDownLabel = document.createElement("label");
  dropDownLabel.innerHTML = "Chose a colour : ";
  dropDownLabel.for = "colours";

  // create the drop down list
  let dropDownList = document.createElement("select");
  dropDownList.id = "colours";

  // add the option tags for the colours
  for(let i = 0; i < colours.length; i++) {
    let dropDownItem = document.createElement("option");
    dropDownItem.innerHTML = colours[i].toUpperCase();
    // append the option ta to select tag
    dropDownList.appendChild(dropDownItem);
  }

  // create a dropdown object which can then be returned by the function
  let dropDown = {
    label: dropDownLabel,
    select: dropDownList
  };

  return dropDown;
}

/*
 * Function to create a paragraph tag with each word in its own <span>
 * Returns a <p> tag.
 */
function createParaWithSpan(paragraph) {
  // split the paragraph into an array of words
  let words = paragraph.split(" ");

  // create the <p> tag to store words
  let paraTag = document.createElement("p");

  // add each word to its own <span> and append it to <p>
  for(let i = 0; i < words.length; i++) {
    let wordSpan = document.createElement("span");
    wordSpan.innerHTML = words[i] + " ";

    paraTag.appendChild(wordSpan);
  }

  // return the <p> tag
  return paraTag;
}

/*
 * Function to add an event listener to all the <span> tags of a given <p> tag
 * to change the background colour of <span> based on the current value
 * of the <select> tag.
 * Returns nothing
 */
function addParaEventListener(paraTag, dropDown) {
  let paraSpans = paraTag.childNodes;

  for(let i = 0; i < paraSpans.length; i++) {
    paraSpans[i].addEventListener("click", function() {
      if(dropDown.select.value.toLowerCase() === "none") {
        this.style.backgroundColor="";
      }
      else {
        this.style.backgroundColor = dropDown.select.value;
      }
    });
  }
}

/*
 * Function to render the 'paragraph' on the webpage and
 * highlight the words of the 'paragraph' based on the value selected
 * in the drop down list created using the 'colours' array
 */
function highlightWords(paragraph, colours) {
  // get the content of the webpage in a variable
  let content = document.getElementById("content");

  // create the <select> and <label> tags for the dropdown
  let dropDown = createColoursDropdown(colours);

  // create the <p> tag to render on the webpage
  let paraTag = createParaWithSpan(paragraph);

  // add the event listener to the <p> tag dependent on the <select>'s value
  addParaEventListener(paraTag, dropDown);

  // append all the components to the content
  content.appendChild(paraTag);
  content.appendChild(dropDown.label);
  content.appendChild(dropDown.select);
}


const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);