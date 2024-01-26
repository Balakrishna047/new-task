// book.js: Class representing a Book
class Book {
    // Constructor to initialize attributes
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

    // Method to display book information
    displayInfo() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }
}

module.exports = Book;  // Exporting the Book class for use in other files
