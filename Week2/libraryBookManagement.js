/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
*/

class Book {
    constructor(title, author, pages) {
        this.title = title; 
        this.author = author;
        this.pages = pages; 
        this.isAvailable = true;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false; // mark book as borrowed
            return this.title + ' has been borrowed';
        }
        return this.title + ' is not available';
    }

    returnBook() {
        this.isAvailable = true; // mark book as available again
        return this.title + ' has been returned';
    }

    getInfo() {
        return this.title + ' by ' + this.author + ' (' + this.pages + ' pages)';
    }

    isLongBook() {
        return this.pages > 300; // check if book has more than 300 pages
    }
}

// create book objects
let b1 = new Book('The Hobbit', 'J.R.R. Tolkien', 310);
let b2 = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 223);
let b3 = new Book('1984', 'George Orwell', 328);
let b4 = new Book('To Kill a Mockingbird', 'Harper Lee', 281);
let b5 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);

const books = [b1, b2, b3, b4, b5];

// display info of all books
books.forEach(book => {
    console.log(book.getInfo());
});

// borrow two books and show availability
console.log(b1.borrow());
console.log(b3.borrow());
console.log(b1.title + ' is available: ' + b1.isAvailable);
console.log(b3.title + ' is available: ' + b3.isAvailable);

// return one book and show updated status
console.log(b1.returnBook());
console.log(b1.title + ' is available: ' + b1.isAvailable);

// count books with more than 300 pages
const longBooks = books.filter(book => book.isLongBook());
console.log('Total long books: ' + longBooks.length);
longBooks.forEach(book => { console.log(book.getInfo());
});

// list all available books
const availableBooks = books.filter(book => book.isAvailable);
availableBooks.forEach(book => {
    console.log(book.getInfo());
});