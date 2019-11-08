import React, {useContext} from 'react'
import { BookContext } from '../context/BookContex';

const BookDetails = ({ book: {title, author, id} }) => {
  const { dispatch } = useContext(BookContext);
  return (  
    <li onClick={() => dispatch({type: 'REMOVE_BOOK', payload: id })}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  );
}
 
export default BookDetails;