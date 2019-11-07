import React, {useContext} from 'react'
import { BookContext } from '../context/BookContex';

const BookDetails = ({ book: {title, author, id} }) => {
  const { removeBook } = useContext(BookContext);
  return (  
    <li onClick={() => removeBook(id)}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  );
}
 
export default BookDetails;