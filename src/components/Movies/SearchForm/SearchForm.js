import React from 'react';
import './SearchForm.css';
import { Switch, Route } from 'react-router-dom';


function SearchForm({ searchMovie, isCheckbox, setIsCheckbox, searchUserMovie }) {

    const storageInputValue = localStorage.getItem('inputValue');

    const [searchValue, setSearchValue] = React.useState(storageInputValue);
    const [serchSavedValue, setSerchSavedValue] = React.useState('');
    const [inputError, setInputError] = React.useState('');

    const handleChangeSearch = (evt) => {
        const { value } = evt.target;
        setSearchValue(value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const value = searchValue;
        if(value) {
            setInputError('');
            searchMovie(value);
        } else {
            setInputError('Нужно ввести ключевое слово');
        }
    };

    const handleChangeSearchSavedMovies= (evt) => {
        const { value } = evt.target;
        setSerchSavedValue(value);
    };

    const handleChangeCheckbox = () => {
        setIsCheckbox(!isCheckbox);
    };

    const handleSubmitSavedMovies = (evt) => {
        evt.preventDefault();
        const value = serchSavedValue;
        if(value) {
            setInputError('');
            searchUserMovie(value);
        } else {
            setInputError('Нужно ввести ключевое слово');
        }
    };

    return (
        <Switch>
            <Route path='/movies'>
                <form className='search' onSubmit={handleSubmit} noValidate>
                    <div className='search__form'>
                        <input className='search__form-string' placeholder='Фильм' type='text' name='nameRU'
                        required value={searchValue || ''} onChange={handleChangeSearch}></input>
                        <button className='search__form-submit' type='submit'>Найти</button>
                    </div>
                    <span className='searh__error'>{inputError}</span>
                    <div className='switch'>
                        <input className='switch__checkbox'
                        type="checkbox"
                        checked={isCheckbox}
                        onChange={handleChangeCheckbox}
                        />
                        <p className='switch__description'>Короткометражки</p>
                    </div>
                </form>
            </Route>
            <Route path='/saved-movies'>
            <form className='search' onSubmit={handleSubmitSavedMovies} noValidate>
                    <div className='search__form'>
                        <input className='search__form-string' placeholder='Фильм' type='text' name='nameRU'
                        required value={serchSavedValue || ''} onChange={handleChangeSearchSavedMovies}></input>
                        <button className='search__form-submit' type='submit'>Найти</button>
                    </div>
                    <span className='searh__error'>{inputError}</span>
                    <div className='switch'>
                        <input className='switch__checkbox'
                        type="checkbox"
                        checked={isCheckbox}
                        onChange={handleChangeCheckbox}
                        />
                        <p className='switch__description'>Короткометражки</p>
                    </div>
                </form>
            </Route>
        </Switch>
        
    );
}
  
export default SearchForm;