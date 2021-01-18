function readingList(books) {
  let content = document.getElementById("content");

  let h1 = document.createElement("h1");
  h1.innerHTML = "Book List";
  content.appendChild(h1);

  let ul = document.createElement("ul");

  // style the ul tag
  ul.style.listStyleType = "none";
  ul.style.display = "flex";
  ul.style.flexWrap = "wrap";
  ul.style.padding = "20px";
  ul.style.width = "100%";

  for(let i = 0; i < books.length; i++) {
    // create the list item to add the book to it
    let listItem = document.createElement("li");
    listItem.style.width = "25%";
    listItem.style.padding = "10px";
    listItem.style.margin = "15px";

    // chose background colour based on read status
    if(books[i].alreadyRead === true)
      listItem.style.backgroundColor = "green";
    else
      listItem.style.backgroundColor = "red";

    // create the paragraph element to store book title and author
    let bookPara = document.createElement("p");
    bookPara.innerHTML = `${books[i].title} - ${books[i].author}`;

    // append the paragraph to the list item
    listItem.appendChild(bookPara);

    // create the image tag for the cover image
    let coverImage = document.createElement("img");

    // add image to the coverImage and its styling
    coverImage.src = books[i].coverImage;
    coverImage.style.width = "60%";

    // append coverImage to the list Item
    listItem.appendChild(coverImage);

    // append the list item to the list
    ul.appendChild(listItem);
  }

  // append ul to content
  content.appendChild(ul);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    coverImage: "https://miro.medium.com/max/1200/1*Qo27inBKBKY4Q4Pgk5KkbQ.png"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    coverImage: "https://www.penguin.co.uk/content/dam/prh/books/182/182458/9780141971551.jpg.transform/PRHDesktopWide_small/image.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    coverImage: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg"
  }
];

readingList(books);