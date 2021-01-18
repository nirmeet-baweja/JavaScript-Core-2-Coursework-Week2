function listOfNames(people) {
  let content = document.getElementById("content");

  for(let i = 0; i < people.length; i++) {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");

    h1.innerHTML = people[i].name;
    h2.innerHTML = people[i].job;

    content.appendChild(h1);
    content.appendChild(h2);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
