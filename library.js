// library.js: Class representing a Library
class Library {
    // Constructor to initialize the list of books
    constructor() {
        this.books = [];
    }

    // Method to add a book to the library
    addBook(book) {
        // Validate that the input is an instance of the Book class
        if (!(book instanceof Book)) {
            throw new Error('Invalid book type');
        }
        this.books.push(book);
    }

    // Method to display all books in the library
    displayBooks() {
        return this.books.map(book => book.displayInfo());
    }

    // Method to search for a book by title
    searchByTitle(title) {
        return this.books.filter(book => book.title.includes(title)).map(book => book.displayInfo());
    }

    // Method to delete a book by ISBN
    deleteBook(ISBN) {
        const index = this.books.findIndex(book => book.ISBN === ISBN);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = Library;  // Exporting the Library class for use in other files
