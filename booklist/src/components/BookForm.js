import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContex';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [formData, setFormData] = useState({
    title: '',
    author: ''
  });

  const { title, author } = formData;
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_BOOK', payload: formData });
    setFormData({
      title: '',
      author: ''
    })
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="author"
        name="author"
        value={author}
        onChange={handleChange}
      />
      <input type="submit" value="add book" />
    </form>
   );
}
 
export default BookForm;
