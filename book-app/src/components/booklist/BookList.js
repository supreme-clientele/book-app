import React from 'react';
import classes from './BookList.module.css';

const BookList = ({ books, onDelete }) => {
    return (
        <ul className={classes.bookList}>
            {books.map((book, index) => (
                <li key={index} className={classes.bookItem}>
                    <span>{book}</span>
                    <button className={classes.deleteButton} onClick={() => onDelete(index)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default BookList;