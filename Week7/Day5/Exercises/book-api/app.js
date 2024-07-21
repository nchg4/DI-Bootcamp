const express = require('express'); 
const app = express(); 

const PORT = 5001; 

const books = [
    { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
    { id: 4, title: 'Moby-Dick', author: 'Herman Melville', publishedYear: 1851 },
    { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', publishedYear: 1869 }
  ];

  app.get('/api/books', (req, res) => {
    res.json(books);
  });

  app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId, 10); 
    const book = books.find(b => b.id === bookId);
  
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' }); 
    }
  });

  app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body; 
  
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ message: 'Title, author, and publishedYear are required' });
    }
  
    const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1; 
    const newBook = { id: newId, title, author, publishedYear }; 

    books.push(newBook); 
    res.status(201).json(newBook); 
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});













