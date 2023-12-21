import React, { useState } from 'react';
import './UserPage.css';

const UserPage = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    image: '',
    title: '',
    author: '',
    description: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addBook = () => {
    if (editIndex !== null) {
      const updatedBooks = [...books];
      updatedBooks[editIndex] = newBook;
      setBooks(updatedBooks);
      setEditIndex(null); 
    } else {
      setBooks((prevBooks) => [...prevBooks, newBook]);
    }

    setNewBook({
      image: '',
      title: '',
      author: '',
      description: '',
    });
  };

  const removeBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const startEditing = (index) => {
    setNewBook(books[index]);
    setEditIndex(index);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="book-form">
        <h2>{editIndex !== null ? 'Edit Book' : 'Add New Book'}</h2>
        <input
          type="text"
          placeholder="Image URL"
          value={newBook.image}
          onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newBook.description}
          onChange={(e) =>
            setNewBook({ ...newBook, description: e.target.value })
          }
        />
        <button className="add-button" onClick={addBook}>
          {editIndex !== null ? 'Save Changes' : 'Add Book'}
        </button>
      </div>
      <div className="search-bar">
      <h2 className='book-lib'>Book Library</h2>

        <input
          type="text"
          placeholder="Search by title or author"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="book-library">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <button
              className="remove-button"
              onClick={() => removeBook(index)}
            >
              Remove Book
            </button>
            <button
              className="edit-button"
              onClick={() => startEditing(index)}
            >
              Edit Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
