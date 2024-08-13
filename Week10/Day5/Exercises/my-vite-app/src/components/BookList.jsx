import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../store';

function BookList() {
  const [genre, setGenre] = useState('Horror');
  
  const genreSelectors = {
    Horror: selectHorrorBooks,
    Fantasy: selectFantasyBooks,
    ScienceFiction: selectScienceFictionBooks,
  };

  const books = useSelector(genreSelectors[genre]);

  return (
    <div>
      <h1>Book Inventory</h1>
      <select onChange={(e) => setGenre(e.target.value)} value={genre}>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="ScienceFiction">Science Fiction</option>
      </select>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
