import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './BookForm.css';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/books', 
        { title, author },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      onAdd(response.data);
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  
  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
