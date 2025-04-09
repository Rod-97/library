const myLibrary = [];

function Book(title, author, year) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(title, author, year) {
  const book = new Book(title, author, year);
  myLibrary.push(book);
}
