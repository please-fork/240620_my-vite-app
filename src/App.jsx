import { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './App.css'; 

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };


  return (
    <div className='container'>
      <h1>Book Management</h1>
      <div className='form-container'>
        <BookForm onAdd={addBook} />
      </div>
      <BookList books={books} setBooks={setBooks} />
    </div>
  );
};

export default App;
