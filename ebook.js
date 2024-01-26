// ebook.js: Subclass EBook inheriting from Book
const Book = require('./book');

class EBook extends Book {
    // Constructor with additional attribute fileFormat
    constructor(title, author, ISBN, fileFormat) {
        super(title, author, ISBN);
        this.fileFormat = fileFormat;
    }

    // Override displayInfo method to include fileFormat
    displayInfo() {
        return `${super.displayInfo()}, File Format: ${this.fileFormat}`;
    }
}

module.exports = EBook;  // Exporting the EBook class for use in other files
