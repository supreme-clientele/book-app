import React, { useState } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import BookList from '../../components/booklist/BookList';
import classes from './MainPage.module.css';

const MainPage = () => {
    const [books, setBooks] = useState(['Том Сойер', 'Том Сойер', 'Том Сойер', 'Том Сойер']);
    const [inputValue, setInputValue] = useState('');

    const handleAddBook = () => {
        if (inputValue.trim() !== '') {
            setBooks([...books, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteBook = (index) => {
        const newBooks = books.filter((_, i) => i !== index);
        setBooks(newBooks);
    };

    return (
        <div className={classes.mainPage}>
            <h1 className={classes.title}>Добавить книгу</h1>
            <div className={classes.inputGroup}>
                <label htmlFor="bookName">Название :</label>
                <Input
                    id="bookName"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Введите название"
                />
                <Button label="Добавить" onClick={handleAddBook} />
            </div>
            <h2>Название</h2>
            <BookList books={books} onDelete={handleDeleteBook} />
        </div>
    );
};

export default MainPage;
