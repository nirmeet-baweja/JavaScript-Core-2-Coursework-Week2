/*****************************************************************************/

/* Part 1 */

// object to store the themes corresponding to buttons
let themes = {
  blueBtn: {
    jumbotron: "#588fbd",
    donateButton: "#ffa500",
    volunteerButton: "black",
    volunteerButtonText: "white"
  },
  orangeBtn: {
    jumbotron: "#f0ad4e",
    donateButton: "#5751fd",
    volunteerButton: "#31b0d5",
    volunteerButtonText: "white"
  },
  greenBtn: {
    jumbotron: "#87ca8a",
    donateButton: "black",
    volunteerButton: "#8c9c08",
    volunteerButtonText: "black"
  }
}

// callback function for event listener to update the theme
function changeTheme(btnPressedId) {
  let jumbotrons = document.getElementsByClassName("jumbotron");
  let donateBtn = document.getElementById("donateBtn");
  let volunteerBtn = document.getElementById("volunteerBtn");

  // update the background colours of the elements
  jumbotrons[0].style.backgroundColor = themes[btnPressedId].jumbotron;
  donateBtn.style.backgroundColor = themes[btnPressedId].donateButton;
  volunteerBtn.style.backgroundColor = themes[btnPressedId].volunteerButton;
  volunteerBtn.style.color = themes[btnPressedId].volunteerButtonText;
}

function themeUpdate() {
  let blueBtn = document.getElementById("blueBtn");
  blueBtn.addEventListener("click", function() {
    changeTheme(this.id);
  });

  let orangeBtn = document.getElementById("orangeBtn");
  orangeBtn.addEventListener("click", function() {
    changeTheme(this.id);
  });

  let greenBtn = document.getElementById("greenBtn");
  greenBtn.addEventListener("click", function() {
    changeTheme(this.id);
  });
}

themeUpdate();

/*****************************************************************************/

/* Part 2 */

// check if the form fields are valid

function checkOnSubmit() {
  let formFields = document.getElementsByClassName("form-control");
  let allFieldsValid = true;

  for(let i = 0; i < formFields.length; i++) {
    if(formFields[i].value.length <= 0) {
      allFieldsValid = false;
      formFields[i].style.backgroundColor = "#ffa1a1";
    }
    else {
      formFields[i].style.backgroundColor = "white";
    }
  }

  // regular expression to check for a valid email
  let regex = /^[a-zA-Z0-9-._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
  let isValidEmail = regex.test(formFields[0].value) && formFields[0].value !== "";

  if( !isValidEmail ) {
    allFieldsValid = false;
    formFields[0].style.backgroundColor = "#ffa1a1";
  }
  else {
    formFields[0].style.backgroundColor = "white";
  }

  if( allFieldsValid ) {

    setTimeout(function() {
      alert("Thank you for filling out the form");
    }, 0.5);

    setTimeout(function() {
      for(let i = 0; i < formFields.length; i++) {
        formFields[i].value = "";
      }
    }, 1);

  }
}

function checkFormValidity() {
  let submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    checkOnSubmit();
  });
}

checkFormValidity();
