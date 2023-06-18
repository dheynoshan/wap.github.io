let books = [
  {
    id: 1,
    title: "The Fault in Our Stars",
    isbn: "0-525-47881-7",
    publishedDate: "January 10, 2012",
    author: "John Green",
  },
];
let idcounter = 2;

module.exports = class Book {
  constructor(id, title, isbn, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.publishedDate = publishedDate;
    this.author = author;
  }

  save() {
    this.id = idcounter++;
    books.push(this);
    return this;
  }

  static getAll() {
    return books;
  }

  static getBookById(id) {
    const result = books.find((book) => book.id === parseInt(id));
    if (result) {
      return result;
    } else {
      throw new Error(`Book id ${id} not exist`);
    }
  }
  delete() {
    const index = books.findIndex((book) => book.id == this.id);
    if (index > -1) {
      books.splice(index, 1);
    } else {
      throw new Error(`Book id ${id} not exist`);
    }
  }
  update() {
    const index = books.findIndex((book) => book.id == this.id);
    if (index > -1) {
      const book = books[index];
      if (this.title) {
        book.title = this.title;
      }
      if (this.isbn) {
        book.isbn = this.isbn;
      }
      if (this.author) {
        book.author = this.author;
      }
      if (this.publishedDate) {
        book.publishedDate = this.publishedDate;
      }
    } else {
      throw new Error(`Book id ${id} not exist`);
    }
  }
};
