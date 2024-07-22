const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.js');

// Read all books
router.get('/', postController.getAllBooks);

// Read a book by ID
router.get('/:bookId', postController.getBookById);

// Create a new book
router.post('/', postController.createBook);

// Update a book by ID
router.put('/:bookId', postController.updateBook);

// Delete a book by ID
router.delete('/:bookId', postController.deleteBook);

module.exports = router;
