const db = require('../config/db.js');

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await db.select().from('books');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books', error });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await db('books').where({ id: bookId }).first();
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving book', error });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  const { title, author, published_year } = req.body;
  try {
    const [newBook] = await db('books')
      .insert({ title, author, published_year })
      .returning('*');
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error creating book', error });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  const { bookId } = req.params;
  const { title, author, published_year } = req.body;
  try {
    const [updatedBook] = await db('books')
      .where({ id: bookId })
      .update({ title, author, published_year })
      .returning('*');
    if (updatedBook) {
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const deleted = await db('books').where({ id: bookId }).del();
    if (deleted) {
      res.status(200).json({ message: 'Book deleted' });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};
