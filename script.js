const myLibrary = [];

function Book(title, author, year, imageUrl) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.year = year;
  this.imageUrl = imageUrl;
  this.read = false;
}

function addBookToLibrary(title, author, year, imageUrl) {
  const book = new Book(title, author, year, imageUrl);
  myLibrary.push(book);
}

function displayLibrary() {
  const main = document.getElementsByClassName("main")[0];

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = book.id;

    const title = document.createElement("h2");
    const img = document.createElement("img");
    const container = document.createElement("div");
    const author = document.createElement("div");
    const year = document.createElement("div");
    const read = document.createElement("div");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    container.classList.add("info-container");
    read.classList.add("read");
    deleteButton.classList.add("delete-btn");

    title.textContent = book.title;
    img.src = book.imageUrl;

    const authorSpan = document.createElement("span");
    const authorName = document.createElement("span");
    authorSpan.textContent = "Author: ";
    authorName.textContent = book.author;
    authorSpan.classList.add("info-span");
    authorName.classList.add("author-name");
    author.appendChild(authorSpan);
    author.appendChild(authorName);

    const yearSpan = document.createElement("span");
    const yearContent = document.createElement("span");
    yearSpan.textContent = "Year: ";
    yearContent.textContent = book.year;
    yearSpan.classList.add("info-span");
    yearContent.classList.add("year");
    year.appendChild(yearSpan);
    year.appendChild(yearContent);

    read.classList.add("info-span");
    read.textContent = "Read: ";

    read.appendChild(checkbox);
    card.appendChild(title);
    card.appendChild(img);
    container.appendChild(author);
    container.appendChild(year);
    container.appendChild(read);
    card.appendChild(container);
    card.appendChild(deleteButton);
    main.appendChild(card);
  });
}

function markAsRead(bookId) {
  const book = myLibrary.find((book) => book.id === bookId);
  book.read ? null : (book.read = true);
}

function deleteBook(bookId) {
  const bookIdx = myLibrary.findIndex((book) => {
    return book.id === bookId;
  });
  myLibrary.splice(bookIdx, 1);
}

addBookToLibrary(
  "The Beginning of Infinity",
  "David Deutsch",
  2011,
  "https://m.media-amazon.com/images/I/716R8HCtH+L._AC_UF1000,1000_QL80_.jpg"
);
addBookToLibrary(
  "Atlas Shrugged",
  "Ayn Rand",
  1957,
  "https://m.media-amazon.com/images/I/41pTUDMiQNL._AC_UF1000,1000_QL80_.jpg"
);
addBookToLibrary(
  "Twenty Thousand Leagues Under the Sea",
  "Jules Verne",
  1870,
  "https://m.media-amazon.com/images/I/81nNl5oyfXL._AC_UF1000,1000_QL80_.jpg"
);
addBookToLibrary(
  "The Origin of Species",
  "Charles Darwin",
  1859,
  "https://m.media-amazon.com/images/I/71ea0N8I14L.jpg"
);

displayLibrary();

const newBookBtn = document.querySelectorAll(".new-book-btn")[0];
const dialog = document.querySelectorAll(".dialog")[0];
const shadow = document.querySelectorAll(".shadow")[0];
const submitBtn = document.querySelector("#submit-btn");
const checkboxes = document.querySelectorAll(".checkbox");
const deleteButtons = document.querySelectorAll(".delete-btn");

newBookBtn.addEventListener("click", () => {
  dialog.classList.add("active");
  shadow.classList.add("active");
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const imgUrl = document.getElementById("img-url").value;
  addBookToLibrary(title, author, year, imgUrl);
  dialog.classList.remove("active");
  shadow.classList.remove("active");
  displayLibrary();
});

shadow.addEventListener("click", () => {
  dialog.classList.remove("active");
  shadow.classList.remove("active");
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const card = checkbox.parentElement.parentElement.parentElement;
    markAsRead(card.id);
  });
});

deleteButtons.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", () => {
    const userInput = prompt(
      "Are you sure you want to delete this book? (yes/no)"
    );
    if (userInput.toLowerCase() !== "yes") return;
    const card = deleteBtn.parentElement;
    deleteBook(card.id);
    card.remove();
  });
});
