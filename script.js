const myLibrary = [];

function Book(title, author, year, imageUrl) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.year = year;
  this.imageUrl = imageUrl;
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

    const title = document.createElement("h2");
    const img = document.createElement("img");
    const author = document.createElement("div");
    const year = document.createElement("div");

    title.textContent = book.title;
    img.src = book.imageUrl;
    author.textContent = book.author;
    year.textContent = book.year;

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(author);
    card.appendChild(year);
    main.appendChild(card);
  });
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
