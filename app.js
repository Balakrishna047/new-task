// app.js: Express.js application for API
const express = require('express');
const bodyParser = require('body-parser');
const Book = require('./book');
const EBook = require('./ebook');
const Library = require('./library');

const app = express();
app.use(bodyParser.json());

// In-memory SQLite Database Setup (for simplicity)
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const library = new Library();

// API Endpoints
app.post('/addBook', (req, res) => {
    try {
        const { title, author, ISBN, fileFormat } = req.body;
        const book = fileFormat ? new EBook(title, author, ISBN, fileFormat) : new Book(title, author, ISBN);
        library.addBook(book);
        res.json({ message: "Book added successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/listBooks', (req, res) => {
    res.json({ books: library.displayBooks() });
});

app.delete('/deleteBook/:ISBN', (req, res) => {
    const ISBN = req.params.ISBN;
    const deleted = library.deleteBook(ISBN);
    if (deleted) {
        res.json({ message: "Book deleted successfully" });
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

app.get('/searchBook', (req, res) => {
    const title = req.query.title;
    if (!title) {
        res.status(400).json({ error: "Title parameter is required" });
    } else {
        res.json({ books: library.searchByTitle(title) });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
