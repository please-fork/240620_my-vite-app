import PropTypes from 'prop-types';
import { useEffect } from 'react';
import axios from 'axios';
import './BookList.css';


const BookList = ({ books, setBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/books', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};


BookList.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default BookList;
